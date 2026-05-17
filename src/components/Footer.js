import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="f-brand">
            <Link to="/" className="f-logo">
              <div className="f-logo-icon">🐾</div>
              <div className="f-logo-text">Furrever<span> AI</span></div>
            </Link>
            <p className="f-desc">The all-in-one AI-powered pet care companion. Built with love for pet parents everywhere.</p>
            <div className="f-social">
              <a href="https://twitter.com"  target="_blank" rel="noopener noreferrer" className="soc-btn" aria-label="Twitter">𝕏</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="soc-btn" aria-label="Instagram">📸</a>
              <a href="https://tiktok.com"   target="_blank" rel="noopener noreferrer" className="soc-btn" aria-label="TikTok">🎵</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="soc-btn" aria-label="Facebook">f</a>
            </div>
          </div>

          <div className="f-col">
            <h5>Product</h5>
            <Link to="/#features">Features</Link>
            <Link to="/#ai">AI Assistant</Link>
            <Link to="/#community">Community</Link>
            <Link to="/#screenshots">App Screens</Link>
            <Link to="/#download">Download</Link>
          </div>

          <div className="f-col">
            <h5>Company</h5>
            <Link to="/about">About Us</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/press">Press Kit</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="f-col">
            <h5>Support</h5>
            <Link to="/help">Help Center</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
            <a href="mailto:support@furrever.ai">support@furrever.ai</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="f-copy">© 2025 Furrever AI. All rights reserved. Made with 🐾 for pet lovers.</p>
          <div className="f-legal">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
