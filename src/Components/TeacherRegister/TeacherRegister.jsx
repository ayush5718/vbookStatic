import { useState } from "react";
// import GoogleIcon from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Register.css";
const TeacherRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
    dob: "",
    phone: "",
    highestDegree: "",
    address: "",
    isTeacher: true,
  });

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };
  return (
    <div className="teacherRegister">
      <section id="home" class="contact-home">
        <h1 className="text-8xl text-white font-bold"> Join Us</h1>
      </section>
      <form className="register_form lg:text-3xl lg:m-10  lg:border-2 border-blue-400 lg:flex lg:flex-col lg:gap-10">
        <input
          placeholder="Enter your Name"
          type="text"
          required
          name="name"
          value={formData.name}
          onChange={handleFormData}
        />
        <input
          placeholder="Email"
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={handleFormData}
        />
        <input
          placeholder="Phone Number"
          type="number"
          required
          name="phone"
          value={formData.phone}
          onChange={handleFormData}
        />
        <input
          placeholder="Whats App Number"
          type="number"
          required
          name="phone"
          value={formData.phone}
          onChange={handleFormData}
        />
        {/* <input
          placeholder="Highest Qualification"
          type="text"
          required
          name="highestDegree"
          value={formData.highestDegree}
          onChange={handleFormData}
        /> */}

        <label htmlFor="qual" value="highest qual border-b-2"></label>
        <select name="qual" id="" className="mt-2 block">
          <option value="">Choose Your Highest Qualification</option>
          <option value="">class 12</option>
          <option value="">Under Graduate</option>
          <option value="">Post Graduate</option>
        </select>
        <hr />
        <br />

        <label htmlFor="dob">Date of birth</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          required
          onChange={handleFormData}
          style={{ marginTop: "0" }}
        />
        <input
          placeholder="Address"
          type="text"
          name="address"
          value={formData.address}
          required
          onChange={handleFormData}
        />
        <input
          placeholder="Password"
          type="password"
          required
          name="password"
          value={formData.password}
          onChange={handleFormData}
        />
        <input
          placeholder="Confrim Password"
          type="password"
          required
          name="cPassword"
          value={formData.cPassword}
          onChange={handleFormData}
        />

        <button className="registerButton">Register as a Teacher</button>
        <div className="register_form_divider">
          <hr />

          <hr />
        </div>
      </form>
    </div>
  );
};

export default TeacherRegister;
