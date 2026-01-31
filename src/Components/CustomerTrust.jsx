import React, { useEffect, useRef, useState } from "react";

export default function CustomerTrust() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const Observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          Observer.disconnect(); 
        }
      },
      { threshold: 0.25 } 
    );

    if (sectionRef){ 
      Observer.observe(sectionRef.current)
    };

    return () => Observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="container py-5 overflow-hidden"
    >

      {/* FIRST ROW */}
      <div className="row align-items-center g-5">

        {/* LEFT IMAGE */}
        <div
          className="col-lg-6"
          style={{
            transform: visible ? "translateX(0)" : "translateX(-100px)",
            opacity: visible ? 1 : 0,
            transition: "all 0.9s ease-out",
          }}
        >
          <img
            src="/photos/Business_Class_Travel_Management.jpg.jpeg"
            className="img-fluid rounded-4 shadow-lg"
            alt="Business class seat"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="col-lg-6"
          style={{
            transform: visible ? "translateX(0)" : "translateX(100px)",
            opacity: visible ? 1 : 0,
            transition: "all 0.9s ease-out",
          }}
        >
          <h2 className="fw-bold mb-3">
            Business Class is Trusted by
            <span className="text-corol">188K+</span> Travelers
          </h2>

          <p className="text-muted">
            Welcome to Business Class! Our commitment is to provide our clients
            with excellent personal service, 24 hours a day, 7 days a week.
          </p>

          <div className="d-flex gap-4 mt-4">
            <div>
              <h4 className="fw-bold mb-0 text-corol">188K+</h4>
              <small className="text-muted">Happy Travelers</small>
            </div>
            <div>
              <h4 className="fw-bold mb-0 text-corol">24/7</h4>
              <small className="text-muted">Live Support</small>
            </div>
            <div>
              <h4 className="fw-bold mb-0 text-corol">97%</h4>
              <small className="text-muted">Positive Reviews</small>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="row align-items-center mt-2 g-3 flex-lg-row-reverse">

        {/* IMAGE */}
        <div
          className="col-lg-6 text-center"
          style={{
            transform: visible ? "translateX(0)" : "translateX(100px)",
            opacity: visible ? 1 : 0,
            transition: "all 1s ease-out",
          }}
        >
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            <img
              src="/photos/Business_Class_Trusted_By_Travelers.jpg.jpeg"
              className="img-fluid"
              alt="Business Class customers"
             
            />
          </div>
        </div>

        {/* TEXT */}
        <div
          className="col-lg-6"
          style={{
            transform: visible ? "translateX(0)" : "translateX(-100px)",
            opacity: visible ? 1 : 0,
            transition: "all 1s ease-out",
          }}
        >
          <h4 className="fw-bold mb-3">
            Expert First & Business Class Travel Management
          </h4>

          <p className="text-muted">
            At Business Class, you get your personal travel manager who designs
            your perfect journey.
          </p>

          <a
            href="tel:(866)307-5957"
            className="btn mt-2"
            style={{
              background: "linear-gradient(135deg,#ff3c3c,#ff8c00)",
              color: "white",
              padding: "10px 22px",
              borderRadius: "30px",
            }}
          >
            Speak With Business Class Expert
          </a>
        </div>

      </div>
    </div>
  );
}
