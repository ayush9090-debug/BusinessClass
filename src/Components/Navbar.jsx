import React from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm py-2 sticky-top"
      style={{
        backgroundColor: "rgba(11, 37, 69, 0.5)",
      }}
    >
      <div className="container-fluid px-4">

        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/BusinessClassLogo.png"
            alt="Business Class Ticket"
            style={{ height: "42px" }}
          />
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon" ></span>
        </button>

        {/* COLLAPSE */}
        <div className="collapse navbar-collapse" id="mainNavbar">

          {/* LEFT */}
          <ul className="navbar-nav me-auto gap-lg-4 text-center text-lg-start">
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/">Home</Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/deals">Deals</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/support">Support</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/my-trip">My Trip</Link>
            </li>
          </ul>

          {/* RIGHT */}
          <div className="d-flex justify-content-center mt-3 mt-lg-0">
            <a
              href="tel:+99999999"
              className="btn d-flex align-items-center gap-2"
              style={{
                background: "linear-gradient(135deg,#ff3c3c,#ff8c00)",
                color: "white",
                borderRadius: "30px",
                padding: "8px 20px",
                fontWeight: "600",
                transition: "0.3s"
              }}
            >
              <Phone size={18} />
              +99999999
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
