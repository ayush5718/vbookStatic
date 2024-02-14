import React from "react";
import Carousel from "react-bootstrap/Carousel";

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./HeroSection.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "../Services/Services";
import Testinomials from "../Testinomials/Testinomials";
import Sponsership from "../Sponsership/Sponsership";

import icon1 from "/src/assets/images/icon3.png";
import icon2 from "/src/assets/images/icon4.png";
import icon3 from "/src/assets/images/icon5.png";
import icon4 from "/src/assets/images/vbookwhite.png";
// import iconButton from "/src/assets/images/icon7.png";
import SliderHero from "../SliderHero/SliderHero";
import becomeatutor from "/src/assets/images/becomeAtutor.png";
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
        <section
          style={{ display: "flex", justifyContent: "center" }}
          className=""
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 20,
              width: "86%",
              gap: 45,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                padding: 10,
                width: "30%",
                height: "60%",
                color: "#000",
                backgroundColor: "#e9aa1b",
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
                <img
                  src={icon1}
                  alt=""
                  height={50}
                  width={70}
                  className="w-[20rem]"
                />
                <p className="text-4xl text-center" style={{ margin: 5 }}>
                  Text Explanation
                </p>
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
                <p id="box1" className="text-center lg:text-2xl  p-6">
                  The language used in our book is not overly complex; instead,
                  it adopts a simple and straightforward tone reminiscent of
                  handmade notes. This approach aims to make the content easily
                  understandable, thus aiding students in grasping concepts more
                  effectively
                </p>
              </div>
              <hr style={{ color: "white", width: "100%" }} />
              {/* <div id="getq">
                <img id="getq1" src={iconButton} alt="" />
              </div> */}
            </div>
            <div
              style={{
                padding: 10,
                width: "30%",
                color: "#505050",
                height: "60%",
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
                <img
                  src={icon2}
                  alt=""
                  height={70}
                  width={70}
                  className="w-[20rem]"
                />
                <p className="text-4xl text-center" style={{ margin: 5 }}>
                  Audio Explanation
                </p>
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
                <p id="box1" className="text-center text-2xl  text-white p-4">
                  The audio explanation will serve as an additional booster and
                  aid in clearing doubts. If any student has questions after
                  reading the text explanation, the tutor's audio explanation
                  will effectively address all concerns.
                </p>
              </div>
              <hr style={{ color: "white", width: "100%" }} />
              {/* <div id="getq">
                <img id="getq1" src={iconButton} alt="" />
              </div> */}
            </div>
            <div
              style={{
                padding: 10,
                width: "30%",
                color: "#505050",
                height: "60%",
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
                <img
                  src={icon3}
                  alt=""
                  height={50}
                  width={70}
                  className="w-[20rem]"
                />
                <p className="text-4xl" style={{ margin: 5 }}>
                  Video Explanation
                </p>
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
                <p id="box1" className="text-center text-2xl   p-4">
                  If any student still has doubts after the text and audio
                  explanations, there will be a video explanation of each topic
                  in Hinglish, which will clear up any remaining uncertainties
                  and ensure a thorough understanding of the concepts.
                </p>
              </div>
              <hr style={{ color: "white", width: "100%" }} />
              {/* <div id="getq">
                <img id="getq1" src={iconButton} alt="" />
              </div> */}
            </div>
            <div
              style={{
                padding: 10,
                width: "30%",
                color: "#505050",
                height: "60%",
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
                <img
                  src={icon4}
                  alt=""
                  height={50}
                  width={70}
                  className="w-[20rem]"
                />
                <p className="text-4xl" style={{ margin: 4 }}>
                  The Ultimate V-book
                </p>
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
                <p id="box1" className="text-center text-2xl text-white">
                  These three phases of learning will crystal clear the concepts
                  for students, taking their understanding to the next level. In
                  addition, V-Book also focuses on offering quality content at a
                  minimal price. Therefore, we have structured this book by
                  chapter rather than as a comprehensive course book. This
                  approach minimizes costs, providing students with a wide range
                  of learning options.
                </p>
              </div>
              <hr style={{ color: "white", width: "100%" }} />
              {/* <div id="getq">
                <img id="getq1" src={iconButton} alt="" />
              </div> */}
            </div>
          </div>
        </section>

        {/* why vbook ends */}
        <Testinomials />
        <div className="py-16 bg-white lg:border-t-4 p-4 border-b-4">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 ">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 justify-center">
              <div className="md:5/12 lg:w-4/12">
                <img
                  src={becomeatutor}
                  alt="image"
                  loading="lazy"
                  width=""
                  height=""
                />
              </div>
              <div className="md:7/12 lg:w-4/12 text-2xl ml-4 mt-20]">
                <h2 className="text-6xl text-gray-700 font-bold md:text-7xl mt-20">
                  Become a Tutor
                </h2>
                <p className="mt-6 text-3xl text-gray-500">
                  Creating your own book is a dream of every teacher. It's time
                  to create a book that reflects your words, your voice, and
                  your unique teaching style with the help of V-Book tools and
                  your teaching skills.
                </p>
                <button className="bg-[#01adef] mt-4 px-7 py-7 md:text-3xl text-3xl text-white font-bold rounded">
                  <NavLink to="/teacher">create your 1st book</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Sponsership />
        {/* <OurTeam /> */}
        {/* <Faq /> */}
        <svg class="animate-bounce w-6 h-6"></svg>
      </div>
    </>
  );
};

export default HeroSection;
