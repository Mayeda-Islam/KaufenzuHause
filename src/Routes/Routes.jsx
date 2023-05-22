import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Cart from "../pages/Cart/Cart";
import NotFound from "../pages/NotFound/NotFound";
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import CategorisedProducts from '../pages/CategoriedProducts/CategorisedProducts';


export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/categoryProducts" element={<CategorisedProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
    </Route>
));

