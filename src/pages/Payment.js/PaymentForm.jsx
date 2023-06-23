import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../ContextProvider/ContextProvider';
import { useEffect } from 'react';
import serverUrl from '../../config/Config';

const PaymentForm = () => {
    const { cart, calculateTotal } = React.useContext(Context)
    const userInfo = JSON.parse(localStorage.getItem("info"))
    // const [cardError, setCardError] = useState("")
    // const [success, setSuccess] = useState("")
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe()
    const elements = useElements()
    const [processing, setProcessing] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const price = calculateTotal(100)

    useEffect(() => {
        setIsLoading(true)
        fetch(`${serverUrl}/payment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ price: price }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data?.clientSecret)
                setIsLoading(false)
            });
    }, [price]);

    if (isLoading) {
        return <p className='flex justify-center items-center h-96'>Loading...</p>
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        console.log(paymentMethod)

        if (error) {
            navigate('/error')
        }



        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: 'Miskatur Rahman',
                        email: 'miskaturrahman34826@gmail.com'
                    },
                },

            },
        );
        if (confirmError) {
            navigate('/payment-failed')
            return;
        }

        if (paymentIntent?.status === "succeeded") {
            const payment = {
                price,
                transactionId: paymentIntent.id,
                cart,
                userInfo,
                status: 'pending',
                date: new Date()
            }
            fetch(`${serverUrl}/order`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {

                    // if (data?.status === 'success') {
                    //     fetch(`${serverUrl}/order`, {
                    //         method: 'POST',
                    //         headers: {
                    //             'content-type': 'application/json',
                    //         }
                    //     })
                    //         .then(res => res.json())
                    //         .then(data => {
                    //             if (data?.status === 'success')
                    //              
                    //         })
                    // }
                    if (data?.status === 'success') {
                        navigate('/payment-success')
                        localStorage.removeItem('info')
                    }
                })
        }
        else {
            navigate('/payment-failed')
        }
        setProcessing(false)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: 'text-secondary',
                                '::placeholder': {
                                    color: 'text-secondary',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="bg-primary hover:bg-secondary py-2 px-7 text-white font-medium rounded-md mt-4 ml-auto "
                    disabled={!stripe || !clientSecret || processing}
                >
                    Pay Now
                </button>
            </form>
        </div>
    );
};

export default PaymentForm;