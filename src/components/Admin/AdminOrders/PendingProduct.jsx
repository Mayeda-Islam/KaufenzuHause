import React from 'react';
import TakeActionModal from './TakeActionModal';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import GetAPI from '../../../APIHooks/GetAPI';

const PendingProduct = () => {
    const [orders, setOrders] = React.useState([]);
    const [singleId, setSingleId] = useState(null)
    const [open, setOpen] = useState(false)
    useEffect(() => {
        GetAPI("orders/status/pending", setOrders);
    }, []);

    const handleModal = (_id) => {
        setSingleId(_id)
        setOpen(true)
    }



    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="mt-8 w-full sm:overflow-x-auto md:overflow-x-auto lg:overflow-x-auto xl:overflow-x-auto">
            <h1 className="text-2xl my-4 font-semibold">Pending Order List</h1>
            <hr className="mb-5" />

            {/* table  */}

            {
                orders?.length > 0 ?
                    <div className=" mb-10">
                        <table className="border-collapse border border-gray-400 w-full overflow-x-auto">
                            <thead className="bg-gradient-to-r from-[#031f4bee] to-[#55c3c1f7] text-white font-bold text-lg">
                                <tr className="text-center text-white">
                                    <th className="px-4 py-4  ">SL</th>

                                    <th className="px-4 py-4 ">Customer Name</th>

                                    <th className="px-4 py-4 ">Phone</th>

                                    <th className="px-4 py-4 ">Email</th>
                                    <th className="px-4 py-4 ">Transaction ID</th>
                                    <th className="px-4 py-4 ">Status</th>
                                    <th className="px-4 py-4 ">Action</th>
                                    <th className="px-4 py-4 ">Orders</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders?.reverse()?.map((order, index) => (
                                    <tr className="text-center " key={index}>
                                        <td className="border border-gray-400 py-2 px-4 sm:px-4">
                                            {index + 1}
                                        </td>
                                        <td className="border border-gray-400 py-2 px-4 sm:px-4 text-md font-medium">
                                            {order?.userInfo?.fullName}
                                        </td>
                                        <td className="border border-gray-400 py-2 px-4 sm:px-4 text-md font-medium">
                                            {order?.userInfo?.phoneNumber}
                                        </td>
                                        <td className="border border-gray-400 py-2 px-4 sm:px-4 text-md font-medium">
                                            {order?.userInfo?.email}
                                        </td>
                                        <td className="border border-gray-400 py-2 px-4 sm:px-4 text-md font-medium">
                                            {order?.transactionId}
                                        </td>
                                        <td className="border border-gray-400 py-2 px-4 sm:px-4 text-md font-medium">
                                            {order?.status}
                                        </td>
                                        <td className="border border-gray-400 py-2 px-4 sm:px-4 text-md font-medium">
                                            <button
                                                onClick={() => handleModal(order?._id)}
                                                className="px-4 py-1 bg-orange-500 hover:bg-primary text-white rounded-2xl">
                                                Take Action
                                            </button>

                                        </td>
                                        <td className="border border-gray-400 py-2 px-4 sm:px-4 text-md font-medium">
                                            <Link to={`/dashboard/orderDetails/${order?._id}`} >
                                                <button className="px-6 py-1 bg-orange-500 hover:bg-primary text-white rounded-2xl">
                                                    See Orders
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className='text-center my-10'>
                        <p className='text-lg font-semibold'>No Order Yet On the List</p>
                    </div>
            }

            {
                open &&
                <>
                    <TakeActionModal
                        setOpen={setOpen}
                        open={open}
                        setOrders={setOrders}
                        orders={orders}
                        singleId={singleId}

                    />
                </>
            }

        </div>
    );
};

export default PendingProduct;