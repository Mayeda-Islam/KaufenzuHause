import { Box, Chip, Typography } from "@mui/material";
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
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 4,
        }}
      >
        {sellsIncome.map((sellIncome) => (
          <>
            <Typography
              className="bg-gradient-to-r from-[#031f4bee] to-[#55c3c1f7]"
              sx={{
                p: 2,
                borderRadius: 2,
                boxShadow: 3,
              }}
              variant="p"
              component="h2"
            >
              {sellIncome.icon}
              <Typography sx={{ color: "white", mt: 2 }}>
                {" "}
                {sellIncome.title}
              </Typography>
              <Typography
                sx={{ fontSize: 30, fontWeight: 600, mb: 2, color: "white" }}
              >
                {" "}
                $ {sellIncome.amount}
              </Typography>
            </Typography>
          </>
        ))}
        {ordersInfo.map((orderInfo) => (
          <>
            <Typography
              className="bg-gradient-to-r from-[#031f4bee] to-[#55c3c1f7]"
              sx={{
                p: 2,
                borderRadius: 2,
                boxShadow: 3,
                color: "white",
              }}
              variant="p"
              component="h2"
            >
              <Typography sx={{ my: 4, pl: 4, fontSize: 28, fontWeight: 600 }}>
                {" "}
                {orderInfo.title}
              </Typography>
            </Typography>
          </>
        ))}
      </Box>
      <DashboardChart></DashboardChart>
    </Box>
  );
};

export default AdminDashboard;
