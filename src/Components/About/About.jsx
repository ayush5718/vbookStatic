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
        <section id="home" class="about-home">
          <h1 className="text-8xl text-white font-bold"> About Us</h1>
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
              <div className="md:7/12 lg:w-6/12 text-2xl w-[300px] mx-auto">
                <h2 className="text-4xl text-gray-900 font-bold md:text-7xl">
                  Nuxt development is carried out by passionate developers
                </h2>
                <p className="mt-6 text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  omnis voluptatem accusantium nemo perspiciatis delectus atque
                  autem! Voluptatum tenetur beatae unde aperiam, repellat
                  expedita consequatur! Officiis id consequatur atque
                  doloremque!
                </p>
                <p className="mt-4 text-gray-600">
                  {" "}
                  Nobis minus voluptatibus pariatur dignissimos libero quaerat
                  iure expedita at? Asperiores nemo possimus nesciunt dicta
                  veniam aspernatur quam mollitia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative   flex items-center  n justify-center overflow-hidden z-50 ">
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
                  <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                    We make you look
                    <span className="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4 animate_animated animate_flash">
                      different
                    </span>
                  </h2>
                  <p className="text-2xl text-gray-700 ">
                    <ul className="list-disc p-2 flex flex-col gap-4 md:w-[400px] w-[300px]">
                      <li>
                        This is the FIrst point Lorem ipsum dolor sit
                        amet.lorem6 Lorem ipsum dolor sit amet consectetur.
                      </li>
                      <li>
                        This is the secobnd point Lorem ipsum dolor, sit amet
                        consectetur adipisicing.
                      </li>
                      <li>
                        This is the third point Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Velit blanditiis tenetur
                        molestias nobis. Amet, iusto. Unde explicabo
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
        <div className="py-16 bg-white border-t-2">
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
                />
              </div>
              <div className="md:7/12 lg:w-6/12 text-2xl w-[300px] mx-auto">
                <h2 className="text-4xl text-gray-900 font-bold md:text-7xl mb-2">
                  This wil be the heading
                </h2>
                <ul className="list-disc p-2 flex flex-col gap-4 md:w-[400px] w-[300px]">
                  <li>
                    This is the FIrst point Lorem ipsum dolor sit amet.lorem6
                    Lorem ipsum dolor sit amet consectetur.
                  </li>
                  <li>
                    This is the secobnd point Lorem ipsum dolor, sit amet
                    consectetur adipisicing.
                  </li>
                  <li>
                    This is the third point Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Velit blanditiis tenetur
                    molestias nobis. Amet, iusto. Unde explicabo
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
