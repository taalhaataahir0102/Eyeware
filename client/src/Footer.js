import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="legal-text">
        &copy; 2023 My Company. All rights reserved.
      </div>
      <div className="social-media-icons">
        <a href="https://www.facebook.com">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
