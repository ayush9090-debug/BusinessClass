import React, { useState } from "react";

export default function Banner() {
  const [tripType, setTripType] = useState("round"); // round | one

  return (
    <div className="position-relative min-vh-100 text-white">
      {/* Background Image */}
      <img
        src="/photos/Business_Class_Banner_1.jpg.jpeg"
        alt="Flight Background"
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover" }}
      />

      {/* Overlay (dark for readability) */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ background: "rgba(0,0,0,0.45)" }}
      ></div>

      {/* Content */}
      <div className="container position-relative d-flex flex-column justify-content-center align-items-center min-vh-100 text-center px-3">

        {/* Heading */}
        <h1 className="fw-bold display-5 mb-2">
          Fly Business & First Class For Less
        </h1>

        <p className="lead mb-4">
          Exclusive deals on luxury flights worldwide
        </p>

        {/* Search Box */}
        <div
          className="bg-white rounded-4 shadow-lg p-4 w-100"
          style={{ maxWidth: "1000px", color: "#000" }}
        >

          {/* Trip Type Toggle */}
          <div className="d-flex  gap-4 mb-4">
            <span
              onClick={() => setTripType("round")}
              style={{
                cursor: "pointer",
                fontWeight: "600",
                color: tripType === "round" ? "#ff8c00" : "#333",
                borderBottom:
                  tripType === "round"
                    ? "3px solid #ff8c00"
                    : "3px solid transparent",
                paddingBottom: "6px",
                transition: "0.3s",
              }}
            >
              Round Trip
            </span>

            <span
              onClick={() => setTripType("one")}
              style={{
                cursor: "pointer",
                fontWeight: "600",
                color: tripType === "one" ? "#ff8c00" : "#333",
                borderBottom:
                  tripType === "one"
                    ? "3px solid #ff8c00"
                    : "3px solid transparent",
                paddingBottom: "6px",
                transition: "0.3s",
              }}
            >
              One Way
            </span>
          </div>

          {/* Form */}
          <div className="row g-3 align-items-center">
            <div className="col-12 col-md">
              <input
                type="text"
                className="form-control"
                placeholder="From"
              />
            </div>

            <div className="col-12 col-md">
              <input
                type="text"
                className="form-control"
                placeholder="To"
              />
            </div>

            {/* Departure */}
            <div className="col-6 col-md">
              <input type="date" className="form-control" />
            </div>

            {/* Return (only if round trip) */}
            {tripType === "round" && (
              <div className="col-6 col-md">
                <input type="date" className="form-control" />
              </div>
            )}

            <div className="col-12 col-md">
              <select className="form-select">
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
              </select>
            </div>

            <div className="col-12 col-md d-grid">
              <button
                className="btn"
                style={{
                  background:
                    "linear-gradient(135deg,#ff3c3c,#ff8c00)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Search Flights
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
