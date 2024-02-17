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
import { Outlet, useLocation } from "react-router-dom";
// import NewPage from "./Components/Gaurav/NewPage";

function App() {
  const location = useLocation();

  // Define an array of routes where Navbar and Footer should be hidden
  const routesWithoutNavbarAndFooter = ["/thankyou"];

  // Check if the current route is in the array
  const shouldHideNavbarAndFooter = routesWithoutNavbarAndFooter.includes(
    location.pathname
  );

  return (
    <>
      <div className="dark">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />

        <Navbar />
        <Outlet />
        {!shouldHideNavbarAndFooter && <Footer />}
      </div>
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    </>
  );
}

export default App;
