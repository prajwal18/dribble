import React from "react";
import Layout from "../components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";

const Router = () => {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
  </Layout>
  );
};

export default Router;
