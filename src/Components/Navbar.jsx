import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Deals", path: "/deals" },
    { name: "Support", path: "/support" },
    { name: "My Trip", path: "/my-trip" },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm"
      style={{
        background: "rgba(11, 37, 69, 0.8)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="container-fluid px-4">

        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          <img
            src="/BusinessClassLogo.png"
            alt="logo"
            style={{ height: "48px" }}
          />
        </Link>

        {/* TOGGLER (WHITE ICON) */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto gap-lg-4 text-center text-lg-start mt-3 mt-lg-0">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <li className="nav-item" key={item.name}>
                  <Link
                    to={item.path}
                    className="nav-link fw-semibold"
                    style={{
                      color: isActive ? "#ff8c00" : "white",
                      borderBottom: isActive
                        ? "3px solid #ff8c00"
                        : "3px solid transparent",
                      paddingBottom: "6px",
                      transform: isActive ? "scale(1.08)" : "scale(1)",
                      transition: "0.3s",
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CALL BUTTON */}
          <div className="d-flex justify-content-center mt-3 mt-lg-0">
            <a
              href="tel:+99999999"
              style={{
                background: "linear-gradient(135deg,#ff3c3c,#ff8c00)",
                color: "white",
                borderRadius: "30px",
                padding: "8px 22px",
                fontWeight: "600",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
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
