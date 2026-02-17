import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

import Support from "../pages/Support";
import MyTrip from "../pages/MyTrip";
import Deals from "../pages/Deals";
import ContactUs from "./ContactUs";
import FAQ from "./FAQ";
import AboutUs from "../pages/AboutUs";

export default function PathRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/support" element={<Support />} />
        <Route path="/my-trip" element={<MyTrip />} />
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/faq" element={<FAQ />}/>
      </Routes>
    </div>
  );
}
