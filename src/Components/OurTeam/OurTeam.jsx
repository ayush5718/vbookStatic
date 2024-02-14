import React from "react";
import { FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import "./ourteam.css";
import Founder from "/src/assets/images/Vaibhav.png";
import CEO from "/src/assets/images/Shubhashish.png";
import Techlead from "/src/assets/images/Bhavesh.png";
import Frontend from "/src/assets/images/Nawlesh.png";
import backend from "/src/assets/images/Nilanjan.png";
import fullStack from "/src/assets/images/Aayush.png";
const OurTeam = () => {
  return (
    <>
      <>
        <section id="home" class="contact-home">
          <h1 className="text-8xl text-white font-bold"> Our Teams</h1>
        </section>
        <section class="bg-white dark:bg-gray-900 lg:mt-[400px]">
          <div class="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
            <div class="grid grid-cols-1  mt-8 xl:mt-16   ">
              {/* <div class="lg:flex flex-col justify-center items-center lg:mr-[80vh] p-4  sm:p-6 rounded-xl lg:width-[100%] lg:h-[60vh]">
                <div className="flex relative">
                  <img
                    class="object-cover w-[400px] h-[400px] mt-[150px]"
                    src={Founder}
                    alt=""
                  />
                  <div className="text-5xl absolute">
                    <a
                      href="#"
                      class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                      aria-label="Linkdin"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="#"
                      class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                      aria-label="Instagram"
                    >
                      <FaInstagramSquare />
                    </a>
                  </div>
                </div>
                <h1 class="mt-4 text-5xl font-bold  capitalize ">
                  Vaibhav Patel
                </h1>

                <p class="mt-2 text-4xl font-bold text-blue-600">Founder</p>

                <div class="lg:flex lg:flex-col lg:mt-[-33vh]  lg:mb-[41vh] lg:ml-[130vh] lg:text-3xl text-3xl w-[300px] lg:w-[300px] md:mt-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsam in nobis cupiditate dicta perspiciatis officiis libero
                    labore aliquam, fuga ad.
                  </p>
                  <div className="flex mt-8 text-6xl">
                    
                  </div>
                </div>
              </div> */}

              {/* <div class="flex flex-col justify-center items-center ml-[80vh] p-4 mt-[8vh]  sm:p-6 rounded-xl width-[100%] h-[60vh]">
                <img
                  class="object-cover w-[400px] rounded-[16%] h-[400px]"
                  src={CEO}
                  alt=""
                />

                <h1 class="mt-4 text-4xl font-bold  capitalize ">
                  Shubhashis Halder
                </h1>

                <p class="mt-2 text-4xl">Co-Founder</p>

                <div class="flex mt-[-33vh] mb-[41vh] mr-[100vh] text-6xl ">
                  <a
                    href="#"
                    class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Github"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="#"
                    class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Linkdin"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="#"
                    class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Instagram"
                  >
                    <FaInstagramSquare />
                  </a>
                </div>
              </div>
              <div class="flex flex-col justify-center items-center mr-[80vh] p-4  sm:p-6 rounded-xl width-[100%] h-[60vh]">
                <img
                  class="object-cover w-[400px]  h-[400px]"
                  src={Techlead}
                  alt=""
                />

                <h1 class="mt-4 text-4xl font-bold  capitalize ">
                  Bhavesh Kumar
                </h1>

                <p class="mt-2 text-4xl ">Tech Lead</p>

                <div class="flex  mt-[-33vh] mb-[41vh] ml-[100vh] text-6xl">
                  <a
                    href="#"
                    class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Github"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="#"
                    class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Linkdin"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="#"
                    class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Instagram"
                  >
                    <FaInstagramSquare />
                  </a>
                </div>
              </div> */}

              <section class="bg-white">
                {/* <div class="h-[32rem] "></div> */}
                <h1 className="lg:text-8xl lg:mb-[200px] text-center font-bold text-gray-800 lg:mt-[-80px]">
                  <span className="border-b-4 border-red-400">
                    Our Team Member
                  </span>
                </h1>
                <div class="container px-6 py-10 mx-auto mt-72 sm:-mt-80 md:-mt-96">
                  <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    <div class="flex flex-col items-center p-4 sm:p-6 rounded-xl">
                      <img
                        class="object-cover w-full rounded-xl aspect-square"
                        src={Founder}
                        alt=""
                      />

                      <h1 class="mt-4 text-4xl font-bold">Vaibhav Patel</h1>

                      <p class="mt-2 text-3xl">Founder </p>

                      <div class="flex mt-3 -mx-2 text-4xl">
                        <a
                          href="#"
                          class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                          aria-label="Github"
                        >
                          <FaGithub />
                        </a>

                        <a
                          href="#"
                          class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                          aria-label="Linkdin"
                        >
                          <FaLinkedin />
                        </a>
                        <a
                          href="#"
                          class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                          aria-label="Instagram"
                        >
                          <FaInstagramSquare />
                        </a>
                      </div>
                    </div>
                    <div class="flex flex-col items-center p-4 sm:p-6 rounded-xl">
                      <img
                        class="object-cover w-full rounded-xl aspect-square"
                        src={CEO}
                        alt=""
                      />

                      <h1 class="mt-4 text-4xl font-bold">
                        Shubhashish Haldar
                      </h1>

                      <p class="mt-2 text-3xl">Co- Founder</p>

                      <div class="flex mt-3 -mx-2 text-4xl">
                        <a
                          href="#"
                          class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                          aria-label="Github"
                        >
                          <FaGithub />
                        </a>

                        <a
                          href="#"
                          class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                          aria-label="Linkdin"
                        >
                          <FaLinkedin />
                        </a>
                        <a
                          href="#"
                          class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                          aria-label="Instagram"
                        >
                          <FaInstagramSquare />
                        </a>
                      </div>
                    </div>

                    <div class="flex flex-col items-center p-4 sm:p-6 rounded-xl">
                      <img
                        class="object-cover w-full rounded-xl aspect-square"
                        src={Techlead}
                        alt=""
                      />

                      <h1 class="mt-4 text-4xl font-bold">Bhavesh Kumar</h1>

                      <p class="mt-2 text-3xl">Tech Lead</p>

                      <div class="flex mt-3 -mx-2 text-4xl">
                        <a
                          href="#"
                          class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                          aria-label="Github"
                        >
                          <FaGithub />
                        </a>

                        <a
                          href="#"
                          class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                          aria-label="Linkdin"
                        >
                          <FaLinkedin />
                        </a>
                        <a
                          href="#"
                          class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                          aria-label="Instagram"
                        >
                          <FaInstagramSquare />
                        </a>
                      </div>
                    </div>

                    <div class="flex flex-col items-center p-4 sm:p-6 rounded-xl">
                      <img
                        class="object-cover w-full rounded-xl aspect-square"
                        src={Frontend}
                        alt=""
                      />

                      <h1 class="mt-4 text-4xl font-bold">Nawlesh Nand</h1>

                      <p class="mt-2 text-3xl">Frontend Developer </p>

                      <div class="flex mt-3 -mx-2 text-4xl">
                        <a
                          href="#"
                          class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                          aria-label="Github"
                        >
                          <FaGithub />
                        </a>

                        <a
                          href="#"
                          class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                          aria-label="Linkdin"
                        >
                          <FaLinkedin />
                        </a>
                        <a
                          href="#"
                          class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                          aria-label="Instagram"
                        >
                          <FaInstagramSquare />
                        </a>
                      </div>
                    </div>

                    <div class="flex flex-col items-center p-4  sm:p-6 rounded-xl ">
                      <img
                        class="object-cover w-full rounded-xl aspect-square"
                        src={backend}
                        alt=""
                      />

                      <h1 class="mt-4 text-4xl font-bold">
                        Nilanjan Bhattacharya
                      </h1>

                      <p class="mt-2 text-3xl">Backend Developer </p>

                      <div class="flex mt-3 -mx-2 text-4xl">
                        <a
                          href="#"
                          class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                          aria-label="Github"
                        >
                          <FaGithub />
                        </a>

                        <a
                          href="#"
                          class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                          aria-label="Linkdin"
                        >
                          <FaLinkedin />
                        </a>
                        <a
                          href="#"
                          class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                          aria-label="Instagram"
                        >
                          <FaInstagramSquare />
                        </a>
                      </div>
                    </div>

                    <div class="flex flex-col items-center p-4  sm:p-6 rounded-xl ">
                      <img
                        class="object-cover w-full rounded-xl aspect-square"
                        src={fullStack}
                        alt=""
                      />

                      <h1 class="mt-4 text-4xl font-bold">Aayush Kumar</h1>

                      <p class="mt-2 text-3xl">Full Stack Developer </p>

                      <div class="flex mt-3 -mx-2 text-4xl">
                        <a
                          href="#"
                          class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                          aria-label="Github"
                        >
                          <FaGithub />
                        </a>

                        <a
                          href="#"
                          class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                          aria-label="Linkdin"
                        >
                          <FaLinkedin />
                        </a>
                        <a
                          href="#"
                          class="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                          aria-label="Instagram"
                        >
                          <FaInstagramSquare />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default OurTeam;
