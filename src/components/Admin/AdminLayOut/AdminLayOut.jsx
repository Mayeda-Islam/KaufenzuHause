import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Collapse, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useEffect } from "react";
import GetAPI from "../../../APIHooks/GetAPI";
import { useState } from "react";
import { Context } from "../../../ContextProvider/ContextProvider";
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  "& .active-link": {
    // Define your active link styles here
    color: "red",
    backgroundColor: "yellow",
  },
}));

export default function AdminLayOut() {
  const location = useLocation();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [nestedOpen, setNestedOpen] = React.useState([]);
  const { user } = React.useContext(Context)
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    GetAPI(`users/${user?.email}`, setCurrentUser)
  }, [user?.email, setCurrentUser])

  const handleClick = (index) => {
    setNestedOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    GetAPI("logo", setLogo);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menu = [
    {
      title: "Dashboard",
      icon: <DashboardIcon />,
      linkPath: "/dashboard/",
    },
    {
      title: "Profile",
      icon: <AccountCircleIcon />,
      linkPath: "profile",
    },

    // {
    //   title: "My Orders",
    //   icon: <AddShoppingCartIcon />,
    //   link: "myOrders",
    // },

    {
      title: "Orders",
      icon: <AddShoppingCartIcon />,

      items: [
        {
          title: "Ordered Product",
          linkPath: "/dashboard/orders/orderedProducts"
        },
        {
          title: "Pending Product",
          linkPath: "/dashboard/orders/pendingProducts"
        },
        {
          title: "Delivered Product",
          linkPath: "/dashboard/orders/deliveredProducts",
        },
        {
          title: "Canceled Product",
          linkPath: "/dashboard/orders/canceledProducts",
        },
      ],
    },
    {
      title: "Category",
      icon: <CategoryIcon />,
      linkPath: "category",
    },
    {
      title: "Product",
      icon: <InventoryIcon />,

      items: [
        {
          title: "Add Product",

          linkPath: "product/addProduct",
        },
        {
          title: "All Product",

          linkPath: "product/allProduct",
        },
      ],
    },
    {
      title: "System Settings",
      icon: <SettingsSystemDaydreamIcon />,

      items: [
        {
          title: "Product Slider",

          linkPath: "systemSetting/productSection",
        },
        {
          title: "Hero Section",

          linkPath: "systemSetting/heroSlider",
        },
        {
          title: "Logo Section",

          linkPath: "systemSetting/logoSection",
        },
        {
          title: "Footer Section",

          linkPath: "systemSetting/footerSection",
        },
      ],
    },
    {
      title: "Password Setting",
      icon: <SettingsIcon />,
      linkPath: "passwordSetting",
    },
  ];

  const userMenu = [
    {
      title: "My Orders",
      icon: <AddShoppingCartIcon />,
      linkPath: "myOrders",
    },
    {
      title: "Profile",
      icon: <AccountCircleIcon />,
      linkPath: "profile",
    },
    {
      title: "Password Setting",
      icon: <SettingsIcon />,
      linkPath: "passwordSetting",
    },
  ]


  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar className="shadow-none border-none" position="fixed" open={open}>
        <Toolbar className="bg-white text-black inline">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              color: "black",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <div className="ml-auto ">
            <Typography
              sx={{
                padding: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
                margin: "0 auto",
              }}
              component="div"
            >

              {
                currentUser?.image ?
                  <img src={currentUser?.image} alt="" className="w-[3.5rem] rounded-full mr-2" /> :
                  <AccountCircleIcon style={{ fontSize: "4rem" }} />
              }

              <div>
                <Typography
                  variant="h6"
                  noWrap
                  component="p"
                  sx={{ fontWeight: 600 }}
                >
                  {currentUser?.fullName}
                </Typography>
                <Typography component="p" sx={{ fontWeight: 600 }}>
                  {currentUser?.email}
                </Typography>
              </div>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#1A3C61",
            color: "gray",
          },
        }}
        variant="permanent"
        open={open}
      >
        <div className="flex justify-between items-center mb-3">
          <Link to={"/"}>
            <img
              src={`${logo[0]?.headerLogoURL}`}
              alt="logo"
              className="w-36 ml-4"
            />
          </Link>
          <DrawerHeader>
            <div>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon className="text-white" />
                ) : (
                  <ChevronLeftIcon className="text-white" />
                )}
              </IconButton>
            </div>
          </DrawerHeader>
        </div>
        <Divider className=" bg-lightGray shadow-lg" />

        <List>
          {user?.role === 'admin' && menu?.map((text, index) => (
            <React.Fragment key={index}>
              <NavLink
                activeclassname="active-link"
                // className={({ isactive }) => (isactive ? "text-red" : "")}
                key={index}
                to={text.linkPath ? text.linkPath : location.pathname}
              // isactive={() => location.pathname === text.linkPath}
              >
                <ListItem
                  onClick={() => handleClick(index)}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        color: "white",
                        justifyContent: "center",
                      }}
                    >
                      {text.icon}
                    </ListItemIcon>
                    <ListItemText
                      className="text-md "
                      sx={{
                        opacity: open ? 1 : 0,

                        color: "white",
                      }}
                    >
                      <span className="text-md">{text.title}</span>
                    </ListItemText>
                    {open &&
                      text.items &&
                      (nestedOpen[index] ? (
                        <ArrowDropDownIcon className="text-white" />
                      ) : (
                        <ArrowDropDownIcon className="text-white" />
                      ))}
                  </ListItemButton>
                </ListItem>
              </NavLink>

              {open && (
                <>
                  {text?.items && (
                    <Collapse
                      in={nestedOpen[index]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {text.items.map((subText, subIndex) => (
                          <NavLink
                            // className={({ isactive, isPending }) =>
                            //   isPending ? "pending" : isactive ? "text-red" : ""
                            // }
                            key={index}
                            to={text.linkPath}
                          >
                            <ListItem
                              button
                              key={subIndex}
                              component={Link}
                              to={subText.linkPath}
                              disablePadding
                              sx={{ display: "block" }}
                            >
                              <ListItemButton
                                sx={{
                                  minHeight: 48,
                                  justifyContent: open ? "initial" : "center",
                                  px: 4,
                                }}
                              >
                                <ListItemIcon
                                  sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                  }}
                                >
                                  {subText.icon}
                                </ListItemIcon>
                                <ListItemText
                                  sx={{
                                    color: "white",
                                    opacity: open ? 1 : 0,
                                    fontSize: "0.8em",
                                  }}
                                >
                                  <span className="text-md">
                                    {subText.title}
                                  </span>
                                </ListItemText>
                              </ListItemButton>
                            </ListItem>
                          </NavLink>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </>
              )}
            </React.Fragment>
          ))}



          {user?.role === 'user' && userMenu?.map((text, index) => (
            <React.Fragment key={text.title}>
              <Link
                activeclassname="active-link"
                // className={({ isactive }) => (isactive ? "text-red" : "")}
                key={index}
                to={text.linkPath ? text.linkPath : location.pathname}
              // isactive={() => location.pathname === text.linkPath}
              >
                <ListItem
                  onClick={() => handleClick(index)}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        color: "white",
                        justifyContent: "center",
                      }}
                    >
                      {text.icon}
                    </ListItemIcon>
                    <ListItemText
                      className="text-md "
                      sx={{
                        opacity: open ? 1 : 0,

                        color: "white",
                      }}
                    >
                      <span className="text-md">{text.title}</span>
                    </ListItemText>
                    {open &&
                      text.items &&
                      (nestedOpen[index] ? (
                        <ArrowDropDownIcon className="text-white" />
                      ) : (
                        <ArrowDropDownIcon className="text-white" />
                      ))}
                  </ListItemButton>
                </ListItem>
              </Link>

            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}
