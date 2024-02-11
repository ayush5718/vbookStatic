import React from "react";
import "./ourteam.css";
import vaibhav from "/src/assets/images/vaibhav.png";
import shubhashish from "/src/assets/images/shubhashish.png";
import bhavesh from "/src/assets/images/bhavesh.png";
import nilanjan from "/src/assets/images/nilanjan.png";
import nawlesh from "/src/assets/images/nawlesh.png";
import aayush from "/src/assets/images/aayush.png";
const OurTeam = () => {
  return (
    <>
      {/* <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  /> */}
      {/* <section className="team" style={{ marginTop: "7rem" }}>
    <h1 className="heading" style={{ marginTop: "-1.5rem" }} id="team">
      our team
    </h1>
    <p />
    <div className="row">
      <div className="card">
        <div className="image flex justify-center">
          <img
            src="/src/assets/images/vaibhav.jpg"
            alt="Team member 1"
            className=''
          />
        </div>
        <div className="info">
          <h3>Vaibhav Patel</h3>
          <span>Founder</span>
          <div className="icons">
            <a href="https://www.facebook.com/" className="fab fa-facebook-f" />
            <a href="https://twitter.com/login" className="fab fa-twitter" />
            <a href="https://github.com/nbhattacharya08" className="fab fa-github" />
            <a href="https://www.linkedin.com/" className="fab fa-linkedin" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="card">
        <div className="image flex justify-center">
          <img
            src="/src/assets/images/shubhashish.jpg"
            alt="Team member 1"
          />
        </div>
        <div className="info">
          <h3>Shubhashish Halder</h3>
          <span>Co-Founder</span>
          <div className="icons">
            <a href="https://www.facebook.com/" className="fab fa-facebook-f" />
            <a href="https://twitter.com/login" className="fab fa-twitter" />
            <a href="https://github.com/nbhattacharya08" className="fab fa-github" />
            <a href="https://www.linkedin.com/in/subhasish-halder-173a86201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className="fab fa-linkedin" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="card">
        <div className="image flex justify-center">
          <img
            src="/src/assets/images/shubhashish.jpg"
            alt="Team member 1"
          />
        </div>
        <div className="info">
          <h3>Bhavesh kumar</h3>
          <span>Tech Lead</span>
          <div className="icons">
            <a href="https://www.facebook.com/" className="fab fa-facebook-f" />
            <a href="https://twitter.com/login" className="fab fa-twitter" />
            <a href="https://github.com/nbhattacharya08" className="fab fa-github" />
            <a href="https://www.linkedin.com/" className="fab fa-linkedin" />
          </div>
        </div>
      </div>
    </div>
    
    <div className="row">
      <div className="card">
        <div className="image flex justify-center">
          <img
            src="/src/assets/images/nilanjan.jpg"
            alt="Team member 1"
          />
        </div>
        <div className="info">
          <h3>Nilanjan Bhattacharya</h3>
          <span>Backend Developer</span>
          <div className="icons">
            <a href="https://www.facebook.com/" className="fab fa-facebook-f" />
            <a href="https://twitter.com/login" className="fab fa-twitter" />
            <a href="https://github.com/nbhattacharya08" className="fab fa-github" />
            <a href="https://www.linkedin.com/in/nilanjan-bhattacharya-139539229/" className="fab fa-linkedin" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="card">
        <div className="image flex justify-center">
          <img
            src="/src/assets/images/nawlesh.jpg"
            alt="Team member 1"
          />
        </div>
        <div className="info">
          <h3>Nawlesh Nand</h3>
          <span>Full-stack Developer</span>
          <div className="icons">
            <a href="https://www.facebook.com/" className="fab fa-facebook-f" />
            <a href="https://twitter.com/login" className="fab fa-twitter" />
            <a href="https://github.com/nbhattacharya08" className="fab fa-github" />
            <a href="https://www.linkedin.com/" className="fab fa-linkedin" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="card">
        <div className="image flex justify-center">
          <img
            src="/src/assets/images/aayush (2).png"
            alt="Team member 1"
          />
        </div>
        <div className="info">
          <h3>Aayush Kumar</h3>
          <span>Full-stack Developer</span>
          <div className="icons">
            <a href="https://www.facebook.com/" className="fab fa-facebook-f" />
            <a href="https://twitter.com/login" className="fab fa-twitter" />
            <a href="https://github.com/nbhattacharya08" className="fab fa-github" />
            <a href="https://www.linkedin.com/" className="fab fa-linkedin" />
          </div>
        </div>
      </div>
    </div>
  </section> */}

      {/* <!-- MDI Icons --> */}
      <>
        {/* MDI Icons */}

        <link
          rel="stylesheet"
          href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
        />
        <section id="home" class="home">
          <h1>
            {" "}
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Me<span className="text-white lowercase">et</span>{" "}
            </span>{" "}
            Our V-book Team
          </h1>
          <h2>Lorem ipsum dolor sit.</h2>
        </section>
        {/* Page Container */}
        <div className="flex items-center justify-center min-h-screen bg-white py-48">
          <div className="flex flex-col">
            {/* Notes */}
            <span className="text-center font-bold my-10 opacity-30">
              Lorem ipsum dolor sit amet.
            </span>
            <div className="flex flex-col mt-8">
              {/* Meet the Team */}
              <div className="container max-w-[130rem] px-4 ">
                {/* Section Header */}
                <div className="flex flex-wrap justify-center text-center mb-24">
                  <div className="w-full lg:w-6/12 px-4">
                    {/* Header */}
                    <h1 className="text-[#F48C08] text-8xl font-bold mb-8">
                      Meet the Team
                    </h1>
                    {/* Description */}
                    <p className="text-gray-700 text-lg font-light">
                      With over 100 years of combined experience, we've got a
                      well-seasoned team at the helm.
                    </p>
                  </div>
                </div>
                {/* Team Members */}
                <div className="flex flex-wrap justify-center gap-[100px]">
                  {/* Member #1 */}
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col w-[300px]">
                      {/* Avatar */}
                      <a href="#" className="mx-auto">
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 h-[300px]"
                          src={vaibhav}
                        />
                      </a>
                      {/* Details */}
                      <div className="text-center mt-6">
                        {/* Name */}
                        <h1 className="text-gray-900 text-2xl font-bold mb-1">
                          Vaibhav Patel
                        </h1>
                        {/* Title */}
                        <div className="text-gray-700 font-light mb-2 text-xl">
                          Founder &amp; Specialist
                        </div>
                        {/* Social Icons */}
                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                          transition-opacity duration-300 gap-3"
                        >
                          {/* Linkedin */}
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                          >
                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2 text-[30px]" />
                          </a>
                          {/* Twitter */}
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                          >
                            <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2 text-[30px]" />
                          </a>
                          {/* Instagram */}
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                          >
                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2 text-[30px]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Member #2 */}
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col w-[300px]">
                      {/* Avatar */}
                      <a href="#" className="mx-auto">
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 h-[300px]"
                          src={shubhashish}
                        />
                      </a>
                      {/* Details */}
                      <div className="text-center mt-6">
                        {/* Name */}
                        <h1 className="text-gray-900 text-2xl font-bold mb-1">
                          Shubhashish Halder
                        </h1>
                        {/* Title */}
                        <div className="text-gray-700 font-light mb-2 text-xl">
                          Co-Founder &amp; M. Specialist
                        </div>
                        {/* Social Icons */}
                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                          transition-opacity duration-300 gap-3"
                        >
                          {/* Linkedin */}
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                          >
                            <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2 text-[30px]" />
                          </a>
                          {/* Twitter */}
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                          >
                            <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2 text-[30px]" />
                          </a>
                          {/* Instagram */}
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                          >
                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2 text-[30px]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Member #3 */}
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col w-[300px]">
                      {/* Avatar */}
                      <a href="#" className="mx-auto">
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 h-[300px]"
                          src={bhavesh}
                        />
                      </a>
                      {/* Details */}
                      <div className="text-center mt-6">
                        {/* Name */}
                        <h1 className="text-gray-900 text-2xl font-bold mb-1">
                          Bhavesh Kumar
                        </h1>
                        {/* Title */}
                        <div className="text-gray-700 font-light mb-2 text-xl">
                          Tech Lead
                        </div>
                        {/* Social Icons */}
                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                          transition-opacity duration-300 gap-3"
                        >
                          {/* Linkedin */}
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                          >
                            <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2 text-[30px]" />
                          </a>
                          {/* Twitter */}
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                          >
                            <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2 text-[30px]" />
                          </a>
                          {/* Instagram */}
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                          >
                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2 text-[30px]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Member #4 */}
                </div>
                <br /> <br />
                <div className="another-section flex flex-wrap justify-center gap-[100px]">
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4 ">
                    <div className="flex flex-col w-[300px]">
                      {/* Avatar */}
                      <a href="#" className="mx-auto">
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 h-[300px]"
                          src={nilanjan}
                        />
                      </a>
                      {/* Details */}
                      <div className="text-center mt-6">
                        {/* Name */}
                        <h1 className="text-gray-900 text-2xl font-bold mb-1">
                          Nilanjan Bhattacharya
                        </h1>
                        {/* Title */}
                        <div className="text-gray-700 font-light mb-2 text-xl">
                          Backend Developer
                        </div>
                        {/* Social Icons */}
                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                          transition-opacity duration-300 gap-3"
                        >
                          {/* Linkedin */}
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                          >
                            <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2 text-[30px]" />
                          </a>
                          {/* Twitter */}
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                          >
                            <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2 text-[30px]" />
                          </a>
                          {/* Instagram */}
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                          >
                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2 text-[30px]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* another team members */}
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col w-[300px]">
                      {/* Avatar */}
                      <a href="#" className="mx-auto">
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 h-[300px]"
                          src={nawlesh}
                        />
                      </a>
                      {/* Details */}
                      <div className="text-center mt-6">
                        {/* Name */}
                        <h1 className="text-gray-900 text-2xl font-bold mb-1">
                          Nawlesh Nand
                        </h1>
                        {/* Title */}
                        <div className="text-gray-700 font-light mb-2 text-xl">
                          Tech Lead
                        </div>
                        {/* Social Icons */}
                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                          transition-opacity duration-300 gap-3"
                        >
                          {/* Linkedin */}
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                          >
                            <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2 text-[30px]" />
                          </a>
                          {/* Twitter */}
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                          >
                            <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2 text-[30px]" />
                          </a>
                          {/* Instagram */}
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                          >
                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2 text-[30px]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* team members  */}
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col w-[300px]">
                      {/* Avatar */}
                      <a href="#" className="mx-auto">
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 h-[300px]"
                          src={aayush}
                        />
                      </a>
                      {/* Details */}
                      <div className="text-center mt-6">
                        {/* Name */}
                        <h1 className="text-gray-900 text-2xl font-bold mb-1">
                          Aayush
                        </h1>
                        {/* Title */}
                        <div className="text-gray-700 font-light mb-2 text-xl">
                          Tech Lead
                        </div>
                        {/* Social Icons */}
                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                          transition-opacity duration-300 gap-3"
                        >
                          {/* Linkedin */}
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                          >
                            <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2 text-[30px]" />
                          </a>
                          {/* Twitter */}
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                          >
                            <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2 text-[30px]" />
                          </a>
                          {/* Instagram */}
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                          >
                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2 text-[30px]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default OurTeam;
