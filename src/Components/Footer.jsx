import React from "react";


import {
  Phone,
  Mail,
  ChevronRight,
  Globe,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";

export default function Footer() {
  const styles = {
    footer: {
      backgroundColor: "#333",
      color: "#fff",
      padding: "60px 20px 30px 20px",
      fontFamily: "'Inter', sans-serif",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "40px",
    },
    logoSection: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    logoImg: {
      width: "160px",
      height: "auto",
      filter: "brightness(0) invert(1)", 
    },
    text: {
      fontSize: "0.85rem",
      lineHeight: "1.6",
      color: "#e0e7ff", 
      margin: "0 0 20px 0",
    },
    contactLink: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      color: "#FFFFFF",
      textDecoration: "none",
      fontSize: "0.95rem",
      marginBottom: "12px",
    },
    columnTitle: {
      fontSize: "1.1rem",
      fontWeight: "700",
      marginBottom: "25px",
      color: "#FFFFFF",
      textTransform: "uppercase",
      letterSpacing: "1px",
      borderBottom: "2px solid #ffffff33",
      display: "inline-block",
      paddingBottom: "5px",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    listItem: {
      marginBottom: "12px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "0.9rem",
      color: "#cbd5e1",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    bottomBar: {
      marginTop: "50px",
      paddingTop: "20px",
      borderTop: "1px solid #ffffff1a",
      textAlign: "center",
      fontSize: "0.8rem",
      color: "#94a3b8",
    },
   
    inlineCSS: `
      .footer-link:hover {
        color: #FFFFFF !important;
        transform: translateX(5px);
      }
      @media (max-width: 768px) {
        .footer-grid { text-align: center; }
        .contact-item { justify-content: center; }
        .link-item { justify-content: center; }
      }
    `,
  };

  return (
    <footer style={styles.footer}>
      <style>{styles.inlineCSS}</style>
      <div className="footer-grid" style={styles.container}>
   
        <div style={styles.logoSection}>
          <img
            style={{ width: "60px", height: "60px" }}
            src="/BusinessClassLogo.png"
            alt="Travelo Logo"
          />
          <p style={styles.text}>
            *Fares include all fuel surcharges, service fees, and taxes. Fares
            are subject to change and cannot be guaranteed until booking is
            complete.
          </p>
          <div>
            <a
              href="tel:+99999999"
              className="contact-item"
              style={styles.contactLink}
            >
              <Phone size={18} /> +99999999
            </a>
            <a
              href="mailto:info@asktravelo.com"
              className="contact-item"
              style={styles.contactLink}
            >
              <Mail size={18} /> info@asktravelo.com
            </a>
          </div>
        </div>

        
        <div>
          <h4 style={styles.columnTitle}>Quick Links</h4>
          <ul style={styles.list}>
            {[
              "Home",
              "About Us",
              "Our Services",
              "Travel Blogs",
              "Flight Status",
              "Contact",
            ].map((item) => (
              <li
                key={item}
                className="footer-link link-item"
                style={styles.listItem}
              >
                <ChevronRight size={14} /> {item}
              </li>
            ))}
          </ul>
        </div>

       
        <div>
          <h4 style={styles.columnTitle}>Trust & Support</h4>
          <ul style={styles.list}>
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cancellation Policy",
              "Help Center",
              "Travel Advisory",
              "Feedback",
            ].map((item) => (
              <li
                key={item}
                className="footer-link link-item"
                style={styles.listItem}
              >
                <ShieldCheck size={14} /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      
      <div style={styles.bottomBar}>
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Globe size={16} /> <HelpCircle size={16} /> <ShieldCheck size={16} />
        </div>
        <p>© 2026 Business Class. All Rights Reserved. Managed with excellence.</p>
      </div>
    </footer>
  );
}
