import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import About from "../About/About";
import logo from "/src/assets/images/logo.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { FaGroupArrowsRotate } from "react-icons/fa6";
import { RiContactsBookLine } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [activeNave, setActiveNav] = useState("Home");

  const toggleNavMenu = () => {
    setShowMenu(!showMenu);
  };

  // const closeMenuOnMobile = () => {
  //   if (window.innerWidth <= 1150) {
  //     setShowMenu(false);
  //   }
  // };
  const navItems = [
    { name: "Home", url: "/", icon: <FaHome /> },
    {
      name: "About ",
      url: "/about",
      icon: <MdOutlineRoundaboutLeft />,
    },
    { name: "Our Teams", url: "/ourteams", icon: <FaGroupArrowsRotate /> },
    { name: "Contacts", url: "/contact", icon: <RiContactsBookLine /> },
    { name: "Become a Tutor", url: "/teacher", icon: <GiTeacher /> },
  ];

  const handleNavItemClick = (navItem) => {
    setActiveNav(navItem.name);
    navigate(navItem.url);
  };
  return (
    <nav class="fixed top-0 w-full  bg-[#02022a] flex justify-between items-center text-gray-50 border-b-[1px] border-gray-400 shadow-md shadow-gray-500 p-2 z-[9000] text-[1.2rem] relative">
      <div>
        <img src={logo} alt="logo.png" class="w-[170px] h-[50px]" />
      </div>
      <div class="items-center gap-4 text-center hidden md:flex md:text-3xl">
        {navItems.map((navItem, index) => (
          <span
            onClick={() => handleNavItemClick(navItem)}
            key={index}
            class={` ${
              activeNave === navItem.name
                ? "border-[1px] border-gray-100  rounded-[2px] hover:bg-gray-50 hover:border-[1px] border-gray-400 hover:text-[#132146]"
                : "hover:underline"
            } cursor-pointer px-[8px] py-[2px]`}
          >
            {navItem.name}
          </span>
        ))}

        <span class="border-[#01ADEF] border-[1px] text-[#01ADEF] hover:bg-[#01ADEF] hover:text-gray-50 cursor-pointer py-[2px] px-[8px] rounded-[2px]">
          <NavLink to="/registeration"> Student Pre Registeration</NavLink>
        </span>
      </div>
      {!showMenu ? (
        <IoMenu
          className="flex md:hidden text-[3.5rem]"
          onClick={toggleNavMenu}
        />
      ) : (
        <RxCross2
          className="flex md:hidden text-[3.5rem]"
          onClick={toggleNavMenu}
        />
      )}

      <div
        className={`absolute top-[60px] right-0 w-[300px] text-[1.3rem] sm:text-[2rem] bg-[#132146] ${
          showMenu ? "flex" : "hidden"
        } flex-col md:hidden shadow-md shadow-gray-100`}
      >
        {navItems.map((navItem, index) => (
          <div
            key={index}
            onClick={() => handleNavItemClick(navItem)}
            class={` ${
              activeNave === navItem.name
                ? "border-[1px]  rounded-[2px] bg-gray-50 border-gray-400 text-[#132146]"
                : " border-b-[1px] border-gray-50"
            } cursor-pointer px-[8px] py-[6px] flex items-center gap-3`}
          >
            {navItem.icon}
            <span>{navItem.name}</span>
          </div>
        ))}

        <span class="border-[#01ADEF] border-[1px] text-[#01ADEF] hover:bg-[#01ADEF] hover:text-gray-50 cursor-pointer py-[4px] px-[8px] rounded-[2px] text-center w-full">
          <NavLink to="/registeration">Student Pre Registeration</NavLink>
        </span>
      </div>
    </nav>
    // <header className="header md:top-0 top-[-45px] border-2 border-red-500">
    //   <nav className="nav container">
    //     <div className="lg:mb-[20px] lg:absolute">
    //       <img src={logo} className="lg:w-[250px] w-[150px]" alt="" />
    //     </div>
    //     <div
    //       className={`nav__menu ${showMenu ? "show-menu" : ""} text-white`}
    //       id="nav-menu"
    //     >
    //       <ul className="nav__list text-white lg:text-3xl text-3xl lg:flex lg:items-center lg:mb-24 lg:ml-[520px] lg:mt-[20px]">
    //         <li className="nav__item">
    //           <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
    //             Home
    //           </NavLink>
    //         </li>
    //         <li className="nav__item">
    //           <NavLink
    //             to="/about"
    //             className="nav__link"
    //             onClick={closeMenuOnMobile}
    //           >
    //             About Us
    //           </NavLink>
    //         </li>
    //         <li className="nav__item">
    //           <NavLink
    //             to="/ourteams"
    //             className="nav__link"
    //             onClick={closeMenuOnMobile}
    //           >
    //             Our Teams
    //           </NavLink>
    //         </li>
    //         <li className="nav__item">
    //           <NavLink
    //             to="/contact"
    //             className="nav__link"
    //             onClick={closeMenuOnMobile}
    //           >
    //             Contact Us
    //           </NavLink>
    //         </li>
    //         <li className="nav__item">
    //           <NavLink
    //             to="/teacher"
    //             className="nav__link"
    //             onClick={closeMenuOnMobile}
    //           >
    //             Become A Tutor
    //           </NavLink>
    //         </li>
    //         <li className="nav__item">
    //           <NavLink
    //             to="/registeration"
    //             className="nav__link nav__cta button"
    //           >
    //             Student Pre Registration
    //           </NavLink>
    //         </li>
    //       </ul>
    //       <div
    //         className="nav__close text-white mr-4 text-8xl"
    //         id="nav-close"
    //         onClick={toggleMenu}
    //       >
    //         <IoClose />
    //       </div>
    //     </div>

    //     <div
    //       className="nav__toggle text-white mr-8 text-8xl"
    //       id="nav-toggle"
    //       onClick={toggleMenu}
    //     >
    //       <IoMenu />
    //     </div>
    //   </nav>
    // </header>
  );
};

export default Navbar;
