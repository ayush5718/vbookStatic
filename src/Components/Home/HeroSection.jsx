import React from "react";
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
// const flickityOptions = {
//   initialIndex: 0,
//   wrapAround: true,
//   pageDots: false,
//   prevNextButtons: true,
//   contain: true,
//   Infinity:true,
//   fullscreen: true,

// };
const options = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
};

const HeroSection = () => {
  return (
    <>
      {/* <Slider options={options}>
        <div className='carousel-cell'>
          <img className="carousel-image" src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" />
        </div>
        <div className='carousel-cell'>
          <img className="carousel-image" src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 2" />
        </div>
        <div className='carousel-cell'>
          <img className="carousel-image" src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 3" />
        </div>
      </Slider> */}
      {/* <section id="home" class="home">
          <h1>Welcome to V-book</h1>
          <h2>with IT Company Services</h2>
          <div class="wave wave1"></div>
         <div class="wave wave2"></div>
         <div class="wave wave3"></div>
      </section> */}
      {/* <div class="main">
            <div class="hero-content">
                <h2><span>Studying</span> Online is <br/> now much easier</h2>
                <p>Skilline is an interesting platform that will teach you in more an interactive way</p>
                <div class="buttons">
                    <button>Join For Free</button>
                    <div class="play">
                        <i class="bi bi-play-fill"></i>
                        <a href="">Watch How it works</a>
                    </div>
                </div>
            </div>
            <div class="img">
                <img src={girl} alt=""/>
            </div>
            <div class="wave wave1"></div>
         <div class="wave wave2"></div>
         <div class="wave wave3"></div>
        </div> */}

      <section class="hero bg-cream">
        <div class="main">
          <div class="hero-content">
            <h2>
              <span className="text-[#d59a4d] smallcase text-9xl">
                Studying online
              </span>
              <span className="text-[#01ADEF]">
                {" "}
                <br />
                is now much easier
              </span>
            </h2>
            <p className="text-white font-bold">
              V-book is an interesting platform that will teach you in more an
              interactive way
            </p>
            <div class="buttons">
              <NavLink to="/registeration">
                {/* {" "} */}
                <button>Register For Free</button>
              </NavLink>
            </div>
          </div>
          <div class="img">
            <img src={girl} alt="" />
          </div>
        </div>
      </section>
      <div class="wave-section">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
      </div>
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
              width: "25%",
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
              <p id="box1">Brand Naming</p>
              <p id="box1">Brand design</p>
              <p id="box1">Brand guideline</p>
              <p id="box1">-</p>
              <p id="box1">-</p>
              <p id="box1">-</p>
              <p id="box1">-</p>
              <p id="box1">-</p>
              <p id="box1">-</p>
            </div>
            <hr style={{ color: "white", width: "100%" }} />
            <div id="getq">
              <img id="getq1" src={iconButton} alt="" />
            </div>
          </div>
          <div
            style={{
              padding: 10,
              width: "25%",
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
              <img src={icon2} alt="" height={50} width={70} />
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
              <p id="box1">Brand Naming</p>
              <p id="box1">Brand design</p>
              <p id="box1">Brand guideline</p>
              <p id="box1">Positioning Line</p>
              <p id="box1">Website</p>
              <p id="box1">Collaterals</p>
              <p id="box1">-</p>
              <p id="box1">-</p>
              <p id="box1">-</p>
            </div>
            <hr style={{ color: "white", width: "100%" }} />
            <div id="getq">
              <img id="getq1" src={iconButton} alt="" />
            </div>
          </div>
          <div
            style={{
              padding: 10,
              width: "25%",
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
              <p id="box1">Brand Naming</p>
              <p id="box1">Brand design</p>
              <p id="box1">Brand guideline</p>
              <p id="box1">Positioning Line</p>
              <p id="box1">Website</p>
              <p id="box1">Collaterals</p>
              <p id="box1">Catalogue</p>
              <p id="box1">E-brochure</p>
              <p id="box1">Packaging design</p>
            </div>
            <hr style={{ color: "white", width: "100%" }} />
            <div id="getq">
              <img id="getq1" src={iconButton} alt="" />
            </div>
          </div>
          <div
            style={{
              padding: 10,
              width: "25%",
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
              <p style={{ fontSize: 14, margin: 1, color: "rgba(0,0,0,0)" }}>
                uygi
              </p>
              <p style={{ fontSize: 12, margin: 1, color: "rgba(0,0,0,0)" }}>
                ugu
              </p>
              <p id="lastdiv1">
                Solutions <br />
                On Demand
              </p>
              <p style={{ fontSize: 12, margin: 1, color: "rgba(0,0,0,0)" }}>
                Demand
              </p>
              <p style={{ fontSize: 12, margin: 1, color: "rgba(0,0,0,0)" }}>
                Collaterals
              </p>
              <p style={{ fontSize: 14, margin: 1, color: "rgba(0,0,0,0)" }}>
                Catalogue
              </p>
              <p style={{ fontSize: 14, margin: 1, color: "rgba(0,0,0,0)" }}>
                guyfviu
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
    </>
  );
};

export default HeroSection;
