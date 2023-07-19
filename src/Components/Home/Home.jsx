import React, { useEffect } from "react";
import './Home.css'
import Strip from "../Strip/Strip";
import { motion } from "framer-motion";

export default function Home() {

    
  return (
    <div className="Home">
      <motion.div
        className="home-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
      >
        <div className="home-fade"></div>
        <div className="home-header">
          <motion.h1
          >
            Empowering businesses
            <br />
            financially.
          </motion.h1>
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
      </motion.div>
    </div>
  );
}
