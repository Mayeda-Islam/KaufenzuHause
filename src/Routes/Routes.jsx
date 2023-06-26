import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Cart from "../pages/Cart/Cart";
import NotFound from "../pages/NotFound/NotFound";

import ProductDetails from "../pages/ProductDetails/ProductDetails";
import CategorisedProducts from "../pages/CategoriedProducts/CategorisedProducts";
import Checkout from "../pages/Checkout/Checkout";
import AboutUs from "../pages/AboutUS/AboutUs";


import AdminLayOut from "../components/Admin/AdminLayOut/AdminLayOut";
import AdminDashboard from "../components/Admin/AdminDashboard/AdminDashboard";
import AdminProfile from "../components/Admin/AdminProfile/AdminProfile";


import AdminSystemSetting from "../components/Admin/AdminSystemSetting/AdminSystemSetting";


import CategoryList from "../components/Admin/AdminCategory/CategoryList";
import AddProduct from "../components/Admin/AdminProduct/AddProduct";
import AllProduct from "../components/Admin/AdminProduct/AllProduct";
import OrderedProduct from "../components/Admin/AdminOrders/OrderedProduct";
import DeliveredProduct from "../components/Admin/AdminOrders/DeliveredProduct";
import Category from "../components/Admin/AdminCategory/Category";
import HeroSlider from "../components/Admin/SyestemSetting/HeroSlider/HeroSlider";

import FooterSection from "../components/Admin/SyestemSetting/FooterSection/FooterSection";
import LogoSection from "../components/Admin/SyestemSetting/LogoSection.jsx/LogoSection";
import ProductSection from "../components/Admin/SyestemSetting/ProductSection/ProductSection";
import AllProducts from "../pages/AllProducts/AllProducts";
import Error from "../pages/Error/Error";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";
import PaymentFailed from "../pages/PaymentFailed/PaymentFailed";
import Payment from "../pages/Payment.js/Payment";
import MyOrders from "../components/Users/MyOrders";
import ForgotPassword from "../pages/Login/ForgotPassword";
import PasswordChange from "../components/Admin/PasswordChange/PasswordChange";
import InputOTP from "../pages/Login/InputOTP";
import OrderDetails from "../components/Admin/AdminOrders/orderDetails";
import PendingProduct from "../components/Admin/AdminOrders/PendingProduct";
import CanceledProduct from "../components/Admin/AdminOrders/CanceledProduct";
import SocialMediaLinks from "../components/Admin/SyestemSetting/SocialMedia/SocialMediaLinks";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/categoryProducts/:id",
        element: <CategorisedProducts />,
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
        path: "/verifyOTP",
        element: <InputOTP />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "payment-failed",
        element: <PaymentFailed />,
      },
      {
        path: "error",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/dashboard/",
    element: <PrivateRoutes>
      <AdminLayOut></AdminLayOut>
    </PrivateRoutes>,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <AdminDashboard></AdminDashboard>,
      },

      {
        path: "profile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "myOrders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "passwordSetting",
        element: <PasswordChange />,
      },
      {
        path: "orders/orderedProducts",
        element: <OrderedProduct></OrderedProduct>,
      },
      {
        path: "orderDetails/:id",
        element: <OrderDetails />,
      },
      {
        path: "orders/deliveredProducts",
        element: <DeliveredProduct></DeliveredProduct>,
      },
      {
        path: "orders/pendingProducts",
        element: <PendingProduct></PendingProduct>,
      },
      {
        path: "orders/canceledProducts",
        element: <CanceledProduct></CanceledProduct>,
      },
      {
        path: "category",
        element: <Category></Category>,
      },
      {
        path: "category/categoryList",
        element: <CategoryList></CategoryList>,
      },

      {
        path: "product/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "product/allProduct",
        element: <AllProduct></AllProduct>,
      },

      {
        path: "system-setting",
        element: <AdminSystemSetting></AdminSystemSetting>,
      },
      {
        path: "systemSetting/productSection",
        element: <ProductSection></ProductSection>,
      },
      {
        path: "systemSetting/heroSlider",
        element: <HeroSlider></HeroSlider>,
      },
      {
        path: "systemSetting/logoSection",
        element: <LogoSection></LogoSection>,
      },
      {
        path: "systemSetting/footerSection",
        element: <FooterSection></FooterSection>,
      },
      {
        path: "systemSetting/socialMedia",
        element: <SocialMediaLinks />,
      },
    ],
  },
]);
