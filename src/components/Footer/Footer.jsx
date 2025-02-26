import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/profile.php?id=100093376839639"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/anupamk.c/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/anupam-chettri-3b1617323/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/anupam1946/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <p>© 2025 Anupam pratap singh k.c! All rights reserved.</p>
    </footer>
  );
};

export default Footer;

