import React from "react";
import Carousel from "react-bootstrap/Carousel";

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./HeroSection.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "../Services/Services";
import Counters from "../Counters/Counters";
import Testinomials from "../Testinomials/Testinomials";
import Sponsership from "../Sponsership/Sponsership";
import OurTeam from "../OurTeam/OurTeam";
import girl from "/src/assets/images/girl.png";
import Faq from "../Faq/Faq";
import icon1 from "/src/assets/images/icon3.png";
import icon2 from "/src/assets/images/icon4.png";
import icon3 from "/src/assets/images/icon5.png";
import icon4 from "/src/assets/images/icon6.png";
import iconButton from "/src/assets/images/icon7.png";
import SliderHero from "../SliderHero/SliderHero";
// const flickityOptions = {
//   initialIndex: 0,
//   wrapAround: true,
//   pageDots: false,
//   prevNextButtons: true,
//   contain: true,
//   Infinity:true,
//   fullscreen: true,

// };

const HeroSection = () => {
  return (
    <>
      {/* hero section carousel */}

      <SliderHero />
      {/* <div class="wave-section">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
      </div> */}
      <div className="main-cont px-4">
        <Services />
        {/* <Counters /> */}
        {/* why vbook */}
        <section style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 20,
              width: "80%",
              gap: 10,
            }}
          >
            <div
              style={{
                padding: 10,
                width: "30%",
                height: 312,
                color: "#000",
                backgroundColor: "#fbb516",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                flexGrow: "inherit",
                borderRadius: 10,
              }}
              onmouseover="this.style.backgroundColor='#c28e14'"
              onmouseout="this.style.backgroundColor='#fbb516'"
            >
              <div
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={icon1} alt="" height={50} width={70} />
                <p style={{ margin: 5 }}>Starter</p>
              </div>
              <hr style={{ color: "white", width: "100%" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#fff",
                  flexDirection: "column",
                  flexGrow: "inherit",
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <p id="box1" className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, iure.
                </p>
              </div>
              <hr style={{ color: "white", width: "100%" }} />
              <div id="getq">
                <img id="getq1" src={iconButton} alt="" />
              </div>
            </div>
            <div
              style={{
                padding: 10,
                width: "30%",
                color: "#505050",
                height: 312,
                backgroundColor: "#2cb04a",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                flexGrow: "inherit",
                borderRadius: 10,
              }}
              onmouseover="this.style.backgroundColor='#0d5f20'"
              onmouseout="this.style.backgroundColor='#2cb04a'"
            >
              <div
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={icon2} alt="" height={70} width={70} />
                <p style={{ margin: 5 }}>Booster</p>
              </div>
              <hr style={{ color: "white", width: "100%" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#fff",
                  flexDirection: "column",
                  flexGrow: "inherit",
                  borderRadius: 25,
                  alignItems: "center",
                }}
              >
                <p id="box1" className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, iure.
                </p>
              </div>
              <hr style={{ color: "white", width: "100%" }} />
              <div id="getq">
                <img id="getq1" src={iconButton} alt="" />
              </div>
            </div>
            <div
              style={{
                padding: 10,
                width: "30%",
                color: "#505050",
                height: 312,
                backgroundColor: "#6454a4",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                flexGrow: "inherit",
                borderRadius: 10,
                transition: "background-color 0.3s",
              }}
              onmouseover="this.style.backgroundColor='#3b3161'"
              onmouseout="this.style.backgroundColor='#6454a4'"
            >
              <div
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={icon3} alt="" height={50} width={70} />
                <p style={{ margin: 5 }}>Turbo</p>
              </div>
              <hr style={{ color: "white", width: "100%" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#fff",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p id="box1" className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, iure.
                </p>
              </div>
              <hr style={{ color: "white", width: "100%" }} />
              <div id="getq">
                <img id="getq1" src={iconButton} alt="" />
              </div>
            </div>
            <div
              style={{
                padding: 10,
                width: "30%",
                color: "#505050",
                height: 312,
                backgroundColor: "#f05940",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                flexGrow: "inherit",
                borderRadius: 10,
              }}
              onmouseover="this.style.backgroundColor='#912816'"
              onmouseout="this.style.backgroundColor='#f05940'"
            >
              <div
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={icon4} alt="" height={50} width={70} />
                <p style={{ margin: 4 }}>A-la-carte</p>
              </div>
              <hr style={{ color: "white", width: "100%" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p id="box1" className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, iure.
                </p>
              </div>
              <hr style={{ color: "white", width: "100%" }} />
              <div id="getq">
                <img id="getq1" src={iconButton} alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* why vbook ends */}
        <Testinomials />
        <Sponsership />
        {/* <OurTeam /> */}
        {/* <Faq /> */}
        <svg class="animate-bounce w-6 h-6"></svg>
      </div>
    </>
  );
};

export default HeroSection;
