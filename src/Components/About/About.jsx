// import React from "react";
// import { Routes } from "react-router-dom";
// import about1 from "/src/assets/images/about1.png";
// import about2 from "/src/assets/images/about2.png";
// import "./About.css";
// const About = () => {
//   return (
//     <>
//       {/* <section id="about" className="about">
//     <h1 className="heading">about us</h1>
//     <div className="row">
//       <div className="content">
//         <h3>We make creativity work for your brand!</h3>
//         <p>
//           Ours is a team of creatives that is brainstorming on great ideas,
//           <b> all. the. time.</b>
//           <br />
//           With our skills put together, you get an ensemble capable of doing
//           anything and everything your brand needs.
//         </p>
//         <a href="#">
//           <button className="btn">Read More</button>
//         </a>
//       </div>
//     </div>
//   </section> */}
//       <>
//         <section id="home" class="about-home">
//           <h1>
//             {" "}
//             <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//               About<span className="text-white lowercase"> Us</span>{" "}
//             </span>{" "}
//           </h1>
//           <h2>Lorem ipsum dolor sit.</h2>
//         </section>
//         <div className="py-16 bg-white">
//           <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
//             <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
//               <div className="md:5/12 lg:w-5/12">
//                 <img
//                   src={about1}
//                   alt="image"
//                   loading="lazy"
//                   width=""
//                   height=""
//                 />
//               </div>
//               <div className="md:7/12 lg:w-6/12 text-2xl">
//                 <h2 className="text-4xl text-gray-900 font-bold md:text-7xl">
//                   Nuxt development is carried out by passionate developers
//                 </h2>
//                 <p className="mt-6 text-gray-600">
//                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
//                   omnis voluptatem accusantium nemo perspiciatis delectus atque
//                   autem! Voluptatum tenetur beatae unde aperiam, repellat
//                   expedita consequatur! Officiis id consequatur atque
//                   doloremque!
//                 </p>
//                 <p className="mt-4 text-gray-600">
//                   {" "}
//                   Nobis minus voluptatibus pariatur dignissimos libero quaerat
//                   iure expedita at? Asperiores nemo possimus nesciunt dicta
//                   veniam aspernatur quam mollitia.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white relative   flex items-center  n justify-center overflow-hidden z-50 ">
//           <div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
//             <div className="flex flex-col items-center justify-between lg:flex-row py-16">
//               <div className=" relative ">
//                 <div className=" absolute top-0 -left-48 z-0  opacity-50 ">
//                   <img
//                     src="https://placeholder/400*400"
//                     className="w-36 z-0  h-full    object-fill fill-y text-y   "
//                   />
//                 </div>
//                 <div className="lg:max-w-xl lg:pr-5 relative z-40">
//                   <p className="flex text-sm uppercase text-g1  ">About Us</p>
//                   <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
//                     We make you look
//                     <span className="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4 animate_animated animate_flash">
//                       different
//                     </span>
//                   </h2>
//                   <p className="text-2xl text-gray-700 ">
//                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                     Obcaecati tempore voluptate modi, quod sed repellat ratione
//                     nam aliquam, minima expedita, accusantium doloremque sequi
//                     quidem voluptas.
//                   </p>
//                   <div className="mt-10 flex flex-col items-center md:flex-row">
//                     <a
//                       href="/"
//                       className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-slate-900 p-6 font-medium tracking-wide text-white shadow-md transition duration-300 ease-in-out transform hover:scale-110 hover:rotate-4 focus:outline-none md:mr-4 md:mb-0 md:w-auto shadow-md"
//                     >
//                       View More
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M16 17l-4 4m0 0l-4-4m4 4V3"
//                   />
//                 </svg>
//                 <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
//                   <img src={about2} className="about2-img" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-40    ">
//             About Us
//           </div>
//           <div className=" absolute -bottom-24 left-10 z-0  opacity-10 ">
//             <svg
//               width="800px"
//               height="800px"
//               viewBox="0 0 24 24"
//               className="w-96 z-0  h-full    object-fill fill-gray-300 text-gray-300"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V6ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V9ZM15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V9ZM18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V13ZM6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V15ZM21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V15ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H4Z"
//               />
//             </svg>
//           </div>
//           <div className=" absolute -bottom-0 left-3/4 z-0  opacity-10 ">
//             <svg
//               width="800px"
//               height="800px"
//               viewBox="0 0 256 256"
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-48 z-0  h-full -rotate-90   object-fill fill-red-300 text-red-300"
//             >
//               <path
//                 d="M32 225h12.993A4.004 4.004 0 0 0 49 220.997V138.01c0-4.976.724-5.04 1.614-.16l12.167 66.708c.397 2.177 2.516 3.942 4.713 3.942h8.512a3.937 3.937 0 0 0 3.947-4S79 127.5 80 129s14.488 52.67 14.488 52.67c.559 2.115 2.8 3.83 5.008 3.83h8.008a3.993 3.993 0 0 0 3.996-3.995v-43.506c0-4.97 1.82-5.412 4.079-.965l10.608 20.895c1.001 1.972 3.604 3.571 5.806 3.571h9.514a3.999 3.999 0 0 0 3.993-4.001v-19.49c0-4.975 2.751-6.074 6.155-2.443l6.111 6.518c1.51 1.61 4.528 2.916 6.734 2.916h7c2.21 0 5.567-.855 7.52-1.92l9.46-5.16c1.944-1.06 5.309-1.92 7.524-1.92h23.992a4.002 4.002 0 0 0 4.004-3.992v-7.516a3.996 3.996 0 0 0-4.004-3.992h-23.992c-2.211 0-5.601.823-7.564 1.834l-4.932 2.54c-4.423 2.279-12.028 3.858-16.993 3.527l2.97.198c-4.962-.33-10.942-4.12-13.356-8.467l-11.19-20.14c-1.07-1.929-3.733-3.492-5.939-3.492h-7c-2.21 0-4 1.794-4 4.001v19.49c0 4.975-1.14 5.138-2.542.382l-12.827-43.535c-.625-2.12-2.92-3.838-5.127-3.838h-8.008c-2.207 0-3.916 1.784-3.817 4.005l1.92 42.998c.221 4.969-.489 5.068-1.585.224l-15.13-66.825c-.488-2.155-2.681-3.902-4.878-3.902h-8.512a3.937 3.937 0 0 0-3.947 4s.953 77-.047 75.5-13.937-92.072-13.937-92.072C49.252 34.758 47.21 33 45 33H31.999"
//                 fillRule="evenodd"
//               />
//             </svg>
//           </div>
//           <div className=" absolute top-10 left-3/4 z-0  opacity-10 ">
//             <svg
//               fill="#000000"
//               width="800px"
//               height="800px"
//               viewBox="0 0 256 256"
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-96 z-0  h-full    object-fill fill-blue-300 text-blue-300"
//             >
//               <path
//                 d="M230.704 99.2a4.004 4.004 0 0 0-4.01-3.995h-50.981c-2.215 0-5.212-1.327-6.693-2.964L155.289 77.08c-17.795-19.65-41.628-16.256-53.234 7.58l-38.736 79.557C60.42 170.172 52.705 175 46.077 175H29.359a3.996 3.996 0 0 0-3.994 3.995v10.01A4 4 0 0 0 29.372 193h24.7c8.835 0 19.208-6.395 23.174-14.293l43.645-86.914c3.964-7.894 12.233-9.228 18.473-2.974l17.184 17.219c3.123 3.13 9.242 5.667 13.647 5.667H226.7a4.005 4.005 0 0 0 4.004-3.994v-8.512z"
//                 fillRule="evenodd"
//               />
//             </svg>
//           </div>
//         </div>

