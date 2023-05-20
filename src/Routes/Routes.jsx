import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Cart from "../pages/Cart/Cart";
import NotFound from "../pages/NotFound/NotFound";
import AdminLayOut from "../components/Admin/AdminLayOut";

export const router = createBrowserRouter(
  [
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
        {
          path: "/admin/demo",
          element: <Home></Home>,
        },
      ],
    },
  ]

  //   createRoutesFromElements(
  //     <Route path="/" element={<Main />}>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/register" element={<Register />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/cart" element={<Cart />} />
  //       <Route path="*" element={<NotFound />} />
  //       <Route path="/adminDashboard" element={<AdminLayOut></AdminLayOut>}>
  //         <Route path="/adminDashboard/demo" element={<Home />} />
  //       </Route>
  //     </Route>
  //   )
);
