import React from "react";
import {
  Phone,
  Mail,
  ChevronRight,
  ShieldCheck,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
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
    socialIcons: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginBottom: "10px",
    },
    inlineCSS: `
      .footer-link:hover {
        color: #FFFFFF !important;
        transform: translateX(5px);
      }
      .footer-link {
        color: inherit;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 8px;
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
        {/* Logo & Contact */}
        <div style={styles.logoSection}>
          <img
            style={{ width: "60px", height: "60px" }}
            src="/photos/BusinessClassLogo.png"
            alt="Logo"
          />
          <p style={styles.text}>
            *Fares include all fuel surcharges, service fees, and taxes. Fares
            are subject to change and cannot be guaranteed until booking is
            complete.
          </p>
          <div>
            <a href="tel:+18663075957" className="contact-item" style={styles.contactLink}>
              <Phone size={18} /> (866) 307-5957
            </a>
            <a href="mailto:info@asktravelo.com" className="contact-item" style={styles.contactLink}>
              <Mail size={18} /> info@asktravelo.com
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={styles.columnTitle}>Quick Links</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <a href="/" className="footer-link link-item">
                <ChevronRight size={14} /> Home
              </a>
            </li>
            <li style={styles.listItem}>
              <a href="#" className="footer-link link-item">
                <ChevronRight size={14} /> About Us
              </a>
            </li>
            <li style={styles.listItem}>
              <a href="/services" className="footer-link link-item">
                <ChevronRight size={14} /> Our Services
              </a>
            </li>
            <li style={styles.listItem}>
              <a href="#" className="footer-link link-item">
                <ChevronRight size={14} /> Travel Blogs
              </a>
            </li>
            <li style={styles.listItem}>
              <a href="#" className="footer-link link-item">
                <ChevronRight size={14} /> Flight Status
              </a>
            </li>
            <li style={styles.listItem}>
              <a href="/contact-us" className="footer-link link-item">
                <ChevronRight size={14} /> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Trust & Support */}
        <div>
          <h4 style={styles.columnTitle}>Trust & Support</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <a href="#" className="footer-link link-item">
                <ShieldCheck size={14} /> Privacy Policy
              </a>
            </li>
            <li style={styles.listItem}>
              <a href="#" className="footer-link link-item">
                <ShieldCheck size={14} /> Terms of Service
              </a>
            </li>
            <li style={styles.listItem}>
              <a href="#" className="footer-link link-item">
                <ShieldCheck size={14} /> Cancellation Policy
              </a>
            </li>
            {/* <li style={styles.listItem}>
              <a href="/help" className="footer-link link-item">
                <ShieldCheck size={14} /> Help Center
              </a>
            </li> */}
            <li style={styles.listItem}>
              <a href="/faq" className="footer-link link-item">
                <ShieldCheck size={14} />FAQ
              </a>
            </li>
            <li style={styles.listItem}>
              <a href="#" className="footer-link link-item">
                <ShieldCheck size={14} /> Feedback
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <div style={styles.socialIcons}>
          <a href="#" className="footer-link"><Facebook size={20} /></a>
          <a href="#" className="footer-link"><Twitter size={20} /></a>
          <a href="#" className="footer-link"><Instagram size={20} /></a>
          <a href="#" className="footer-link"><Linkedin size={20} /></a>
        </div>

        <p>All records reserved. Managed by Risezonic.</p>
      </div>
    </footer>
  );
}
