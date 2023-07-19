import React, { useEffect } from "react";
import './Home.css'
import Strip from "../Strip/Strip";
export default function Home() {

    
  return (
    <div className="Home">
      <div className="home-container">
        <div className="home-fade"></div>
        <div className="home-header">
          <h1>
            Empowering businesses
            <br />
            financially.
          </h1>
        </div>
        <div className="home-body">
          <p>
            Unlocking your business's financial potential with innovative
            solutions and personalized support.
          </p>
        </div>
        <div className="home-footer">
          <button className="home-footer-button1">Try Free</button>
          <button className="home-footer-button2">Learn More</button>
        </div>
      </div>
    </div>
  );
}
