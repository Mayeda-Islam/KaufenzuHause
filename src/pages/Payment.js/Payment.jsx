import React from 'react';
import PaymentForm from './PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Context } from '../../ContextProvider/ContextProvider';

const Payment = () => {
    const { calculateTotal } = React.useContext(Context)

    const stripePromise = loadStripe(`pk_test_51M6dSAIBhZ31yizUwuJhkIUlrTzKMYnEk9Ml4B4mxeZQqZteRv7pXfeX3gjntBIh1p8iy4ZynZX93WatzKwfUfVh00C6zRUK3y`);

    return (
        <div>
            <div className='px-5'>
                <h2 className="text-2xl text-center my-5 text-black">Payment for selected products.</h2>
                <p className='text-center text-sm text-black'>Please purchase
                    <span className=' font-bold text-md text-secondary'>
                        € {calculateTotal(100)}</span> for your chosen product.</p>

                <div className='my-16 '>
                    <h2 className='text-center text-xl font-semibold my-5 text-secondary'>Your Payment Information here</h2>
                    <div className='w-full lg:w-3/5 mx-auto border-2 p-10 shadow-lg rounded-lg bg-gray-100 border-primary'>
                        <Elements stripe={stripePromise}>
                            <PaymentForm />
                        </Elements>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;