//         {/* <section className="bg-white  py-24 px-4 lg:px-16">
//           <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
//             <h1 className="text-center text-5xl pb-12">Industries we serve</h1>
//             <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
//               <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
//                 <a href="#" className="block">
//                   <div className="h-28">
//                     <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
//                       <img
//                         src="https://epicpadprinting.com/public/img/indus/Automotive.png"
//                         className="w-36 h-36  mt-6 m-auto"
//                         alt="Automotive"
//                         title="Automotive"
//                         loading="lazy"
//                         width={200}
//                         height={200}
//                       />
//                     </div>
//                   </div>
//                   <div className="p-6   z-10 w-full   ">
//                     <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
//                       Automotive
//                     </p>
//                   </div>
//                 </a>
//               </div>
//               <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
//                 <a href="#" className="block">
//                   <div className="h-28">
//                     <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
//                       <img
//                         src="https://epicpadprinting.com/public/img/indus/Toys-and-Baby-Products.png"
//                         className="w-36 h-36  mt-6 m-auto"
//                         alt="Toys and Baby Products"
//                         title="Toys and Baby Products"
//                         loading="lazy"
//                         width={200}
//                         height={200}
//                       />
//                     </div>
//                   </div>
//                   <div className="p-6   z-10 w-full   ">
//                     <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
//                       Toys and Baby Products
//                     </p>
//                   </div>
//                 </a>
//               </div>
//               <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
//                 <a href="#" className="block">
//                   <div className="h-28">
//                     <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
//                       <img
//                         src="https://epicpadprinting.com/public/img/indus/MEDICAL.png"
//                         className="w-36 h-36  mt-6 m-auto"
//                         alt="Medical"
//                         title="Medical"
//                         loading="lazy"
//                         width={200}
//                         height={200}
//                       />
//                     </div>
//                   </div>
//                   <div className="p-6   z-10 w-full   ">
//                     <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
//                       Medical
//                     </p>
//                   </div>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section> */}

