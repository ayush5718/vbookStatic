import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    
    <div className="footer bg-red-600">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>About Us</h4>
            <ul>
              <li>
                <i className="ion-ios-arrow-forward" /> <a href="#">Home</a>
              </li>
              <li>
                <i className="ion-ios-arrow-forward" />{" "}
                <a href="#about">About us</a>
              </li>
              <li>
                <i className="ion-ios-arrow-forward" />{" "}
                <a href="#service">Our services</a>
              </li>
              <li>
                <i className="ion-ios-arrow-forward" />{" "}
                <a href="#">Terms &amp; condition</a>
              </li>
              <li>
                <i className="ion-ios-arrow-forward" />{" "}
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="ion-ios-arrow-forward" />{" "}
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <i className="ion-ios-arrow-forward" />  <NavLink to="/tutor">Become a Tutor</NavLink>
              </li>
              <li>
                <i className="ion-ios-arrow-forward" />{" "}
                <a href="careers.html">Career</a>
              </li>
              <li>
                <i className="ion-ios-arrow-forward" />{" "}
                <a href="#contact">Contact</a>
              </li>
              <li>
                <i className="ion-ios-arrow-forward" /> <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div
            className="col-lg-3 col-md-6 footer-contact"
            style={{ fontSize: "1.5rem" }}
          >
            <h4>Contact Us</h4>
            <p>
              1300 Center Avenue
              <br />
              Fresno, California
              <br />
              United States <br />
              <strong>Phone:</strong> +123-456-7890
              <br />
              <strong>Email:</strong> info@example.com
              <br />
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/">
                <i className="ion-logo-facebook" />
              </a>
              <a href="https://twitter.com/login?lang=en">
                <i className="ion-logo-twitter" />
              </a>
              <a href="https://www.linkedin.com/">
                <i className="ion-logo-linkedin" />
              </a>
              <a href="https://www.instagram.com/">
                <i className="ion-logo-instagram" />
              </a>
              <a href="https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                <i className="ion-logo-googleplus" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 footer-newsletter">
            <h4>Subscription</h4>
            <p>
              With Our Skills Put Together, You Get An Ensemble Capable Of Doing
              Anything And Everything Your Brand Needs. Subscribe Here To Get
              Our Latest Updates.
            </p>
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row align-items-center">
        <div
          className="col-md-6 copyright"
          style={{ color: "#fff", fontSize: "1.3rem" }}
        >
          Copyright © 2021 IT Company Website. All Rights Reserved.
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default Footer