import React, { useState } from "react";
import "./Strip.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Strip() {
  const [counterOn, setCounterOn] = useState(false)

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="Strip">
        <div className="strip-container">
          <div>
            {counterOn &&
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
            }
            <p>Users</p>
          </div>
          <div>
            {counterOn &&
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
            }
            <p>Transacted</p>
          </div>
          <div>
            {counterOn &&
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
            }
            <p>Customer Satisfaction</p>
          </div>
            
          <div>
            {counterOn &&
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
            }
            <p>Contries</p>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}
