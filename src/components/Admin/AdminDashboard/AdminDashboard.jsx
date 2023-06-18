import {
  BsWalletFill,
  BsCurrencyExchange,
  BsCart4,
} from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";
import { BiTask } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import DashboardChart from "./DashboardChart";
import { useEffect } from "react";

const AdminDashboard = () => {
  const sellsIncome = [
    {
      icon: <BsWalletFill />,
      title: "Total income",
      amount: "998,778",
    },
    {
      icon: <GiTwoCoins />,
      title: "Month income",
      amount: "998,778",
    },
    {
      icon: <BsCurrencyExchange />,
      title: "Today's income",
      amount: "998,778",
    },
    { icon: <BiTask />, title: "Total Orders", amount: 50 },
    { icon: <FaRegCalendarAlt />, title: "Monthly Orders", amount: 50 },
    { icon: <BsCart4 />, title: "Today's Orders", amount: 50 },
  ];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-11/12  mx-auto my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 text-white ">
        {sellsIncome.map((sellIncome) => (
          <>
            {" "}
            <div className="bg-gradient-to-r from-[#031f4bee] to-[#55c3c1f7] pt-6 text-white text-center md:text-left py-10 lg:pl-8 rounded-lg shadow-lg">
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
                    € {sellIncome.amount}
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
      <DashboardChart></DashboardChart>
    </div>
  );
};

export default AdminDashboard;
