import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Plan from "./Components/Plan/Plan";
import Strip from "./Components/Strip/Strip";
import Feature_boxes from "./Components/Feature_boxes/Feature_boxes";
import Partners from "./Components/Partners/Partners";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import { createContext, useState } from "react";
import { motion, useScroll,useSpring } from "framer-motion";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");
   const { scrollYProgress } = useScroll();
  
  const toggleTheme = () => {
    setTheme((curr)  => (curr === 'dark' ? 'light': 'dark'))
  }
const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
});
  return (
    <div className="App" data-theme={theme}>
      <motion.div
        style={{ scaleX }}
        className="progress-bar"
        // d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        // style={{ pathLength: scrollYProgress }}
      />
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Home />
      <Partners />
      <Feature_boxes />
      <About />
      <Strip />
      <Testimonials />
      <Plan />
      <Footer />
    </div>
  );
}

export default App;
