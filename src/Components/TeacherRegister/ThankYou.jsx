import React from "react";
import { NavLink } from "react-router-dom";

import "./thankyou.css";
const ThankYou = () => {
  return (
    <div>
      <div class="wrapper-1">
        <div class="wrapper-2">
          <h1 className="thankyou-heading">Thank you !</h1>
          <p>Thanks you for the registeration </p>
          <p>We will get in touch with you soon </p>
          <button class="go-home">
            {" "}
            <NavLink to="/">go home</NavLink>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
