import React, { useEffect, useRef } from 'react'
import './About.css'
import { motion, useInView, useAnimation } from "framer-motion";
import One from './1.png'
import Two from './2.png'
import Three from './3.png'

export default function About() {

  const container = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="About">
      <div className="about-container" ref={container}>
        <div className="about-sect-cont" ref={ref}>
          <div className="about-sect-box 1">
            <motion.p
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="about-text-left"
            >
              <span className="first-word">Ripple</span> is a leading financial
              technology company dedicated to empowering businesses financially.
              With our innovative solutions, we strive to simplify and optimize
              financial operations, allowing businesses to{" "}
              <span>thrivein today's fast-paced economy.</span> Our mission is
              to provide cutting-edge tools and services that streamline
              payments, <span>enhance cash flow management</span>, and unlock
              growth opportunities for our clients.
            </motion.p>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="about-sect-box"
          >
            <img src={One} alt="" className="about-img" />
          </motion.div>
        </div>
        <div className="about-sect-cont varient-box">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="about-sect-box"
          >
            <img src={Two} alt="" className="about-img" />
          </motion.div>
          <div className="about-sect-box">
            <motion.p
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="about-text-right"
            >
              At Ripple, we believe in the power of technology to{" "}
              <span>
                revolutionize the way businesses manage their finances
              </span>
              . Our team of experts is passionate about delivering secure,
              reliable, and user-friendly solutions that enable businesses to
              focus on what they do best. By harnessing the{" "}
              <span>latest advancements in financial technology</span>, we are
              committed to helping businesses navigate financial challenges and
              achieve their goals.
            </motion.p>
          </div>
        </div>
        <div className="about-sect-cont">
          <div className="about-sect-box">
            <motion.p
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="about-text-left"
            >
              With a customer-centric approach, we prioritize the needs of our
              clients and strive for excellence in everything we do. Our
              dedicated <span>support team is always available</span> to provide
              personalized assistance, ensuring a smooth and successful
              experience for our valued customers. Join the Ripple community and 
              <span> discover the difference our financial solutions can make for
                your business
              </span>
              .
            </motion.p>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="about-sect-box"
          >
            <img src={Three} alt="" className="about-img" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
