import React, { Fragment, useState, useEffect, useRef } from "react";
// import Swiper from "swiper/react";
// import Swiper, { SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper from "swiper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import testimonial1 from "/src/assets/images/testimonial-1.jpg";
// import testimonial2 from "/src/assets/images/testimonial-2.jpg";
// import testimonial3 from "/src/assets/images/testimonial-3.jpg";
// import testimonial4 from "/src/assets/images/testimonial-4.jpg";
// import testimonial5 from "/src/assets/images/testimonial-5.jpg";
import "swiper/css";
import "swiper/css/effect-creative";

import "bootstrap/dist/css/bootstrap.min.css";
import teacher1 from "/src/assets/images/teacher4.gif";
import teacher2 from "/src/assets/images/teacher2.gif";
import teacher3 from "/src/assets/images/teacher3.gif";
import teacher4 from "/src/assets/images/whatisVbook2.gif";
import { NavLink } from "react-router-dom";
// importing images
import bb from "./images/bb.png";
import inspire from "./images/inspire.png";
import trophy from "./images/trophy.png";

// import getstarted1 from "/src/assets/images/planyourbook.png";

import "./Teacher.css";
// import NewPage from "../Gaurav/NewPage";
// import Footer from '../Footer/Footer';

const Teacher = () => {
  // const [showModal, setShowModal] = useState(false);
  // const data = [
  //   {
  //     name: `John Morgan`,
  //     // img: testimonial1,
  //     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  //   },
  //   {
  //     name: `Ellie Anderson`,
  //     // img: testimonial2,
  //     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  //   },
  //   {
  //     name: `Nia Adebayo`,
  //     img: testimonial3,
  //     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  //   },
  //   {
  //     name: `Rigo Louie`,
  //     img: testimonial4,
  //     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  //   },
  //   {
  //     name: `Mia Williams`,
  //     img: testimonial5,
  //     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  //   },
  // ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleTitleClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand clicked item
    }
  };

  return (
    <Fragment>
      {/* get started section starts */}

      <section id="home" class="teacher-home ">
        <h1 className="text-white lg"> Become a Tutor</h1>
        <button className=" px-10 py-8 text-2xl mt-5 bg-[#01adef] rounded text-white font-bold">
          <NavLink to="/teacherRegisteration">Get Started</NavLink>
        </button>
      </section>

      {/* </div> */}
      {/* get started section ends */}

      {/* card section starts */}

      {/* card section ends */}

      {/* reason to start section starts from here  */}
      <div className="container p-5 border-b-2 mb-8">
        <div className="bg-white p-8 flex flex-col items-center">
          <div className="flex justify-center">
            <p className="text-5xl font-semibold">Reasons to Start</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-8 ">
            <div className="flex flex-col items-center fade-in w-[400px]">
              <img className="w-[22%] md:w-[15%]" src={bb} alt="" />
              <p className="font-semibold text-3xl mt-4">Teach your way</p>
              <p className="text-gray-600 mt-2 text-center text-2xl">
                Publish the course you want, in the way you want, and always
                have control of your own content.
              </p>
            </div>
            <div className="flex flex-col items-center fade-in w-[400px]">
              <img className="w-[20%] md:w-[15%]" src={inspire} alt="" />
              <p className="font-semibold text-3xl mt-4">Inspire learners</p>
              <p className="text-gray-600 mt-2 text-center text-2xl">
                Teach what you know and help learners explore their interests,
                gain new skills, and advance their careers.
              </p>
            </div>
            <div className="flex flex-col items-center fade-in w-[400px]">
              <img className="w-[20%] md:w-[15%]" src={trophy} alt="" />
              <p className="font-semibold text-3xl mt-4">Get rewarded</p>
              <p className="text-gray-600 mt-2 text-center text-2xl">
                Expand your professional network, build your expertise, and earn
                money on each paid enrollment.
              </p>
            </div>
          </div>
        </div>
        {/* reason to starts section ends here */}

        {/* dropdown starts from here  */}
        {/* dropdown ends here  */}

        <br />
        {/* <Footer /> */}
      </div>
      <MulitpleFeatureSection />
      {/* <NewPage /> */}

      <section class="testimonial-section m-[50px] border-b-2 border-t-2 p-5">
        <div class="testimonials sm:w-[300px] lg:w-[1100px]">
          <Slider {...settings}>
            <div class="testimonial">
              <p>
                “ strategy and they have helped us so much in this point. They
                have been very professional and honest with their proposals.
                Highly recommended.”
              </p>
              <img src="https://w.inboundlabs.co/hubfs/lital-headshot.png?t=1516719436914" />
              <div class="details">
                <span>SERGIO GAZEAU</span>
                <span>Company Name Digital Marketing Manager.</span>
              </div>
            </div>

            <div class="testimonial">
              <p>
                “ strategy and they have helped us so much in this point. They
                have been very professional and honest with their proposals.
                Highly recommended.”
              </p>
              <img src="https://w.inboundlabs.co/hubfs/T024FNRMZ-U053S4LT1-38a6c5d03ba7-72.jpg?t=1516719436914" />
              <div class="details">
                <span>SERGIO GAZEAU</span>
                <span>Company Name Digital Marketing Manager.</span>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section class="bg-gray-200 mb-8 h-[40vh] flex justify-center items-center">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-20 lg:px-6">
          <div class="max-w-screen-sm mx-auto text-center ">
            <h2 class="mb-4 font-extrabold leading-tight tracking-tight text-gray-900 dark:text-black text-4xl">
              Become a Tutor
            </h2>
            <p class="mb-[50px] font-light text-black dark:text-gray-400 text-4xl">
              Become the tutor of world first complete book.
            </p>
            <a
              href="#"
              class="text-white bg-[#01adef] hover:bg-[#01adef] focus:ring-4 focus:ring-[#01adef] font-bold rounded-lg text-2xl px-10 py-8  mr-8 bg-[#01adef] dark:hover:bg-[#01adef] focus:outline-none text-2xl"
            >
              <NavLink to="/teacherRegisteration">GET STARTED</NavLink>
            </a>
          </div>
        </div>
      </section>

      {/* testinomial teacher */}
    </Fragment>
  );
};

