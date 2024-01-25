import React from "react";
import { Route, Routes } from "react-router-dom";
import BusinessHomePage from "../pages/BusinessHomePage";
import Navbar from "../../../components/common/layouts/main-container/Navbar";
import { Stack } from "@chakra-ui/react";

const BusinessRoutes = () => {
  return (
    <>
      <Navbar title="Business" />
      <Stack spacing={4}>
        <Routes>
          <Route path="" element={<BusinessHomePage />} />
        </Routes>
      </Stack>
    </>
  );
};

export default BusinessRoutes;
