import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

import Support from "../pages/Support";
import MyTrip from "../pages/MyTrip";
import Deals from "../pages/Deals";

export default function PathRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/support" element={<Support />} />
        <Route path="/my-trip" element={<MyTrip />} />
      </Routes>
    </div>
  );
}
