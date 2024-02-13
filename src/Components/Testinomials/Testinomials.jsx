import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from "/src/assets/images/testimonial-1.jpg";
import testimonial2 from "/src/assets/images/testimonial-2.jpg";
import testimonial3 from "/src/assets/images/testimonial-3.jpg";
import testimonial4 from "/src/assets/images/testimonial-4.jpg";
import testimonial5 from "/src/assets/images/testimonial-5.jpg";
import "./testinomials.css";

function Testinomials() {
  return (
    <>
      <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm border-b-2 border-black">
            <h2 class="mb-4 text-4xl lg:text-6xl tracking-tight font-extrabold text-gray-900 ">
              Testimonials
            </h2>
            <p class="mb-8 font-light text-gray-500 lg:text-4xl lg:mb-16 sm:text-xl dark:text-gray-400">
              what some people say about us
            </p>
          </div>
          <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-white dark:border-gray-700">
              <figcaption class="flex justify-center items-center space-x-3">
                <img
                  class="lg:w-2/12 rounded-full w-3/12"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div class="space-y-0.5 font-medium text-black lg:text-2xl">
                  <div>Bonnie Green</div>
                  <div class="text-sm font-light text-black lg:text-xl">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
              <blockquote class="mx-auto mb-8 max-w-2xl text-black text-2xl">
                <p class="my-4">
                  "I recently got my hands on Flowbite Pro, and holy crap, I'm
                  speechless with how easy this was to integrate within my
                  application. Most templates are a pain, code is scattered, and
                  near impossible to theme.
                </p>
              </blockquote>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-white dark:border-gray-700">
              <figcaption class="flex justify-center items-center space-x-3">
                <img
                  class="lg:w-2/12 rounded-full w-3/12"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  alt="profile picture"
                />
                <div class="space-y-0.5 font-medium text-black text-left lg:text-2xl">
                  <div>Roberta Casas</div>
                  <div class="text-sm font-light text-black lg:text-xl">
                    Lead designer at Dropbox
                  </div>
                </div>
              </figcaption>
              <blockquote class="mx-auto mb-8 max-w-2xl text-black text-2xl">
                <p class="my-4">
                  "FlowBite provides a robust set of design tokens and
                  components based on the popular Tailwind CSS framework. From
                  the most used UI components like forms and navigation bars to
                  the whole app screens
                </p>
              </blockquote>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-white dark:border-gray-700">
              <figcaption class="flex justify-center items-center space-x-3">
                <img
                  class="lg:w-2/12 rounded-full w-3/12"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="profile picture"
                />
                <div class="space-y-0.5 font-medium dark:text-black text-left lg:text-2xl">
                  <div>Jese Leos</div>
                  <div class="text-sm font-light text-black text-black lg:text-xl">
                    Software Engineer at Facebook
                  </div>
                </div>
              </figcaption>
              <blockquote class="mx-auto mb-8 max-w-2xl text-black text-2xl">
                <p class="my-4">
                  "As someone who mainly designs in the browser, I've been a
                  casual user of Figma, but as soon as I saw and started playing
                  with FlowBite my mind was 🤯.
                </p>
              </blockquote>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-white dark:border-gray-700">
              <figcaption class="flex justify-center items-center space-x-3">
                <img
                  class="lg:w-2/12 rounded-full w-3/12"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                  alt="profile picture"
                />
                <div class="space-y-0.5 font-medium text-black text-left lg:text-2xl">
                  <div>Joseph McFall</div>
                  <div class="text-sm font-light text-black dark:text-gray-400 lg:text-xl">
                    CTO at Google
                  </div>
                </div>
              </figcaption>
              <blockquote class="mx-auto mb-8 max-w-2xl text-black dark:text-gray-400 text-2xl">
                <p class="my-4">
                  "This is a very complex and beautiful set of elements. Under
                  the hood it comes with the best things from 2 different
                  worlds: Figma and Tailwind.
                </p>
              </blockquote>
            </figure>
          </div>
          {/* <div class="text-center">
            <a
              href="#"
              class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Show more...
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Testinomials;
