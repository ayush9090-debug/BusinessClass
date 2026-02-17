import React from "react";
import FAQ from "../Components/FAQ";
import {
  Globe,
  HandPlatter,
  ChartNoAxesCombined,
  TrendingUp,
} from "lucide-react";

export default function AboutUs() {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="container-fluid p-0"
        style={{
          height: "100vh",
          backgroundImage: "url(/photos/Business_Class_Banner_2.jpg.jpeg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <div className="text-light text-center vw-100">
            <h1 className="fw-bold display-4">Your Journey Start With Trust</h1>
            <p className="lead mt-4 text-light fw-bold">
              At Airlines Ticket Booking, we are dedicated to making your dream
              vacation an affordable reality.
            </p>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className="container-fluid mt-5">
        <h2 className="text-center fw-bold mb-4">
          Your Trusted Travel Partner
        </h2>

        <div className="container">
          <p className="text-center lead">
            At Airlines Ticket Booking, we believe that traveling should be
            simple, affordable, and stress-free. Our mission is to help
            travelers book flights easily with the best prices and reliable
            services.
          </p>
        </div>
      </div>

      {/* IMAGE + CONTENT SECTION */}
      <section className="container-fluid py-5">
        <div className="container">
          <div className="row g-4 align-items-stretch">

            {/* LEFT IMAGE */}
            <div className="col-md-6 d-flex">
              <div
                className="w-100 overflow-hidden rounded-3"
                style={{ height: "330px" }}
              >
                <img
                  src="/photos/About-us-ticket.jpg"
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h2 className="fw-bold mb-3">
                  Making Air Travel Simple & Affordable
                </h2>

                <p>
                  Airlines Ticket Booking is built with one goal in mind – to
                  simplify the way people book flights. We help travelers
                  discover the best routes, compare prices, and book tickets
                  without any hassle.
                </p>

                <p>
                  Our platform connects you with multiple airlines, ensuring
                  you always get flexible options and transparent pricing.
                  From short domestic trips to long international journeys,
                  we make sure your booking experience remains smooth and
                  reliable.
                </p>

                <p>
                  We continuously work on improving our technology so that
                  users can search faster, filter better, and make informed
                  decisions with real-time flight information.
                </p>

                <p className="fw-semibold text-success mb-0">
                  Fly smarter, travel better – with Airlines Ticket Booking.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="p-4 border rounded-3 h-100">
                <h4 className="fw-semibold mb-3">Our Mission</h4>
                <p>
                  Our mission is to build high-quality digital products that
                  solve real-world problems, enhance user experience, and help
                  businesses grow through innovative technology and efficient
                  solutions.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 border rounded-3 h-100">
                <h4 className="fw-semibold mb-3">Our Vision</h4>
                <p>
                  Our vision is to become a trusted technology partner known
                  for creativity, performance, and long-term value, while
                  continuously evolving with modern tools and industry
                  standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="container py-5">
        <h1 className="text-center fw-bold mb-4">Our Values</h1>

        <div className="row g-4">
          <div className="col-md-3">
            <div className="text-center border p-4 rounded-3 h-100">
              <Globe size={36} className="text-primary" />
              <h5 className="mt-3 fw-semibold">Global Reach</h5>
              <p>
                Connecting you to 500+ destinations worldwide with seamless
                and reliable connectivity.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="text-center border p-4 rounded-3 h-100">
              <ChartNoAxesCombined size={36} className="text-success" />
              <h5 className="mt-3 fw-semibold">Luxury & Comfort</h5>
              <p>
                Spacious premium seating, refined interiors, and personalized
                services for a truly relaxing flying experience.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="text-center border p-4 rounded-3 h-100">
              <HandPlatter size={36} className="text-warning" />
              <h5 className="mt-3 fw-semibold">Safety & Reliability</h5>
              <p>
                Operated with the highest safety standards and on-time
                performance you can trust.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="text-center border p-4 rounded-3 h-100">
              <TrendingUp size={36} className="text-info" />
              <h5 className="mt-3 fw-semibold">Excellence in Service</h5>
              <p>
                Dedicated cabin crew delivering world-class hospitality at
                every step of your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
