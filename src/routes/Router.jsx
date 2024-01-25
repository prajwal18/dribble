import React from "react";
import Layout from "../components/common/layouts/Layout";
import { Route, Routes } from "react-router-dom";
import BusinessRoutes from "../features/business/routes/BusinessRoutes";
import PageNotFound from "../features/404/pages/PageNotFound";

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/business" element={<BusinessRoutes />} />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
};

export default Router;
