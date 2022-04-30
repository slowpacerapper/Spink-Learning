import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Gallery from "./Gallery";
import ClientView from "./Views/ClientView/ClientView";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/ClientView" element={<ClientView />} />
    </Routes>
  );
};

export default MyRoutes;
