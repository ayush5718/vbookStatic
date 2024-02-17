import { useState } from "react";
// import GoogleIcon from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";
const TeacherRegister = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp_number: "",
    dob: "",
    highest_qualification: "",
    address: "",
  });

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://vbookbackend.onrender.com/pre-register/register-teacher",
        formData
      );
      console.log("Form submitted successfully!", response.data);
      setSubmitted(true);
    } catch (error) {
      console.log("error submitting", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="teacherRegister">
      <h1 className="md:text-6xl text-gray-800 font-bold md:text-center text-[20px] mb-2 mt-8">
        <span className="shadow-md py-3 px-4 shadow-gray-100">
          {" "}
          Teacher Registration Form
        </span>
      </h1>
      <form
        className="register_form md:text-3xl md:m-10  md:border-2 border-blue-400 md:flex md:flex-col md:gap-10"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Enter your Name"
          type="text"
          required
          name="name"
          value={formData.name}
          onChange={handleFormData}
          className="text-3xl"
        />
        <input
          placeholder="Email"
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={handleFormData}
          className="text-3xl lowercase"
        />
        <input
          placeholder="Phone Number"
          type="number"
          required
          name="phone"
          value={formData.phone}
          onChange={handleFormData}
          className="text-3xl"
        />
        <input
          placeholder="Whats App Number"
          type="number"
          required
          name="whatsapp_number"
          value={formData.whatsapp_number}
          onChange={handleFormData}
          className="text-3xl"
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
        <select
          name="highest_qualification" // Update name to match state key
          value={formData.highest_qualification}
          onChange={handleFormData}
          className="mt-2 block text-3xl"
          required
        >
          <option value="">Choose Your Highest Qualification</option>
          <option value="class 12">Class 12</option>
          <option value="Under Graduate">Under Graduate</option>
          <option value="Post Graduate">Post Graduate</option>
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
          className="text-3xl"
        />
        <input
          placeholder="Address"
          type="text"
          name="address"
          value={formData.address}
          required
          onChange={handleFormData}
          className="text-3xl"
        />

        <div>
          {loading ? (
            <div className="loader"></div>
          ) : (
            <button
              type="submit"
              className={`w-fit rounded border text-3xl border-primary bg-primary p-3 text-white transition hover:bg-opacity-90 
                `}
            >
              <NavLink to="/thankyou">Submit</NavLink>
            </button>
          )}
        </div>
        <div className="register_form_divider">
          <hr />

          <hr />
        </div>
      </form>
    </div>
  );
};

export default TeacherRegister;
