import React from "react";
import "./ourteam.css";

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
          <h1 className="text-blue-800">
            {" "}
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Me<span className="text-blue-800 lowercase">et</span>{" "}
            </span>{" "}
            Our V-book Team
          </h1>
          <h2>Lorem ipsum dolor sit.</h2>
        </section>
        {/* Page Container */}
        {/*teams  */}
        <section className="hero teams-section">
          <div className="card-1">
            <h1 className="card-1-heading">Vaibhav Patel</h1>
            <p className="card-1-desc text-black">
              Où professionalisme s’allie avec passion. Depuis plus de 5 ans
              maintenant, j’exerce mon métier avec la passion qui m’anime :
              capturer l’essence de chaque instant.
            </p>
            <a className="cta" href="#">
              CONTACTEZ-MOI
            </a>
          </div>
          <img
            src="https://silkroad007.github.io/Images/robbie-lens.png"
            alt=""
          />
        </section>
        <section className="hero teams-section">
          <img
            src="https://silkroad007.github.io/Images/robbie-lens.png"
            alt=""
          />
          <div className="card-1">
            <h1 className="card-1-heading">Vaibhav Patel</h1>
            <p className="card-1-desc text-black">
              Où professionalisme s’allie avec passion. Depuis plus de 5 ans
              maintenant, j’exerce mon métier avec la passion qui m’anime :
              capturer l’essence de chaque instant.
            </p>
            <a className="cta" href="#">
              CONTACTEZ-MOI
            </a>
          </div>
        </section>
      </>
    </>
  );
};

export default OurTeam;
