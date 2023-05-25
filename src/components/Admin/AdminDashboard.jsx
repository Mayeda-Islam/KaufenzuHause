import CreditCardIcon from "@mui/icons-material/CreditCard";
import DashboardChart from "./DashboardChart";

const AdminDashboard = () => {
  const sellsIncome = [
    {
      icon: <CreditCardIcon />,
      title: "Total income",
      amount: "998,778",
    },
    {
      icon: <CreditCardIcon />,
      title: "Month income",
      amount: "998,778",
    },
    {
      icon: <CreditCardIcon />,
      title: "Today's income",
      amount: "998,778",
    },
  ];
  const ordersInfo = [
    { title: "Total Orders" },
    { title: "Orders Delivered" },
    { title: "Order In Progress" },
  ];
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 text-white ">
        {sellsIncome.map((sellIncome) => (
          <>
            {" "}
            <div className="bg-gradient-to-r from-[#031f4bee] to-[#55c3c1f7] pt-6  p-4 lg:pl-8 rounded-lg shadow-lg">
              <span className="bg-green-100 text-green-800 text-xs  font-medium mr-2  px-3 py-3  rounded ">
                {sellIncome.icon}
              </span>
              <div className=""> </div>
              <div className="text-lg mt-6 mb-4"> {sellIncome.title}</div>
              <div className="text-4xl mb-4">
                {" "}
                <span className="text-gray-500">$</span> {sellIncome.amount}
              </div>
            </div>
          </>
        ))}
        {ordersInfo.map((orderInfo) => (
          <>
            <div className="bg-gradient-to-r from-[#031f4bee] to-[#55c3c1f7] p-12 rounded-md ">
              <div className="text-3xl"> {orderInfo.title}</div>
            </div>
          </>
        ))}
      </div>
      <DashboardChart></DashboardChart>
    </div>
  );
};

export default AdminDashboard;
