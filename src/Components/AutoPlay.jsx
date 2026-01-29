import React from "react";

export default function AutoPlay() {
  const reviews = [
    {
      name: "Russel",
      route: "Seattle → Madrid | Business Class",
      airline: "Asiana Airlines • Jan 2026",
      text: "Very polite and professional. My agent handled everything smoothly and saved me a lot on my business class ticket.",
    },
    {
      name: "Manu",
      route: "Tampa → Bangalore | Business Class",
      airline: "Premium Partner Airline • Jan 2026",
      text: "My travel manager was extremely responsive and found me the best deal. I felt taken care of throughout the booking.",
    },
    {
      name: "David",
      route: "Atlanta → Istanbul | Business Class",
      airline: "Turkish Airlines • Jan 2026",
      text: "Amazing service. The agent explored multiple options and secured me a luxury seat at an unbeatable price.",
    },
    {
      name: "Sophie",
      route: "London → Dubai | First Class",
      airline: "Emirates • Feb 2026",
      text: "Smooth booking, excellent communication, and a very comfortable flight experience. Highly recommended.",
    },
  ];

  return (
    <div className="py-4 bg-light overflow-hidden">
      <style>{`
        .marquee-track {
          display: flex;
          animation: scroll 28s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }

        /* CARD BASE */
        .review-card {
          width: 360px;
          height: 260px; 
          margin: 0 25px;
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.6s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px;
          flex-shrink: 0;
        }

        /* PREMIUM HOVER */
        .review-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
        }
      `}</style>

      {/* HEADING */}
      <div className="text-center mb-5">
        <div className="fw-bold text-danger small" style={{ letterSpacing: "2px" }}>
          TRUSTED BY THOUSANDS
        </div>
        <h2 className="fw-bold display-6 text-dark my-2">
          Luxury Travelers Love Us
        </h2>
        <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
          We help business and first-class travelers book smarter, travel
          better, and enjoy exclusive fares that are not available online.
        </p>
      </div>

      {/* MARQUEE */}
      <div className="marquee-container">
        <div className="marquee-track">
          {[...reviews, ...reviews].map((review, index) => (
            <div key={index} className="review-card">
              <div>
                <h5 className="fw-bold text-corol mb-1">
                  {review.name}
                </h5>
                <div className="text-muted small mb-1">
                  {review.route}
                </div>
                <div className="text-danger fw-semibold small mb-3">
                  {review.airline}
                </div>
                <p className="text-dark mb-0">
                  "{review.text}"
                </p>
              </div>
              <div className="text-success fs-5">★★★★★</div>
            </div>
          ))}
        </div>
      </div>

      {/* RATING BAR */}
      <div className="text-center mt-5 fw-semibold text-dark">
        Excellent <span className="text-success">★★★★★</span> &nbsp;|&nbsp; Trusted by 25,000+ Luxury Travelers
      </div>
      <hr />
    </div>
  );
}