//  code for how to get started

const MulitpleFeatureSection = () => {
  const [featureOpen, setFeatureOpen] = useState(1);

  return (
    <>
      <h1 className="flex justify-center text-8xl mb-5 text-center font-bold text-gray-700">
        <span className="border-b-4 border-blue-400">
          How to Become a Tutor
        </span>
      </h1>
      <div className=" p-4 space-x-4 flex justify-center ">
        <ul
          className="-mb-0.5 flex justify-center space-x-6 text-black lg:gap-[50px] lg:flex-row sm:flex-col"
          aria-label="Tabs"
          role="tablist"
        >
          <TabBtn
            text={"plan your book content"}
            activeNumber={1}
            featureOpen={featureOpen}
            setFeatureOpen={setFeatureOpen}
          />
          <TabBtn
            text={"Record your audio and video"}
            activeNumber={2}
            featureOpen={featureOpen}
            setFeatureOpen={setFeatureOpen}
          />
          <TabBtn
            text={"Create your V-book"}
            activeNumber={3}
            featureOpen={featureOpen}
            setFeatureOpen={setFeatureOpen}
          />
          <TabBtn
            text={"Launch your V-book"}
            activeNumber={4}
            featureOpen={featureOpen}
            setFeatureOpen={setFeatureOpen}
          />
        </ul>
      </div>
      {featureOpen === 1 && (
        <FeatureSection
          text={"the first step "}
          image={teacher1}
          desc={
            "Choose a Book Title That Fits Your Domain, Plan Its Content, Conduct Comprehensive Research, and Divide Chapters Into Topics. Also, Find the Necessary Resources Required for Creating Books."
          }
          desc2={
            "This is another para like udemy ooking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their defa"
          }
        />
      )}
      {featureOpen === 2 && (
        <FeatureSection
          text={"the second step"}
          image={teacher2}
          desc={
            "Now, we are going to record video and audio explanations for each topic. You need to preplan your lecture content and aim to keep the lecture duration short to prevent students from getting bored. Your lecture must be interactive. You can follow basic tutorials for teachers to make your lecture interactive"
          }
          desc2={
            "This is another para like udemy hich don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
          }
        />
      )}
      {featureOpen === 3 && (
        <FeatureSection
          text={"the third step"}
          image={teacher4}
          desc={
            "Now it's time to create your book. Everything is ready. We need to write the content of the book and upload the audio and video of each topic using V-Books Creator tools. The content should be written in simple language and formatted to resemble handwritten notes"
          }
          desc2={
            "This is another para like udemy ages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even  "
          }
        />
      )}
      {featureOpen === 4 && (
        <FeatureSection
          text={"the fourth step"}
          image={teacher3}
          desc={
            "Now you are just one click away from publishing your book. After completing the book, you need to submit it. You can now publish your book by adding price details and providing information about the book, as well as any offers available for students."
          }
          desc2={
            "This is another para like udemy  look even slightly believable. I"
          }
        />
      )}
    </>
  );
};

