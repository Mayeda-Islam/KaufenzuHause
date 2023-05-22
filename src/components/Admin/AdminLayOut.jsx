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
  const handleClick = (index) => {
    setNestedOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

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
      linkPath: "/admin/dashboard",
    },
    {
      title: "Profile",
      icon: <AccountCircleIcon />,
      linkPath: "/admin/profile",
    },
    {
      title: "Orders",
      icon: <AddShoppingCartIcon />,
      linkPath: "/admin/orders",
      items: [
        { title: "Ordered Product", linkPath: "/admin/orders/orderedProducts" },
        {
          title: "Delivered Product",
          linkPath: "/admin/orders/deliveredProducts",
        },
      ],
    },
    {
      title: "Category",
      icon: <CategoryIcon />,
      linkPath: "/admin/category",
      items: [
        {
          title: "Add Category",

          linkPath: "/admin/category/addCategory",
        },
        {
          title: "Category List",

          linkPath: "/admin/category/categoryList",
        },
      ],
    },
    {
      title: "Product",
      icon: <InventoryIcon />,
      linkPath: "/admin/product",
      items: [
        {
          title: "Add Product",

          linkPath: "/admin/product/addProduct",
        },
        {
          title: "All Product",

          linkPath: "/admin/product/allProduct",
        },
      ],
    },
    {
      title: "System Setting",
      icon: <SettingsSystemDaydreamIcon />,
      linkPath: "/admin/system-setting",
      items: [
        {
          title: "Hero slider",

          linkPath: "/admin/systemSetting/heroSlider",
        },
        {
          title: "Side Banner",

          linkPath: "/admin/systemSetting/sideBanner",
        },
        {
          title: "Nav Logo",

          linkPath: "/admin/systemSetting/navLogo",
        },
      ],
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar className="shadow-none border-none" position="fixed" open={open}>
        <Toolbar className="bg-white inline">
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
        </Toolbar>
      </AppBar>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "black",
            color: "gray",
          },
        }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon className="text-white" />
            ) : (
              <ChevronLeftIcon className="text-white" />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {menu.map((text, index) => (
            <React.Fragment key={text.title}>
              <NavLink
                activeClassName="active-link"
                className={({ isActive }) => (isActive ? "text-red" : "")}
                key={index}
                to={text.linkPath}
                isActive={() => location.pathname === text.linkPath}
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
                      className="text-lg "
                      sx={{
                        opacity: open ? 1 : 0,
                        fontSize: "2rem",
                        color: "white",
                      }}
                    >
                      <span className="text-xl">{text.title}</span>
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
                            className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "text-red" : ""
                            }
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
                                  <span className="text-xl">
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
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}
