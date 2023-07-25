import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from "./ripple.png";
import { Divide as Hamburger } from "hamburger-react";
import { ThemeContext } from "../../App";
import Headroom from "react-headroom";
import { AnimatePresence, motion, useCycle } from "framer-motion";
export default function Nav({ theme, toggleTheme }) {
  let currentWidth = window.innerWidth;
  const [isOpen, setOpen] = useState(false);
  // const {theme, setTheme} = ThemeContext

  // const MenuItems = () => (
  //   <div className={`nav-menu ${isOpen ? "open" : ""}`}>
  //     <ul>
  //       <li>Home</li>
  //       <li>About</li>
  //       <li>Pricing</li>
  //       <li>Blog</li>
  //       <li>Careers</li>
  //       <li></li>
  //     </ul>
  //   </div>
  // );
  const links = [
    { name: "Home", to: "#", id: 1 },
    { name: "About", to: "#", id: 2 },
    { name: "Blog", to: "#", id: 3 },
    { name: "Contact", to: "#", id: 4 },
  ];

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };


  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {

        setShow(false);
      } else {

        setShow(true);
      }


      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);


      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
    const [open, cycleOpen] = useCycle(false, true);

  if (currentWidth > 600) {
    return (
      <div className={`Nav`}>
        <Headroom >
          <div className="nav-logo">
            <img src={logo} alt="" className="logo" />
            <h1>Ripple</h1>
          </div>
          <div className="nav-bar">
            <p>Home</p>
            <p>About</p>
            <p>Pricing</p>
            <p>Blog</p>
            <p>Careers</p>
            <label className="theme-switch">
              <input
                type="checkbox"
                className="theme-checkbox"
                onChange={toggleTheme}
                checked={theme === "light"}
              />
              <div className="theme-slider"></div>
            </label>
          </div>
          <div className="nav-action">
            <h3>Sign Up</h3>
          </div>
        </Headroom>
      </div>
    );
  } else {
    return (
      <div className={`Nav`}>
        <Headroom className="nav-container">
          <div className="nav-logo">
            <img src={logo} alt="" className="logo" />
          </div>
          <label className="theme-switch">
            <input
              type="checkbox"
              className="theme-checkbox"
              onChange={toggleTheme}
              checked={theme === "light"}
            />
            <div className="theme-slider"></div>
          </label>
          <div className="nav-action">
            <Hamburger toggle={cycleOpen} toggled={open} />
          </div>
        </Headroom>
        <AnimatePresence>
          {open && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{
                width: '100%',
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
              className="dropdown-aside"
            >
              <motion.div
                className="dropdown-container"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {links.map(({ name, to, id }) => (
                  <motion.a
                    key={id}
                    href={to}
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                  >
                    {name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    );
  }
}
