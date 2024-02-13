import React from "react";
import "./Services.css";
import services1 from "/src/assets/images/whatisVbook.gif";
import services2 from "/src/assets/images/whatisVbook2.gif";
import services3 from "/src/assets/images/whatisVbook3.gif";

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

        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:7/12 lg:w-6/12 text-2xl">
                <h2 className="text-4xl text-gray-900 font-bold md:text-7xl">
                  what is Lorem ipsum dolor sit amet consectetur ?
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
              <div className="md:5/12 lg:w-5/12">
                <img
                  src={services2}
                  alt="image"
                  loading="lazy"
                  width=""
                  height=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img
                  src={services3}
                  alt="image"
                  loading="lazy"
                  width=""
                  height=""
                />
              </div>
              <div className="md:7/12 lg:w-6/12 text-2xl">
                <h2 className="text-4xl text-gray-900 font-bold md:text-7xl">
                  what is Lorem ipsum dolor ?
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
      </main>
    </>
  );
};

export default Services;
