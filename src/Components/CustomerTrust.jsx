import React from "react";

export default function CustomerTrust() {
  return (
    <div className="container py-5">

      {/* FIRST ROW */}
      <div className="row align-items-center g-5">

        {/* LEFT IMAGE */}
        <div className="col-lg-6">
          <img
            src="/IMAGE_1.jfif"
            className="img-fluid rounded-4 shadow-lg"
            alt="Business class seat"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-lg-6">

          <h2 className="fw-bold mb-3">
            Business Class is Trusted by{" "}
            <span style={{color:"red"}}>188K+</span> Travelers
          </h2>

          <p className="text-muted">
            Welcome to Business Class! Our commitment is to provide our clients
            with excellent personal service, 24 hours a day, 7 days a week.
            We have perfected the art of making your travel experience as
            smooth as possible — from start to finish.
          </p>

          <div className="d-flex gap-4 mt-4">

            <div>
              <h4 className="fw-bold mb-0" style={{color:"red"}}>188K+</h4>
              <small className="text-muted">Happy Travelers</small>
            </div>

            <div>
              <h4 className="fw-bold mb-0" style={{color:"red"}}>24/7</h4>
              <small className="text-muted">Live Support</small>
            </div>

            <div>
              <h4 className="fw-bold mb-0" style={{color:"red"}}>97%</h4>
              <small className="text-muted">Positive Reviews</small>
            </div>

          </div>

        </div>
      </div>

      {/* SECOND ROW */}
      <div className="row align-items-center mt-5 g-5 flex-lg-row-reverse">

        {/* IMAGE */}
        <div className="col-lg-6 text-center">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            <img
              src="/IMAGE_2.jpg"
              className="img-fluid"
              alt="Business Class customers"
              style={{ height: "420px", objectFit: "cover", width: "695px" }}
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="col-lg-6">

          <h4 className="fw-bold mb-3">
            Expert First & Business Class Travel Management
          </h4>

          <p className="text-muted">
            At Business Class, you get your personal travel manager who designs
            your perfect journey. We save you time and money while offering
            exclusive luxury flight deals not available online.
          </p>

          <a
            href="tel:+189475849"
            className="btn mt-2" style={{ background: "linear-gradient(135deg,#ff3c3c,#ff8c00)",
                color: "white"}}
          >
            Speak With Business Class Expert
          </a>

        </div>

      </div>

    </div>
  );
}
