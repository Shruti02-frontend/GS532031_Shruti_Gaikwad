import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoresPage from "./pages/StoresPage";
import SKUsPage from "./pages/SKUsPage";
import PlanningPage from "./pages/PlanningPage";
import ChartsPage from "./pages/ChartsPage";
import Layout from "./components/Layout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<StoresPage />} />
          <Route path="/skus" element={<SKUsPage />} />
          <Route path="/planning" element={<PlanningPage />} />
          <Route path="/charts" element={<ChartsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
