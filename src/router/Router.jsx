import React from "react";
import Layout from "../components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import PageNotFound from "../pages/404/PageNotFound";

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
};

export default Router;
