import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import About from "../About/About";
import "./Navbar.css";
import logo from "/src/assets/images/logo.png";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <a href="#" className="logo">
          <img src={logo} alt="" />
        </a>
        <div className="fas fa-bars" />
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/ourteams">Our Teams</NavLink>
            </li>
            <li>
              <NavLink to="/teacher">Become a Tutor</NavLink>
            </li>
            {/* <li>
        <NavLink to="/">Home</NavLink>
        </li> */}
            <li>
              <NavLink to="/registeration">
                {" "}
                <button className="buttons">Student Pre Registeration</button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
