import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Discover from "../pages/discover/Discover";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Layout from "../pages/layout/Layout";
import NotFoundPage from "../pages/not-found/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
};

export default Router;
