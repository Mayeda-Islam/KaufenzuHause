import {
  BsWalletFill,
  BsCurrencyExchange,
  BsCart4,
} from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";
import { BiTask } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
// import DashboardChart from "./DashboardChart";
import { useEffect, useState } from "react";
import GetAPI from "../../../APIHooks/GetAPI";

const AdminDashboard = () => {

  const [totalOrder, setTotalOrder] = useState([])
  const [orderPending, setOrderPending] = useState([])
  const [orderCanceled, setOrderCanceled] = useState([])
  const [orderDelivered, setOrderDelivered] = useState([])

  useEffect(() => {
    GetAPI("orders", setTotalOrder);
    GetAPI("orders/status/pending", setOrderPending);
    GetAPI("orders/status/canceled", setOrderCanceled);
    GetAPI("orders/status/delivered", setOrderDelivered);

  }, [])
  const today = new Date();

  const todayOrders = totalOrder.filter(order => {
    const orderDate = new Date(order.date);
    return (
      orderDate.getFullYear() === today.getFullYear() &&
      orderDate.getMonth() === today.getMonth() &&
      orderDate.getDate() === today.getDate()
    );
  });
  const totalPrice = totalOrder?.reduce((sum, order) => sum + order.price, 0);

  const sellsIncome = [
    {
      icon: <BsWalletFill />,
      title: "Total income",
      amount: totalPrice,
    },
    {
      icon: <FaRegCalendarAlt />,
      title: "Total Order",
      amount: totalOrder?.length
    },
    {
      icon: <BsCart4 />,
      title: "Today's Orders",
      amount: todayOrders?.length
    },
    {
      icon: <GiTwoCoins />,
      title: "Order Pending",
      amount: orderPending?.length,
    },
    {
      icon: <BsCurrencyExchange />,
      title: "Order Delivered",
      amount: orderDelivered?.length,
    },
    {
      icon: <BiTask />,
      title: "Order Canceled",
      amount: orderCanceled?.length
    },


  ];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-11/12  mx-auto my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 text-white ">
        {sellsIncome.map((sellIncome, index) => (
          <>
            {" "}
            <div key={index} className="bg-gradient-to-r from-[#031f4bee] to-[#55c3c1f7] pt-6 text-white text-center md:text-left py-10 lg:pl-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-3">
                <span className="lg:col-span-1 text-8xl place-self-center text-center text-white  font-medium mr-2  px-3 py-3  rounded ">
                  {sellIncome.icon}
                </span>
                <div className=" lg:col-span-2 ">
                  <div className="text-lg lg:text-xl font-semibold mt-6 mb-2">
                    {" "}
                    {sellIncome.title}
                  </div>
                  <div className="md:text-2xl lg:text-4xl mb-4">
                    {sellIncome?.amount === totalPrice && '€'} {sellIncome.amount}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
        {/* {ordersInfo.map((orderInfo) => (
          <>
            <div className="bg-gradient-to-r from-[#031f4bee] to-[#55c3c1f7] p-12 rounded-md ">
              <div className="text-3xl"> {orderInfo.title}</div>
            </div>
          </>
        ))} */}
      </div>
      {/* <DashboardChart></DashboardChart> */}
    </div>
  );
};

export default AdminDashboard;
