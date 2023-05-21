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
    path: "/admin",
    element: <AdminLayOut></AdminLayOut>,
    children: [
      //   {
      //     path: "/admin/dashboard",
      //     element: <AdminLayOut></AdminLayOut>,
      //   },
      {
        path: "/admin/profile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "/admin/category",
        element: <AdminCategory></AdminCategory>,
      },
      {
        path: "/admin/product",
        element: <AdminProduct></AdminProduct>,
      },
      {
        path: "/admin/system-setting",
        element: <AdminSystemSetting></AdminSystemSetting>,
      },
    ],
  },
]);
