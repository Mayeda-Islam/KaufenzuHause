import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetAPI from "../../APIHooks/GetAPI";
import { Context } from "../../ContextProvider/ContextProvider";

const MyOrders = () => {
  const { user } = useContext(Context)
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    GetAPI(`myOrders/${user?.email}`, setOrders);
  }, [user?.email]);


  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="mt-8 w-full sm:overflow-x-auto md:overflow-x-auto lg:overflow-x-auto xl:overflow-x-auto">
      <h1 className="text-2xl my-4 font-semibold">Ordered List</h1>
      <hr className="mb-5" />

      {/* table  */}

      {
        orders?.length > 0 ?
          <div className=" mb-10">
            <table className="border-collapse border border-gray-400 w-full overflow-x-auto">
              <thead className="bg-gradient-to-r from-[#031f4bee] to-[#55c3c1f7] text-white font-bold text-lg">
                <tr className="text-center text-white">
                  <th className="px-4 py-4  ">SL</th>

                  <th className="px-4 py-4 ">Courier Tracking Link</th>
                  <th className="px-4 py-4 ">Ordered Date</th>
                  <th className="px-4 py-4 ">Transaction ID</th>
                  <th className="px-4 py-4 ">Status</th>
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
                      {
                        order?.courierLink ?
                          <a className="text-blue-500 font-medium underline" target="_blank" rel="noreferrer" href={order?.courierLink}>{order?.courierLink}</a> :
                          'Not Sent to Courier Yet!'
                      }
                    </td>

                    <td className="border border-gray-400 py-2 px-4 sm:px-4 text-md font-medium">
                      {moment(order?.date).format('LLL')}
                    </td>
                    <td className="border border-gray-400 py-2 px-4 sm:px-4 text-md font-medium">
                      {order?.transactionId}
                    </td>
                    <td className="border border-gray-400 py-2 px-4 sm:px-4 text-md font-medium">
                      {order?.status}
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



    </div>
  );
};

export default MyOrders;
