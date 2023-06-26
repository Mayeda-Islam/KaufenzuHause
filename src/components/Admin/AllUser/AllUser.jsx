
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetAPI from "../../../APIHooks/GetAPI";
import { Context } from "../../../ContextProvider/ContextProvider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FaUserCircle } from "react-icons/fa";


const AllUser = () => {
    const { user } = useContext(Context)
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        GetAPI(`users`, setOrders);
    }, [user?.email]);


    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="mt-8 w-full sm:overflow-x-auto md:overflow-x-auto lg:overflow-x-auto xl:overflow-x-auto">
            <h1 className="text-2xl my-4 font-semibold">All User</h1>
            <hr className="mb-5" />

            {/* table  */}

            {
                orders?.length > 0 ?
                    <div className=" mb-10">
                        <table className="border-collapse border border-gray-400 w-full overflow-x-auto">
                            <thead className="bg-gradient-to-r from-[#031f4bee] to-[#55c3c1f7] text-white font-bold text-lg">
                                <tr className="text-center text-white">
                                    <th className="px-4 py-4  ">SL</th>
                                    <th className="px-4 py-4  ">Image</th>
                                    <th className="px-4 py-4 ">Full Name</th>
                                    <th className="px-4 py-4 ">Email</th>
                                    <th className="px-4 py-4 ">Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders?.reverse()?.map((order, index) => (
                                    <tr className="text-center py-1" key={index} >
                                        <td className="border border-gray-400 py-2 px-4 sm:px-4">
                                            {index + 1}
                                        </td>
                                        <td className="border  flex justify-center ">

                                            {
                                                order?.image ?
                                                    <img
                                                        src={order?.image}
                                                        alt="Slider Image"
                                                        className="w-12  rounded-full"
                                                    /> :
                                                    <div className="">
                                                        <FaUserCircle className=" rounded-full text-5xl" />
                                                    </div>
                                            }
                                        </td>
                                        <td className="border border-gray-400 py-2 px-4 sm:px-4 text-md font-medium">
                                            {order?.fullName}
                                        </td>

                                        <td className="border border-gray-400 py-2 px-4 sm:px-4 text-md font-medium">
                                            {order?.email}
                                        </td>
                                        <td className="border border-gray-400 py-2 px-4 sm:px-4 text-md font-medium">
                                            {order?.phoneNumber}
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



        </div>
    );
};

export default AllUser;
