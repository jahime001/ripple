import React from "react";
import "./Footer.css";

export default function Footer() {
  const productLinks = [
    "Overview",
    "Features",
    "Pricing",
    "Security",
    "Solutions",
    "Releases",
  ];

  const companyLinks = [
    "About Us",
    "Our Team",
    "Careers",
    "Partners",
    "Locations",
    "Contact Us",
  ];

  const resourceLinks = [
    "Blog",
    "Help Center",
    "Guides",
    "Webinars",
    "Events",
    "Developers",
  ];
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="footer-header">
          <div>
            <h1>Sign up to our newsletter</h1>
            <p>Join Our Mailing List for Exclusive Updates.</p>
          </div>
          <div>
            <div className="footer-input-group">
              <input
                type="email"
                className="footer-input"
                id="Email"
                name="Email"
                placeholder="join@ripple.com"
                autocomplete="off"
              />
              <input
                className="footer-button--submit"
                value="Subscribe"
                type="submit"
              />
            </div>
          </div>
        </div>
        <div className="lower-footer">
          <div className="footer-body">
            <div className="footer-body-left">
              <p>
                Ripple is a fictional company created solely for the purpose of
                showcasing my UX/UI design skills. It is not a real product or
                service. The content, features, and testimonials on this website
                are for demonstration purposes only. The goal of this project is
                to exhibit my proficiency in creating user-centered designs and
                providing an engaging user experience. Thank you for visiting,
                and please note that no actual financial services or products
                are offered through Ripple.
              </p>
            </div>
            <div className="footer-links">
              <ul>
                <h3>Product</h3>
                {productLinks.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>

              <ul>
                <h3>Company</h3>
                {companyLinks.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>

              <ul>
                <h3>Resources</h3>
                {resourceLinks.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <h4>Ribble | Site Designed by Jahime Cameau</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
