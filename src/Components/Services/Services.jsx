import React from "react";
import "./Services.css";
import services1 from "/src/assets/images/whatisVbook.gif";
import services2 from "/src/assets/images/services3.gif";
import services3 from "/src/assets/images/whatisvbook4.gif";
import { NavLink } from "react-router-dom";
const Services = () => {
  return (
    <>
      {/* <div className="flex flex-col items-center justify-center min-h-screen  font-poppins px-4 lg:px-20">
        <section className="container_services mx-auto py-8 lg:py-12 mt-[10vh]">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-5/12 mb-8">
              <div className="text-blue-400 uppercase font-semibold">
                Who we are
              </div>
              <h2 className="mt-4 mb-6 text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-300">
                We are the large business expert in Europe and Asia
              </h2>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="w-full lg:w-5/12 mb-8">
              <img
                src={services1}
                alt=""
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </section>

        <section className="container_services mx-auto py-8 lg:py-12 mt-[10vh]">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-[50%] lg:w-5/12 mb-8">
              <img
                src={services2}
                alt=""
                className="w-full h-auto rounded-3xl"
              />
            </div>
            <div className="w-full lg:w-5/12 mb-8">
              <div className="text-blue-400 uppercase font-semibold">
                Who we are
              </div>
              <h2 className="mt-4 mb-6 text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-300">
                We are the large business expert in Europe and Asia
              </h2>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>
        <section className="container_services mx-auto py-8 lg:py-12 mt-[10vh]  ">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-5/12 mb-8">
              <div className="text-blue-400 uppercase font-semibold">
                Who we are
              </div>
              <h2 className="mt-4 mb-6 text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-300">
                We are the large business expert in Europe and Asia
              </h2>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="w-full lg:w-6/12 mb-8">
              <img
                src="https://i.postimg.cc/kGjX7T1M/pexels-andrea-piacquadio-3756679.jpg"
                alt="aboutimage"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 right-0 z-10 p-4 bg-white shadow dark:bg-gray-800">
                <p className="text-sm font-semibold">
                  Providing business solutions for 10 years
                </p>
              </div>
            </div>
          </div>
        </section>
      </div> */}
      <div className="flex justify-center">
        <div className="border-[#01ADEF] border-[1px] text-[#01ADEF] hover:bg-[#01ADEF] hover:text-gray-50 cursor-pointer py-[2px] px-[8px] rounded-[2px] md:hidden text-3xl ">
          <h1 className=" p-3  rounded-lg mt-2 ">
            <NavLink>Pre Registeration</NavLink>
          </h1>
        </div>
      </div>
      <main className="p-5">
        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img
                  src={services1}
                  alt="image"
                  loading="lazy"
                  width=""
                  height=""
                />
              </div>
              <div className="md:7/12 lg:w-6/12 text-2xl">
                <h2 className="text-4xl text-gray-900 font-bold md:text-7xl">
                  what is V-book?
                </h2>
                <p className="mt-6 text-gray-600">
                  We are exploring books from various decades, witnessing
                  significant transformations. However, despite these changes,
                  the real problems faced by students in understanding books
                  remain unaddressed. Often, books are perceived as boring and
                  difficult to comprehend without teacher assistance.
                </p>
                <p className="mt-4 text-gray-600">
                  {" "}
                  Introducing V-Books, the solution to all student learning
                  woes. We're revolutionizing books with an advanced version
                  that eliminates the need for additional assistance. V-Books
                  combine textbook content, audiobook.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:7/12 lg:w-6/12 text-2xl">
                <h2 className="text-4xl text-gray-900 font-bold md:text-7xl">
                  A platform for anyone to become a tutor
                </h2>
                <p className="mt-6 text-gray-600">
                  V-Book is also a platform for anyone who wants to teach
                  students but lacks resources. In V-Book, anyone can become a
                  tutor or author, regardless of degrees or higher
                  qualifications. All you need is a good knowledge in any domain
                  and a passion for teaching. You are welcome to join our
                  platform as a tutor.
                </p>
                <p className="mt-4 text-gray-600 hidden">
                  {" "}
                  Nobis minus voluptatibus pariatur dignissimos libero quaerat
                  iure expedita at? Asperiores nemo possimus nesciunt dicta
                  veniam aspernatur quam mollitia.
                </p>
              </div>
              <div className="md:5/12 lg:w-5/12">
                <img
                  src={services3}
                  alt="image"
                  loading="lazy"
                  width=""
                  height=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white border-t-2">
          <h1 className="md:text-8xl mb-8 text-center font-bold text-3xl text-gray-800 hidden">
            Why{" "}
            <span className="md:border-b-8 border-b-2 border-blue-300">
              V-BOOK
            </span>
          </h1>
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img
                  src={services2}
                  alt="image"
                  loading="lazy"
                  width=""
                  height=""
                />
              </div>
              <div className="md:7/12 lg:w-6/12 text-2xl">
                <h2 className="text-4xl text-gray-900 font-bold md:text-7xl">
                  what V-book ?
                </h2>
                <p className="mt-6 text-gray-600">
                  V-BOOK is the world's first book that can speak and provide
                  visualizations of each concept. Previously, there were only
                  textbooks available for academic learning. The audio books,
                  which were also available, were not focused on academic
                  learning; they were simply storytelling books. However, for
                  the first time, there is a book that contains everything a
                  student needs for learning at a minimal price.
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
      </main>
    </>
  );
};

export default Services;
