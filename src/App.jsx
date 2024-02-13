import { useState } from "react";
// import { Link } from 'react-router-dom'
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/Home/HeroSection";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";

import "bootstrap/dist/css/bootstrap.min.css";
// import Communicate from './Components/Communicate/Communicate'
import Testinomials from "./Components/Testinomials/Testinomials";
import Sponsership from "./Components/Sponsership/Sponsership";
import OurTeam from "./Components/OurTeam/OurTeam";
import Contact from "./Components/Contact/Contact";
import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
// import NewPage from "./Components/Gaurav/NewPage";

function App() {
  return (
    <>
      <div className="dark">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
        {/* <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link */}

        <Navbar />
        <Outlet />
        {/* <NewPage /> */}
        <Footer />
        {/* <HeroSection /> */}
        {/* <About /> */}

        {/* <Services /> */}
        {/* <Counters /> */}
        {/* <Projects /> */}
        {/* <div className="communicate">
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
    <p>Lorem ipsum dolor sit amet.</p>
    <a href="#contact">
      <button className="btn">Contact Now</button>
    </a>
  </div> */}
        {/* <Communicate />
  <Testinomials />
  <Sponsership />
  
 
  <OurTeam />
  <Contact /> */}

        {/* <section className="faq">
    <h1
      className="heading"
      style={{ marginTop: "-2rem", color: "#00bfff" }}
      id="faq"
    >
      FAQ
    </h1>
    <div className="row">
      <div className="accordion-container">
        <div className="accordion">
          <div className="accordion-header">
            <span>+</span>
            <h3>How much will it cost?</h3>
          </div>
          <div className="accordion-body">
            <p>
              To get a better idea of the cost of what you want to build, give
              us a quick phone call. We’ll ask you a few questions about the
              nature of the site, what sort of interactivity the site will have,
              your graphic design needs, etc. Then we’ll be able to give you a
              ballpark figure. If you’re still interested, we’ll come to your
              place of business and come up with a firm quote.
            </p>
          </div>
        </div>
        <div className="accordion">
          <div className="accordion-header">
            <span>+</span>
            <h3>How long it takes to design?</h3>
          </div>
          <div className="accordion-body">
            <p>
              The time limit of any assignment is normally dictated by the
              client. If you have any time limit in mind we will attempt to
              assemble it for you. The main general delay in the making of a
              website is waiting for the content of the pages to be sent to us
              by the client.
            </p>
          </div>
        </div>
        <div className="accordion">
          <div className="accordion-header">
            <span>+</span>
            <h3>How do I associate with IT Company?</h3>
          </div>
          <div className="accordion-body">
            <p>
              The process begins when you contact us with your requirements. We
              analyze your requirements and respond to you. On the basis of the
              further discussion, you can choose an engagement model that suits
              you the best. After that, we begin the process of development.
            </p>
          </div>
        </div>
        <div className="accordion">
          <div className="accordion-header">
            <span>+</span>
            <h3>Can you help my current site look more professional?</h3>
          </div>
          <div className="accordion-body">
            <p>
              Yes. Give us your requirements and we have experienced expertise
              to help you give a new professional look that really wonders!
            </p>
          </div>
        </div>
        <div className="accordion">
          <div className="accordion-header">
            <span>+</span>
            <h3>When do I pay?</h3>
          </div>
          <div className="accordion-body">
            <p>
              For most projects, equal payments are made at the start, midway,
              and the end of the project, but we can work with you to set up a
              schedule that meets your needs. We understand that this is a big
              investment and want to help you budget for the expense in whatever
              way possible. We accept checks, PayPal, and all major credit
              cards.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section> */}
        {/* <Faq /> */}

        {/* <a href="#" className="back-to-top">
    <i className="ion-ios-arrow-up" />
  </a> */}
      </div>
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    </>
  );
}

export default App;
