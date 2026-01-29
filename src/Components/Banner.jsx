import React from "react";

export default function Banner() {
  return (
    <div className="position-relative min-vh-100 text-white">

      {/* Background Image */}
      <img
        src="/photos/Business_Class_Banner_1.jpg.jpeg"  // public folder path
        alt="Flight Background"
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover" }}
      />

      

      {/* Content */}
      <div className="container position-relative d-flex flex-column justify-content-center align-items-center min-vh-100 text-center px-3">

        {/* Heading */}
        <h1 className="fw-bold display-5 mb-3">
          Fly Business & First Class For Less
        </h1>

        {/* Sub text */}
        <p className="lead mb-4">
          Exclusive deals on luxury flights worldwide
        </p>

        {/* Search Box */}
        <div className="bg-white rounded-3 shadow-lg p-3 " style={{ maxWidth: "1000px" }}>
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

            <div className="col-6 col-md">
              <input
                type="date"
                className="form-control"
              />
            </div>

            <div className="col-6 col-md">
              <input
                type="date"
                className="form-control"
              />
            </div>

            <div className="col-12 col-md">
              <select className="form-select">
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
              </select>
            </div>

            <div className="col-12 col-md d-grid">
              <button className="btn" style={{ background: "linear-gradient(135deg,#ff3c3c,#ff8c00)",
                color: "white"}}>
                Search Flights
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