//       </>

//     </>
//   );
// };

// export default About;
import React from "react";
import { Routes } from "react-router-dom";
import about1 from "/src/assets/images/about1.png";
import about2 from "/src/assets/images/about2.png";

const About = () => {
  return (
    <>
      {/* <section id="about" className="about">
    <h1 className="heading">about us</h1>
    <div className="row">
      <div className="content">
        <h3>We make creativity work for your brand!</h3>
        <p>
          Ours is a team of creatives that is brainstorming on great ideas,
          <b> all. the. time.</b>
          <br />
          With our skills put together, you get an ensemble capable of doing
          anything and everything your brand needs.
        </p>
        <a href="#">
          <button className="btn">Read More</button>
        </a>
      </div>
    </div>
  </section> */}
      <>
        <section id="home" class="about-home">
          <h1>
            {" "}
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              About<span className="text-white lowercase"> Us</span>{" "}
            </span>{" "}
          </h1>
          <h2>Lorem ipsum dolor sit.</h2>
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
                />
              </div>
              <div className="md:7/12 lg:w-6/12 text-2xl">
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
        {"{"}/* {/* component */} */{"}"}
        <div className="bg-white relative   flex items-center  n justify-center overflow-hidden z-50 ">
          <div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="flex flex-col items-center justify-between lg:flex-row py-16">
              <div className=" relative ">
                <div className=" absolute top-0 -left-48 z-0  opacity-50 ">
                  <img
                    src="https://placeholder/400*400"
                    className="w-36 z-0  h-full    object-fill fill-y text-y   "
                  />
                </div>
                <div className="lg:max-w-xl lg:pr-5 relative z-40">
                  <p className="flex text-sm uppercase text-g1  ">About Us</p>
                  <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                    We make you look
                    <span className="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4 animate_animated animate_flash">
                      different
                    </span>
                  </h2>
                  <p className="text-2xl text-gray-700 ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Obcaecati tempore voluptate modi, quod sed repellat ratione
                    nam aliquam, minima expedita, accusantium doloremque sequi
                    quidem voluptas.
                  </p>
                  <div className="mt-10 flex flex-col items-center md:flex-row">
                    <a
                      href="/"
                      className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-slate-900 p-6 font-medium tracking-wide text-white shadow-md transition duration-300 ease-in-out transform hover:scale-110 hover:rotate-4 focus:outline-none md:mr-4 md:mb-0 md:w-auto shadow-md"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
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
          <div className="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-40    ">
            About Us
          </div>
          <div className=" absolute -bottom-24 left-10 z-0  opacity-10 ">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              className="w-96 z-0  h-full    object-fill fill-gray-300 text-gray-300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V6ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V9ZM15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V9ZM18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V13ZM6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V15ZM21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V15ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H4Z"
              />
            </svg>
          </div>
          <div className=" absolute -bottom-0 left-3/4 z-0  opacity-10 ">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              className="w-48 z-0  h-full -rotate-90   object-fill fill-red-300 text-red-300"
            >
              <path
                d="M32 225h12.993A4.004 4.004 0 0 0 49 220.997V138.01c0-4.976.724-5.04 1.614-.16l12.167 66.708c.397 2.177 2.516 3.942 4.713 3.942h8.512a3.937 3.937 0 0 0 3.947-4S79 127.5 80 129s14.488 52.67 14.488 52.67c.559 2.115 2.8 3.83 5.008 3.83h8.008a3.993 3.993 0 0 0 3.996-3.995v-43.506c0-4.97 1.82-5.412 4.079-.965l10.608 20.895c1.001 1.972 3.604 3.571 5.806 3.571h9.514a3.999 3.999 0 0 0 3.993-4.001v-19.49c0-4.975 2.751-6.074 6.155-2.443l6.111 6.518c1.51 1.61 4.528 2.916 6.734 2.916h7c2.21 0 5.567-.855 7.52-1.92l9.46-5.16c1.944-1.06 5.309-1.92 7.524-1.92h23.992a4.002 4.002 0 0 0 4.004-3.992v-7.516a3.996 3.996 0 0 0-4.004-3.992h-23.992c-2.211 0-5.601.823-7.564 1.834l-4.932 2.54c-4.423 2.279-12.028 3.858-16.993 3.527l2.97.198c-4.962-.33-10.942-4.12-13.356-8.467l-11.19-20.14c-1.07-1.929-3.733-3.492-5.939-3.492h-7c-2.21 0-4 1.794-4 4.001v19.49c0 4.975-1.14 5.138-2.542.382l-12.827-43.535c-.625-2.12-2.92-3.838-5.127-3.838h-8.008c-2.207 0-3.916 1.784-3.817 4.005l1.92 42.998c.221 4.969-.489 5.068-1.585.224l-15.13-66.825c-.488-2.155-2.681-3.902-4.878-3.902h-8.512a3.937 3.937 0 0 0-3.947 4s.953 77-.047 75.5-13.937-92.072-13.937-92.072C49.252 34.758 47.21 33 45 33H31.999"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <div className=" absolute top-10 left-3/4 z-0  opacity-10 ">
            <svg
              fill="#000000"
              width="800px"
              height="800px"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              className="w-96 z-0  h-full    object-fill fill-blue-300 text-blue-300"
            >
              <path
                d="M230.704 99.2a4.004 4.004 0 0 0-4.01-3.995h-50.981c-2.215 0-5.212-1.327-6.693-2.964L155.289 77.08c-17.795-19.65-41.628-16.256-53.234 7.58l-38.736 79.557C60.42 170.172 52.705 175 46.077 175H29.359a3.996 3.996 0 0 0-3.994 3.995v10.01A4 4 0 0 0 29.372 193h24.7c8.835 0 19.208-6.395 23.174-14.293l43.645-86.914c3.964-7.894 12.233-9.228 18.473-2.974l17.184 17.219c3.123 3.13 9.242 5.667 13.647 5.667H226.7a4.005 4.005 0 0 0 4.004-3.994v-8.512z"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
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
                />
              </div>
              <div className="md:7/12 lg:w-6/12 text-2xl">
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
        {"{"}/* {/* component */} */{"}"}
        {/* <section className="bg-white  py-24 px-4 lg:px-16">
          <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
            <h1 className="text-center text-5xl pb-12">Industries we serve</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Automotive.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Automotive"
                        title="Automotive"
                        loading="lazy"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Automotive
                    </p>
                  </div>
                </a>
              </div>
              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/Toys-and-Baby-Products.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Toys and Baby Products"
                        title="Toys and Baby Products"
                        loading="lazy"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Toys and Baby Products
                    </p>
                  </div>
                </a>
              </div>
              <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                  <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                      <img
                        src="https://epicpadprinting.com/public/img/indus/MEDICAL.png"
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Medical"
                        title="Medical"
                        loading="lazy"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <div className="p-6   z-10 w-full   ">
                    <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                      Medical
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section> */}
      </>
    </>
  );
};

export default About;
