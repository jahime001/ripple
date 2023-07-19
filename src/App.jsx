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

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");
  
  const toggleTheme = () => {
    setTheme((curr)  => (curr === 'dark' ? 'light': 'dark'))
  }

  return (
    <div className="App" data-theme={theme}>
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
