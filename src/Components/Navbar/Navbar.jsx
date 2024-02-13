import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import About from "../About/About";
import logo from "/src/assets/images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header className="header md:top-0 top-[-38px]">
      <nav className="nav container">
        <img src={logo} className="w-[150px]" alt="" />

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""} text-white`}
          id="nav-menu"
        >
          <ul className="nav__list text-white lg:text-4xl text-4xl lg:flex lg:items-center">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/about"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/ourteams"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Our Teams
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/contact"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/teacher"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Become A Tutor
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/registeration"
                className="nav__link nav__cta button"
              >
                Student Pre Registeration
              </NavLink>
            </li>
          </ul>
          <div
            className="nav__close text-white mr-4 text-8xl"
            id="nav-close"
            onClick={toggleMenu}
          >
            <IoClose />
          </div>
        </div>

        <div
          className="nav__toggle text-white mr-8 text-8xl"
          id="nav-toggle"
          onClick={toggleMenu}
        >
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
