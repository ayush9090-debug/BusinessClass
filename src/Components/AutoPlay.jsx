import React from "react";

export default function AutoPlay() {
  const styles = {
    wrapper: {
      overflow: "hidden",
      padding: "80px 0",
      background: "#f9fbff",
    },
    marqueeTrack: {
      display: "flex",
      width: "max-content",
      animation: "scroll 35s linear infinite",
    },
    card: {
      flexShrink: 0,
      width: "360px",
      margin: "0 25px",
      background: "#ffffff",
      borderRadius: "18px",
      padding: "28px",
      // Removed top border and added better natural shadow
      boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
      transition: "all 0.4s ease",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    name: {
      fontSize: "1.2rem",
      fontWeight: "700",
      color: "#0b2545",
      marginBottom: "2px",
    },
    route: {
      fontSize: "0.9rem",
      color: "#777",
      marginBottom: "8px",
    },
    airline: {
      fontSize: "0.85rem",
      color: "#ff4c4c", // Red text
      fontWeight: "600",
      marginBottom: "15px",
    },
    review: {
      fontSize: "1rem",
      color: "#222",
      lineHeight: "1.6",
      marginBottom: "20px",
    },
    stars: {
      color: "#ff4c4c", // Red stars
      fontSize: "1.1rem",
      letterSpacing: "3px",
    },
    headingWrap: {
      textAlign: "center",
      marginBottom: "50px",
    },
    smallTitle: {
      color: "#ff4c4c", // Red small title
      fontWeight: "700",
      letterSpacing: "2px",
      fontSize: "0.9rem",
    },
    title: {
      fontSize: "2.6rem",
      fontWeight: "800",
      color: "#0b2545",
      margin: "10px 0",
    },
    subtitle: {
      color: "#555",
      maxWidth: "700px",
      margin: "0 auto",
      fontSize: "1.1rem",
    },
    ratingBar: {
      textAlign: "center",
      marginTop: "60px",
      fontSize: "1.1rem",
      fontWeight: "600",
      color: "#0b2545",
    },
    keyframe: `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      .review-card:hover {
        transform: translateY(-12px);
        box-shadow: 0 20px 50px rgba(0,0,0,0.12); /* natural hover shadow */
      }

      .marquee-container:hover .track {
        animation-play-state: paused;
      }
    `,
  };

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
    <div style={styles.wrapper} className="overflow-hidden">
      <style>{styles.keyframe}</style>

      {/* HEADING */}
      <div style={styles.headingWrap}>
        <div style={styles.smallTitle}>TRUSTED BY THOUSANDS</div>
        <h2 style={styles.title}>Luxury Travelers Love Us</h2>
        <p style={styles.subtitle}>
          We help business and first-class travelers book smarter, travel
          better, and enjoy exclusive fares that are not available online.
        </p>
      </div>

      {/* MARQUEE */}
      <div className="marquee-container">
        <div className="track" style={styles.marqueeTrack}>
          {[...reviews, ...reviews].map((review, index) => (
            <div key={index} className="review-card" style={styles.card}>
              <div>
                <h4 style={styles.name}>{review.name}</h4>
                <div style={styles.route}>{review.route}</div>
                <div style={styles.airline}>{review.airline}</div>
                <p style={styles.review}>"{review.text}"</p>
              </div>
              <div style={styles.stars}>★★★★★</div>
            </div>
          ))}
        </div>
      </div>

      {/* RATING BAR */}
      <div style={styles.ratingBar}>
        Excellent ★★★★★ &nbsp;|&nbsp; Trusted by 25,000+ Luxury Travelers
      </div>
      <hr />
    </div>
  );
}
