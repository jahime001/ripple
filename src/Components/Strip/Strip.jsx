import React, { useState, useEffect, useRef } from "react";
import "./Strip.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { motion,  useInView, useAnimation } from "framer-motion";
export default function Strip() {
  const [counterOn, setCounterOn] = useState(false)

const ref = useRef(null);
const isInView = useInView(ref);
const mainControls = useAnimation();

useEffect(() => {
  if (isInView) {
    mainControls.start("visible");
  }
}, [isInView]);


  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="Strip" ref={ref}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="strip-container"
        >
          <div>
            {counterOn && (
              <CountUp
                start={0.0}
                end={5.7}
                duration={2}
                separator=" "
                decimals={1}
                decimal="."
                prefix="$"
                suffix="K+"
                className="strip-number"
              />
            )}
            <p>Users</p>
          </div>
          <div>
            {counterOn && (
              <CountUp
                start={0.0}
                end={2.5}
                duration={3}
                separator=" "
                decimals={1}
                decimal="."
                prefix="$"
                suffix="B+"
                className="strip-number"
              />
            )}
            <p>Transacted</p>
          </div>
          <div>
            {counterOn && (
              <CountUp
                start={0}
                end={98}
                duration={4}
                separator=" "
                decimals={0}
                decimal="."
                prefix=""
                suffix="%"
                className="strip-number"
              />
            )}
            <p>Customer Satisfaction</p>
          </div>

          <div>
            {counterOn && (
              <CountUp
                start={0}
                end={30}
                duration={5}
                separator=" "
                decimals={0}
                decimal="."
                prefix=""
                suffix="+"
                className="strip-number"
              />
            )}
            <p>Contries</p>
          </div>
        </motion.div>
      </div>
    </ScrollTrigger>
  );
}
