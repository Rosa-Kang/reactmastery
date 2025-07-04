import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Crypto Tracker</h3>
          <p>Real-time cryptocurrency data</p>
        </div>
        
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="https://www.coingecko.com/en/api" target='blank'>API</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Social</h4>
          <div className="social-links">
            <a href="#twitter" className="social-link">Twitter</a>
            <a href="#github" className="social-link">GitHub</a>
            <a href="#linkedin" className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2022 Crypto Tracker. All rights reserved.</p>
        <p>Data provided by CoinGecko API</p>
      </div>
    </footer>
  );
};

export default Footer;