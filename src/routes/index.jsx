import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Discover from "../pages/discover/Discover";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Layout from "../pages/layout/Layout";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import Detail from "../pages/detail/Detail";
import NotFoundPage from "../pages/not-found/NotFound";
import Wishes from "../pages/wishes/Wishes";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
