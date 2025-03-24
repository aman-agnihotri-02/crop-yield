import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>CropYieldAI</h2>
        <p>Enhancing agricultural productivity with AI-driven crop yield predictions.</p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/predict">Predict</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CropYieldAI | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
