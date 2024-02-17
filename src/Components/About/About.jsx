// export default About;
import React from "react";
import { Routes } from "react-router-dom";
import about1 from "/src/assets/images/about1.png";
import about2 from "/src/assets/images/aboutUs2.png";
import about3 from "/src/assets/images/aboutus3.png";
import "./About.css";
const About = () => {
  return (
    <>
      <>
        <section id="home" class="about-home relative">
          <div className="flex justify-center items-center">
            <h1 className="absolute z-50 md:text-5xl text-white text-5xl ">
              <span
                style={{ textShadow: "2px 5px 5px #000" }}
                className="tracking-widest		"
              >
                About Us
              </span>
            </h1>
            <img
              src="/src/assets/images/aboutUs.jpg"
              alt=""
              className=" md:w-full md:h-[508px] w-full blur-[1px]	"
            />
            {/* <h1 className="text-8xl text-white font-bold"> About Us</h1> */}
          </div>
        </section>
        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img
                  src={about1}
                  alt="image"
                  loading="lazy"
                  width=""
                  height=""
                  className="about2-img"
                />
              </div>
              <div className="md:7/12 lg:w-6/12 text-2xl w-[267px] mx-auto">
                <h2 className="text-4xl text-gray-900 font-bold md:text-7xl">
                  How V-book initiated ?
                </h2>
                <p className="mt-6 text-gray-600 md:text-3xl">
                  V-Book is the brainchild of our founder, Vaibhav, who
                  envisioned a solution to a common problem faced by every
                  student during their learning journey with books. Not only did
                  he identify the problem, but he also conceived a solution: a
                  comprehensive book that integrates text, audio, and visual
                  explanations, all at a minimal cost.!
                </p>
                <p className="mt-4 text-gray-600 hidden">
                  {" "}
                  Nobis minus voluptatibus pariatur dignissimos libero quaerat
                  iure expedita at? Asperiores nemo possimus nesciunt dicta
                  veniam aspernatur quam mollitia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative   flex items-center  n justify-center overflow-hidden z-50 border-t-2 border-blue-500 ">
          <div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="flex flex-col items-center justify-between lg:flex-row py-16">
              <div className=" relative ">
                <div className=" absolute top-0 -left-48 z-0  opacity-50 ">
                  {/* <img
                    src="https://placeholder/400*400"
                    className="w-36 z-0  h-full    object-fill fill-y text-y   "
                  /> */}
                </div>
                <div className="lg:max-w-xl lg:pr-5 relative z-40">
                  <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug hidden">
                    We make you look
                    <span className="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4 animate_animated animate_flash">
                      different
                    </span>
                  </h2>
                  <p className="text-2xl text-gray-700 ">
                    <ul className="list-disc p-2 flex flex-col gap-4 md:w-[600px] w-[267px] md:text-3xl">
                      <li>
                        We believe that everyone has something valuable to
                        teach, regardless of their background or expertise
                      </li>
                      <li>
                        This realization led to another breakthrough solution: a
                        platform where individuals can share their knowledge and
                        expertise with others in their domain.
                      </li>
                      <li>
                        No professional degree is required to teach; even
                        students can impart knowledge in their areas of
                        expertise, helping others to grow.
                      </li>
                      <li>
                        These two solutions collectively gave rise to a platform
                        where everyone can both teach and learn from others.
                        This platform is known as V-Book (Voice Book)
                      </li>
                      <li className="hidden">
                        This is the fifth point Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Sed, nemo.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="relative  lg:ml-32 lg:block lg:w-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 17l-4 4m0 0l-4-4m4 4V3"
                  />
                </svg>
                <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                  <img src={about2} className="about2-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 bg-white border-t-2 border-orange-600">
          <h1 className="md:text-8xl text-center font-bold text-6xl mb-8">
            Why
            <span className="lowercase">
              {" "}
              we are
              <span className="md:border-b-8 md:border-orange-600  border-orange-600 lowercase">
                {" "}
                different{" "}
              </span>
              from others
            </span>
          </h1>
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img
                  src={about3}
                  alt="image"
                  loading="lazy"
                  width=""
                  height=""
                  className="about-3-img"
                />
              </div>
              <div className="md:7/12 lg:w-6/12 text-2xl w-[300px] mx-auto">
                <ul className="list-disc p-4 flex flex-col gap-4 md:w-[700px] w-[267px] md:text-3xl tracking-widest md:mt-8">
                  <li>
                    In recent decades, there have been numerous transformations
                    in the world of books, yet few have focused on addressing
                    the genuine struggles faced by students. What students truly
                    need is a comprehensive book that elucidates concepts
                    clearly without the need for additional assistance.
                  </li>
                  <li>
                    Often, students are required to purchase entire courses,
                    which can be prohibitively expensive, even though they may
                    only require certain modules from the book. However, this
                    issue is addressed through the introduction of chapterwise
                    V-books.
                  </li>
                  <li>
                    Every teacher aspires to pen their own book, but many are
                    unable to do so due to a lack of resources. With V-books,
                    teachers can easily create and publish their own books,
                    solving this dilemma effectively.
                  </li>
                  <li>
                    This is the fourth point Lorem ipsum dolor, sit amet
                    consectetur adipisicing.
                  </li>
                  <li>
                    This is the fifth point Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Sed, nemo.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default About;
