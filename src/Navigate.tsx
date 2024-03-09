import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboardPage/DashboardPage";
import DistributionPage from "./pages/distributionPage/DistributionPage";
import AddRetailer from "./pages/distributionPage/addRetailer/AddRetailer";
import PurchaseIndents from "./pages/purchaseindents/PurchaseIndents";

function NavigateRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="Distribution-to-Retailers" element={<DistributionPage />} />
      <Route path="add-retailer" element={<AddRetailer />} />
      <Route path="purchase-indents" element={<PurchaseIndents />} />
    </Routes>
  );
}

export default NavigateRoutes;
