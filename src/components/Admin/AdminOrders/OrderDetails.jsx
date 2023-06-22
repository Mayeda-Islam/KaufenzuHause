import React from 'react';
import { useParams } from 'react-router-dom';
import GetAPI from '../../../APIHooks/GetAPI';
import { useState } from 'react';
import moment from 'moment/moment';

const OrderDetails = () => {
    const { id } = useParams()
    const [orderInfo, setOrderInfo] = useState({})
    React.useEffect(() => {
        GetAPI(`orders/${id}`, setOrderInfo)
    }, [id])
    return (
        <div className='my-5 '>
            <h1 className='text-4xl  font-semibold'>Order Details</h1>
            <hr className="h-2 my-5" />
            <div className='border-2 shadow-lg p-5 rounded-xl border-blue-400'>
                <h1 className='text-2xl font-semibold my-3'>Customer Personal Information</h1>
                <hr className="my-5 h-1  bg-blue-500 " />
                <div className='text-xl'>
                    <h1 className='my-2'>Name : <span className='font-semibold'>{orderInfo?.userInfo?.fullName}</span>
                    </h1>

                    <h1 className='my-2'>Email : <span className='font-semibold'>{orderInfo?.userInfo?.email}</span>
                    </h1>

                    <h1 className='my-2'>Phone Number : <span className='font-semibold'>{orderInfo?.userInfo?.phoneNumber}</span>
                    </h1>

                    <h1 className='my-2'>Street Address : <span className='font-semibold'>{orderInfo?.userInfo?.streetAddress}</span>
                    </h1>

                    <h1 className='my-2'>City : <span className='font-semibold'>{orderInfo?.userInfo?.city}</span>
                    </h1>

                    <h1 className='my-2'>Zip Code : <span className='font-semibold'>{orderInfo?.userInfo?.zipCode}</span>
                    </h1>

                    <h1 className='my-2'>Country : <span className='font-semibold'>{orderInfo?.userInfo?.country}</span>
                    </h1>

                    <hr className='my-5' />
                    <h1 className='my-2'>Additional Information : </h1>
                    <p><span className='font-semibold'>{orderInfo?.userInfo?.additional}</span></p>


                </div>
            </div>
            <div className='border-2 shadow-lg p-5 rounded-xl border-blue-400 my-10'>
                <h1 className='text-2xl font-semibold my-3'>Order Information</h1>
                <hr className="my-5 h-1  bg-blue-500 " />

                <div>
                    <h1 className='my-2'>Transaction ID : <span className='font-semibold'>{orderInfo?.transactionId}</span>
                    </h1>
                    <h1 className='my-2'>Order Status : <span className='font-semibold'>{orderInfo?.status}</span>
                    </h1>
                    <h1 className='my-2'>Courier Sent Link : <span className='font-semibold'>{orderInfo?.courierLink}</span>
                    </h1>
                    <h1 className='my-2'>Order Date : <span className='font-semibold'>
                        {moment(orderInfo?.date).format('LLL')}
                    </span>

                    </h1>
                    {
                        (orderInfo?.status === 'delivered' && orderInfo?.deliveryDate) &&
                        <h1 className='my-2'>Delivered To Courier Date : <span className='font-semibold'>

                            {moment(orderInfo?.deliveryDate).calendar()}
                        </span>
                        </h1>
                    }

                    {
                        orderInfo?.cart?.map((order, index) => {
                            const { _id, productTitle, productPrice, model, brand, color, size, quantity } = order;
                            return (
                                <div key={_id} className='my-5 border-2 rounded-lg shadow-lg p-5 border-primary'>
                                    <h1 className='font-semibold'>Product Number - {index + 1}</h1>
                                    <hr className='h-1  bg-blue-500' />

                                    <div className='my-3'>
                                        <h1 className='my-2'>Product Name : <span className='font-semibold'>{productTitle}</span>
                                        </h1>
                                        <h1 className='my-2'>Product Price : <span className='font-semibold'>{productPrice} Euro</span>
                                        </h1>
                                        <h1 className='my-2'>Product Quantity : <span className='font-semibold'>{quantity} Items</span>
                                        </h1>
                                        {
                                            model &&
                                            <h1 className='my-2'>Product Model : <span className='font-semibold'>{model} </span>
                                            </h1>
                                        }
                                        <h1 className='my-2'>Product Brand : <span className='font-semibold'>{brand} </span>
                                        </h1>
                                        {
                                            size &&
                                            <h1 className='my-2'>Product Size : <span className='font-semibold'>{size} </span>
                                            </h1>
                                        }
                                        <h1 className='my-2'>Product Color : <span className='font-semibold'>{color} </span>
                                        </h1>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default OrderDetails;