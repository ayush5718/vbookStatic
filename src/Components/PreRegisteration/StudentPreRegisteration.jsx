import React, { useState } from "react";
import "./student.css";
import axios from "axios";

const StudentPreRegisteration = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institute_name: "",
    highest_qualification: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // console.log(formData);
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://vbookbackend.onrender.com/pre-register/register",
        formData
      );
      console.log("Form submitted successfully!", response.data);
      setSubmitted(true);
      // You can add further logic here after successful form submission
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {/* <section id="home" class="registeration-home">
        <h1>
          {" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Register<span className="text-white lowercase"></span>{" "}
          </span>
          Yourself
        </h1>
        <h2>To get a free high qualified V-books.</h2>
      </section> */}

      <body class="bg-white text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto mt-[10vh]">
        <h1 className="md:text-6xl text-gray-800 font-bold md:text-center text-[20px] mb-2">
          <span className="shadow-md py-3 px-4 shadow-gray-100">
            {" "}
            Student Registration Form
          </span>
        </h1>
        <main class="flex-1 md:p-0 lg:pt-8 lg:px-8 md:ml-24 flex flex-col">
          <section class="bg-cream-lighter p-4 shadow ml-[2vh] mr-[5vh]">
            <div class="md:flex">
              <h2 class="md:w-1/3 uppercase tracking-wide text-3xl font-bold mb-6">
                registration Form
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div class="md:flex mb-8">
                <div class="md:flex-1 mb-4">
                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-3xl font-medium mb-[2vh]">
                      Name
                    </label>
                    <input
                      class="w-full text-3xl shadow-inner p-4 border-0"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-3xl font-medium mb-[2vh]">
                      Institute Name
                    </label>
                    <input
                      class="w-full text-3xl shadow-inner p-4 border-0"
                      type="text"
                      name="institute_name"
                      placeholder="Your Institute Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-3xl font-medium mb-[2vh]">
                      Highest Qualification
                    </label>
                    <input
                      class="w-full text-3xl shadow-inner p-4 border-0"
                      type="text"
                      name="highest_qualification"
                      placeholder="Your Highest Qualification"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-3xl font-medium mb-[2vh]">
                      Phone Number
                    </label>
                    <input
                      class="w-full text-3xl shadow-inner p-4 border-0"
                      type="number"
                      name="phone"
                      placeholder="Your Phone Number"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-3xl font-medium mb-[2vh]">
                      E-mail
                    </label>
                    <input
                      class="w-full text-3xl shadow-inner p-4 border-0"
                      type="email"
                      name="email"
                      placeholder="Your E-mail"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-3xl font-medium mb-[2vh]">
                      Date of birth
                    </label>
                    <input
                      class="w-full text-3xl shadow-inner p-4 border-0"
                      type="date"
                      name="dob"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    {loading ? (
                      <div className="loader"></div>
                    ) : (
                      <button
                        type="submit"
                        className={`w-fit rounded border text-3xl border-primary bg-primary p-3 text-white transition hover:bg-opacity-90 ${
                          submitted ? "submitted" : ""
                        }`}
                      >
                        {submitted ? "Submitted" : "Submit"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </section>
        </main>
      </body>
    </>
  );
};

export default StudentPreRegisteration;
