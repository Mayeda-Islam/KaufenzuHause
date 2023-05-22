import { Box, Chip, Typography } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";

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
            className="bg-primary"
            sx={{
              p: 2,
              borderRadius: 2,
              boxShadow: 3,
            }}
            variant="p"
            component="h2"
          >
            {sellIncome.icon}
            <Typography sx={{ color: "gray", mt: 2 }}>
              {" "}
              {sellIncome.title}
            </Typography>
            <Typography sx={{ fontSize: 30, fontWeight: 600, mb: 2 }}>
              {" "}
              $ {sellIncome.amount}
            </Typography>
          </Typography>
        </>
      ))}
      {ordersInfo.map((orderInfo) => (
        <>
          <Typography
            className="bg-primary"
            sx={{
              p: 2,
              borderRadius: 2,
              boxShadow: 3,
            }}
            variant="p"
            component="h2"
          >
            <Typography sx={{ my: 4, pl: 4, fontSize: 28, fontWeight: 600 }}>
              {" "}
              {orderInfo.title}
            </Typography>
            {/* <Typography sx={{ fontSize: 30, fontWeight: 600, mb: 2 }}>
              {" "}
              $ {sellIncome.amount}
            </Typography> */}
          </Typography>
        </>
      ))}
    </Box>
  );
};

export default AdminDashboard;
