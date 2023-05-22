import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Cart from "../pages/Cart/Cart";
import NotFound from "../pages/NotFound/NotFound";

import AdminLayOut from "../components/Admin/AdminLayOut";
import AdminProfile from "../components/Admin/AdminProfile";
import AdminCategory from "../components/Admin/AdminCategory";
import AdminProduct from "../components/Admin/AdminProduct";
import AdminSystemSetting from "../components/Admin/AdminSystemSetting";
import AdminOrders from "../components/Admin/AdminOrders";
import AdminDashboard from "../components/Admin/AdminDashboard";

import ProductDetails from '../pages/ProductDetails/ProductDetails';
import CategorisedProducts from '../pages/CategoriedProducts/CategorisedProducts';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,


    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

{
  path: "/productDetails",
    element:<ProductDetails />,
},
  {
  path: "/categoryProducts",
    element:<CategorisedProducts />,
},
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/admin/",
    element: <AdminLayOut></AdminLayOut>,
    children: [
      {
        path: "",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },

      {
        path: "profile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "category",
        element: <AdminCategory></AdminCategory>,
      },
      {
        path: "product",
        element: <AdminProduct></AdminProduct>,
      },
      {
        path: "orders",
        element: <AdminOrders></AdminOrders>,
      },
      {
        path: "system-setting",
        element: <AdminSystemSetting></AdminSystemSetting>,
      },
    ],
  },
]);
