import React from "react";
import { Facebook, Youtube, Linkedin, Instagram } from "lucide-react";

export default function SocialMediaLinks() {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Connect With Us</h2>
          <p className="text-muted mt-2">
            Follow us on social media to receive exclusive flight deals, luxury
            travel inspiration, and real-time updates from our travel experts.
          </p>
        </div>

        {/* Social Cards */}
        <div className="row g-4 justify-content-center">

          {/* Facebook */}
          <div className="col-6 col-md-3">
            <a href="#" className="text-decoration-none">
              <div className="bg-white rounded-4 shadow-sm p-4 text-center h-100 border hover-shadow">
                <Facebook size={36} className="text-primary mb-3" />
                <h6 className="fw-bold text-dark">Facebook</h6>
                <p className="small text-muted">
                  Travel stories, deals & customer reviews
                </p>
              </div>
            </a>
          </div>

          {/* YouTube */}
          <div className="col-6 col-md-3">
            <a href="#" className="text-decoration-none">
              <div className="bg-white rounded-4 shadow-sm p-4 text-center h-100 border hover-shadow">
                <Youtube size={36} className="text-danger mb-3" />
                <h6 className="fw-bold text-dark">YouTube</h6>
                <p className="small text-muted">
                  Watch luxury flight experiences & tips
                </p>
              </div>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="col-6 col-md-3">
            <a href="#" className="text-decoration-none">
              <div className="bg-white rounded-4 shadow-sm p-4 text-center h-100 border hover-shadow">
                <Linkedin size={36} className="text-primary mb-3" />
                <h6 className="fw-bold text-dark">LinkedIn</h6>
                <p className="small text-muted">
                  Business travel updates & partnerships
                </p>
              </div>
            </a>
          </div>

          {/* Instagram */}
          <div className="col-6 col-md-3">
            <a href="#" className="text-decoration-none">
              <div className="bg-white rounded-4 shadow-sm p-4 text-center h-100 border hover-shadow">
                <Instagram size={36} className="text-warning mb-3" />
                <h6 className="fw-bold text-dark">Instagram</h6>
                <p className="small text-muted">
                  Stunning destinations & luxury cabins
                </p>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="text-center mt-5">
          <p className="text-muted small">
            Join 25,000+ travelers who trust us for premium business and first
            class flight deals worldwide.
          </p>
        </div>

      </div>
    </section>
  );
}
