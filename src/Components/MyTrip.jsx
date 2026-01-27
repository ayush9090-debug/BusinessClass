import React, { useState } from "react";

export default function MyTrip() {
  const [mode, setMode] = useState("ticket");

  return (
    <div
      className="min-vh-100"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/92/ff/d5/92ffd5f3121a2d43d5d84a229b581a28.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container min-vh-100">
        <div className="row min-vh-100 align-items-center">
          
         
          <div className="col-12 col-md-6 col-lg-5">
            <div className="bg-white rounded-4 shadow-lg p-3 p-md-4">

              <h4 className="fw-bold text-center mb-3">My Trip</h4>

              <div className="btn-group w-100 mb-3">
                <button
                  className={`btn ${
                    mode === "email" ? "btn-primary" : "btn-outline-secondary"
                  }`}
                  onClick={() => setMode("email")}
                >
                  By Email
                </button>
                <button
                  className={`btn ${
                    mode === "ticket" ? "btn-primary" : "btn-outline-secondary"
                  }`}
                  onClick={() => setMode("ticket")}
                >
                  By Ticket
                </button>
              </div>

              <div className="mb-3">
                {mode === "ticket" && (
                  <>
                    <p className="text-muted small mb-2">
                      Enter your ticket number and last name.
                    </p>
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="13-digit Ticket Number"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Passenger Last Name"
                    />
                  </>
                )}

                {mode === "email" && (
                  <>
                    <p className="text-muted small mb-2">
                      Enter the email used while booking.
                    </p>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </>
                )}
              </div>

              <button
                className="btn w-100 py-2 fw-semibold"
                style={{
                  background: "linear-gradient(135deg,#ff3c3c,#ff8c00)",
                  color: "white",
                }}
              >
                Find My Booking
              </button>

              <p className="text-center text-muted small mt-3 mb-0">
                Need help? Contact our 24×7 support team.
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
