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
// import HeaderLogo from "../components/Admin/SyestemSetting/HeaderLogo/HeaderLogo";
// import HeroSlider from "../components/Admin/SyestemSetting/HeroSlider/HeroSlider";
// import FooterSection from "../components/Admin/SyestemSetting/FooterSection/FooterSection";
// import FooterLogo from "../components/Admin/SyestemSetting/FooterLogo/FooterLogo";
//import SyestemSettings from "../components/Admin/SyestemSetting/SyestemSettings";

import AdminLayOut from "../components/Admin/AdminLayOut/AdminLayOut";
import AdminDashboard from "../components/Admin/AdminDashboard/AdminDashboard";
import AdminProfile from "../components/Admin/AdminProfile/AdminProfile";
// import AdminProduct from "../components/Admin/AdminProduct/AddProduct";

import AdminSystemSetting from "../components/Admin/AdminSystemSetting/AdminSystemSetting";

// import AddCategory from "../components/Admin/AdminCategory/AddCategory";
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
        path: "orders/orderedProducts",
        element: <OrderedProduct></OrderedProduct>,
      },
      {
        path: "orders/deliveredProducts",
        element: <DeliveredProduct></DeliveredProduct>,
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
    ],
  },
]);
