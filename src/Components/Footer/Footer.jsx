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
            <div className="footer-logos">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="footer-logo"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="footer-logo"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="footer-logo"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="footer-logo"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.086 8.267c-.3.672-.181 1.876-.133 2.718-.324.179-.74-.136-.975-.136-.245 0-.538.161-.583.401-.033.173.044.425.6.645.215.085.727.185.845.464.166.392-.855 2.202-2.459 2.466-.126.02-.216.132-.209.259.028.488 1.121.678 1.605.754.05.067.09.35.153.566.028.097.102.212.291.212.246 0 .656-.19 1.369-.072.699.117 1.356 1.107 2.617 1.107 1.173 0 1.872-.996 2.545-1.107.389-.065.724-.044 1.098.029.257.05.488.079.562-.174.064-.219.104-.496.152-.561.48-.075 1.578-.265 1.606-.753.007-.127-.083-.239-.208-.259-1.577-.26-2.629-2.064-2.459-2.466.118-.278.626-.378.845-.464.407-.161.611-.358.606-.586-.006-.292-.357-.467-.616-.467-.264 0-.642.312-.949.143.048-.849.166-2.048-.133-2.719-.567-1.272-1.83-1.916-3.092-1.916-1.252-.001-2.506.633-3.078 1.916z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