const TabBtn = ({ text, featureOpen, activeNumber, setFeatureOpen }) => {
  return (
    <li>
      <button
        onClick={() => {
          setFeatureOpen(activeNumber);
        }}
        type="button"
        className={`hs-tab-active:font-semibold hs-tab-active:text-bold hs-tab-active:border-blue-600 hs-tab-active:text-red-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap  hover:text-blue-600 focus:outline-none focus:text-blue-600 focus:border-b-black disabled:opacity-50 disabled:pointer-events-none  dark:hover:text-blue-500 active lg:text-4xl sm:text-xl  ${
          featureOpen === activeNumber ? "" : ""
        }`}
        id="horizontal-alignment-item-1"
        data-hs-tab="#horizontal-alignment-1"
        aria-controls="horizontal-alignment-1"
        role="tab"
      >
        {text}
      </button>
    </li>
  );
};
export function FeatureSection({ text, image, desc, desc2 }) {
  return (
    <>
      <main className="w-full h-full  ">
        <section className="relative pt-10 xl:pt-14">
          <div className="mx-auto lg:max-w-[103rem] w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
            <div className="mx-auto text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
              <h1 className="text-indigo-950 text-black text-4xl/snug sm:text-6xl/tight lg:text-5xl/tight xl:text-6xl/tight font-semibold text text-left">
                {text}{" "}
                {/* <span className="bg-indigo-50 text-blue-700 dark:text-indigo-300 inline-block  border-indigo-600 px-3">
                  Digital Agency
                </span> */}
              </h1>
              <p className="mt-10 text-black dark:text-gray-300 lg:text-4xl max-w-2xl lg:max-w-none mx-auto text-left ">
                {desc}
              </p>
              <p className="mt-10 text-black dark:text-gray-300 lg:text-2xl max-w-2xl lg:max-w-none mx-auto text-left hidden">
                {desc2}
              </p>
              {/* <div className="mt-10 flex gap-4 justify-center lg:justify-start flex-wrap">
                <a
                  href="#"
                  className="relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition active:before:bg-indigo-700 text-white hover:before:bg-indigo-800 before:bg-indigo-600 hover:before:scale-105"
                >
                  <span className="relative">{text}</span>
                </a>
                <a
                  href="#"
                  className="relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition before:bg-gray-100 dark:before:bg-gray-900 text-indigo-600 dark:text-white hover:before:scale-105"
                >
                  <span className="relative">{text}</span>
                </a>
              </div> */}
            </div>
            <div className="flex flex-1  items-center lg:w-1/2 relative max-w-3xl mx-auto lg:max-w-none">
              <img
                src={image}
                alt="happy team"
                width={1850}
                height="auto"
                className="lg:absolute w-full lg:inset-x-0 "
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Teacher;
