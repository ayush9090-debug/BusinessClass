import React, { useState } from "react";
import Footer from "./Footer";

export default function Deals() {
  const [tab, setTab] = useState("all");

  const deals = [
    {
      type: "international",
      title: "Flat 25% Off – International Flights",
      desc: "Save big on flights to USA, Europe & Middle East.",
      code: "INT25",
      price: "Save up to ₹8,000",
    },
    {
      type: "domestic",
      title: "Domestic Flight Offer",
      desc: "Get lowest fares on all Indian airlines.",
      code: "FLYINDIA",
      price: "Save up to ₹1,500",
    },
    {
      type: "student",
      title: "Student Special Fare",
      desc: "Exclusive fares for students travelling abroad.",
      code: "STUDENT",
      price: "Save up to ₹4,000",
    },
    {
      type: "lastminute",
      title: "Last Minute Deals",
      desc: "Flying today or tomorrow? Grab cheap fares now.",
      code: "NOWFLY",
      price: "Limited seats",
    },
  ];

  const filteredDeals =
    tab === "all" ? deals : deals.filter((d) => d.type === tab);

  return (
    <>
    <div className="container py-5">
      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Flight Deals & Offers</h2>
        <p className="text-muted">
          Book flights at the best prices with exclusive airline offers.
        </p>
      </div>

      {/* Tabs */}
      <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
        {["all", "international", "domestic", "student", "lastminute"].map(
          (item) => (
            <button
              key={item}
              className={`btn ${
                tab === item ? "btn-color text-light" : "btn-outline-btn-color"
              }`}
              onClick={() => setTab(item)}
            >
              {item === "all"
                ? "All Deals"
                : item === "international"
                ? "International"
                : item === "domestic"
                ? "Domestic"
                : item === "student"
                ? "Student"
                : "Last Minute"}
            </button>
          )
        )}
      </div>

      {/* Featured Banner */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10">
          <div className="card border-0 shadow rounded-4 overflow-hidden">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src="https://i.pinimg.com/736x/92/ff/d5/92ffd5f3121a2d43d5d84a229b581a28.jpg"
                  className="img-fluid h-100 w-100 object-fit-cover"
                  alt="Flight Deal"
                />
              </div>
              <div className="col-md-6 p-4">
                <h4 className="fw-bold">Mega International Sale ✈️</h4>
                <p className="text-muted">
                  Book international flights at unbeatable prices. Limited time
                  airline promotion.
                </p>
                <h5 className="text-success fw-bold">Save up to ₹10,000</h5>
                <button className="btn btn-color mt-3 px-4 text-light">
                  Book International Flights
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deals Cards */}
      <div className="row g-4">
        {filteredDeals.map((deal, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 rounded-4 p-4">
              <h5 className="fw-semibold">{deal.title}</h5>
              <p className="text-muted small">{deal.desc}</p>
              <p className="fw-bold text-success">{deal.price}</p>

              <div className="d-flex justify-content-between align-items-center mt-auto">
                <span className="badge bg-light text-dark">
                  Code: {deal.code}
                </span>
                <button className="btn btn-color text-light btn-sm ">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Info */}
      <div className="text-center mt-5">
        <p className="text-muted">
          Prices may vary based on airline, date & availability. Book early for
          the best fares.
        </p>
      </div>
      
    </div>
    <Footer />
    </>
  );
}
