// /* eslint-disable react/prop-types */
// import { useState } from "react";

// const image1 =
//   "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// const image2 =
//   "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// const image3 =
//   "https://images.unsplash.com/photo-1590649681928-4b179f773bd5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// const NewPage = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="w-full h-full  bg-slate-950">
//       <Navbar />
//       <HeroSection />

//       <Services />

//       <BlogSection />

//       <MetricsSection />
//       <MulitpleFeatureSection />

//       <FooterBlock />
//     </div>
//   );
// };

// const MulitpleFeatureSection = () => {
//   const [featureOpen, setFeatureOpen] = useState(1);

//   return (
//     <>
//       <div className="border-b border-gray-200 dark:bg-gray-950 dark:border-gray-700">
//         <ul
//           className="-mb-0.5 flex justify-center space-x-6"
//           aria-label="Tabs"
//           role="tablist"
//         >
//           <TabBtn
//             text={"First"}
//             activeNumber={1}
//             featureOpen={featureOpen}
//             setFeatureOpen={setFeatureOpen}
//           />
//           <TabBtn
//             text={"Second"}
//             activeNumber={2}
//             featureOpen={featureOpen}
//             setFeatureOpen={setFeatureOpen}
//           />
//           <TabBtn
//             text={"Third"}
//             activeNumber={3}
//             featureOpen={featureOpen}
//             setFeatureOpen={setFeatureOpen}
//           />
//         </ul>
//       </div>
//       {featureOpen === 1 && (
//         <FeatureSection text={"Feature 1"} image={image1} />
//       )}
//       {featureOpen === 2 && (
//         <FeatureSection text={"Feature 2"} image={image2} />
//       )}
//       {featureOpen === 3 && (
//         <FeatureSection text={"Feature 3"} image={image3} />
//       )}
//     </>
//   );
// };

// const TabBtn = ({ text, featureOpen, activeNumber, setFeatureOpen }) => {
//   return (
//     <li>
//       <button
//         onClick={() => {
//           setFeatureOpen(activeNumber);
//         }}
//         type="button"
//         className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-base whitespace-nowrap  hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none  dark:hover:text-blue-500 active ${
//           featureOpen === activeNumber
//             ? "text-blue-900 dark:text-blue-400 underline"
//             : " text-gray-500 dark:text-gray-400"
//         }`}
//         id="horizontal-alignment-item-1"
//         data-hs-tab="#horizontal-alignment-1"
//         aria-controls="horizontal-alignment-1"
//         role="tab"
//       >
//         {text}
//       </button>
//     </li>
//   );
// };

// const Navbar = () => {
//   const [openNavbar, setOpenNavbar] = useState(false);
//   const toggleNavbar = () => {
//     setOpenNavbar((openNavbar) => !openNavbar);
//   };
//   return (
//     <header className="absolute left-0 top-0 w-full flex items-center h-24 z-40">
//       <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
//         <div className="flex items-center min-w-max">
//           <a href="#" className="font-semibold flex items-center gap-x-2">
//             <div className="flex items-center -space-x-3">
//               <span className="h-6 aspect-square bg-purple-600 dark:bg-purple-500 rounded-full flex" />
//               <span className="h-6 aspect-square bg-violet-600 dark:bg-violet-400 blur rounded-full flex" />
//             </div>
//             <span className="text-lg text-gray-700 dark:text-gray-300">
//               Agency
//             </span>
//           </a>
//         </div>
//         <div
//           className={`
//                 absolute top-full  left-0 bg-white dark:bg-gray-950 lg:!bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none lg:w-max lg:space-x-16 lg:top-0 lg:relative  lg:flex duration-300 lg:transition-none ease-linear
//                 ${
//                   openNavbar
//                     ? "translate-y-0 opacity-0 visible"
//                     : "translate-y-10 opacity-0 invisible lg:visible  lg:translate-y-0 lg:opacity-100"
//                 }
//             `}
//         >
//           <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
//             <li>
//               <a
//                 href="#"
//                 className="px-2 transition-colors  py-2.5 hover:text-purple-600 "
//               >
//                 Portfolio
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="px-2 transition-colors  py-2.5 hover:text-purple-600 "
//               >
//                 Company
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="px-2 transition-colors  py-2.5 hover:text-purple-600 "
//               >
//                 Products
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="px-2 transition-colors  py-2.5 hover:text-purple-600 "
//               >
//                 Resources
//               </a>
//             </li>
//           </ul>
//           <div className="flex flex-col sm:flex-row sm:items-center gap-4  lg:min-w-max mt-10 lg:mt-0">
//             <a
//               href="#"
//               className="flex items-center justify-center w-full sm:w-auto h-12 px-6 rounded-full bg-gray-100 dark:bg-gray-900 text-purple-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800"
//             >
//               Get It touch
//             </a>
//           </div>
//         </div>
//         <div className="flex items-center lg:hidden">
//           <button
//             onClick={() => {
//               toggleNavbar();
//             }}
//             aria-label="Toggle navbar"
//             className="outline-none border-l border-l-gray-100 dark:border-l-gray-800 pl-3 relative py-3 children:flex"
//           >
//             <span
//               aria-hidden="true"
//               className={`
//                                     h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
//                                     ${
//                                       openNavbar
//                                         ? "rotate-45 translate-y-[0.33rem]"
//                                         : ""
//                                     }
//                                 `}
//             />
//             <span
//               aria-hidden="true"
//               className={`
//                                     mt-2 h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
//                                     ${
//                                       openNavbar
//                                         ? "-rotate-45 -translate-y-[0.33rem]"
//                                         : ""
//                                     }
//                                 `}
//             />
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export function HeroSection() {
//   return (
//     <>
//       <Navbar />
//       <section className="min-h-max bg-gray-950">
//         <div className="absolute top-0 inset-x-0 h-64 flex items-start">
//           <div className="h-24 w-2/3 bg-gradient-to-br from-purple-500 opacity-20 blur-2xl dark:from-purple-700 dark:invisible dark:opacity-40"></div>
//           <div className="h-20 w-3/5 bg-gradient-to-r from-blue-600 opacity-40 blur-2xl dark:from-purple-700 dark:opacity-40"></div>
//         </div>
//         <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-purple-600 to-violet-400 rounded-full opacity-50 blur-2xl"></div>
//         <div className="relative mx-auto pt-32 pb-24 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-10">
//           <h1 className="text-gray-900 dark:text-white mx-auto max-w-5xl font-bold text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight">
//             We create, we design, we develop Modern tools.
//           </h1>
//           <p className="text-gray-700 dark:text-gray-300 mx-auto max-w-2xl">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
//             saepe atque enim quasi a ipsum asperiores necessitatibus deleniti,
//             sint quo vel corporis dignissimos
//           </p>
//           <div className="flex justify-center items-center flex-wrap mx-auto gap-4">
//             <a
//               href="#"
//               className="flex items-center h-12 px-6 rounded-full bg-purple-600 text-white border border-purple-600"
//             >
//               Hire us Now
//             </a>
//             <a
//               href="#"
//               className="flex items-center h-12 px-6 rounded-full bg-gray-100 dark:bg-gray-900 text-purple-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800"
//             >
//               Learn more
//             </a>
//           </div>
//           <div className="text-left grid lg:grid-cols-3 p-6 rounded-2xl bg-gradient-to-tr from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 border border-gray-100 dark:border-gray-800 max-w-2xl lg:max-w-5xl mx-auto lg:divide-x divide-y lg:divide-y-0 divide-gray-300 dark:divide-gray-800">
//             <div className="flex items-start gap-6 lg:pr-6 pb-6 lg:pb-0">
//               <div className="w-10">
//                 <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
//                     />
//                   </svg>
//                 </span>
//               </div>
//               <div className="flex-1 space-y-1">
//                 <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
//                   High Quality
//                 </h2>
//                 <p className="text-gray-700 dark:text-gray-300 text-sm">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start gap-6 lg:px-6 py-6 lg:py-0">
//               <div className="w-10">
//                 <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
//                     />
//                   </svg>
//                 </span>
//               </div>
//               <div className="flex-1 space-y-1">
//                 <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
//                   High Quality
//                 </h2>
//                 <p className="text-gray-700 dark:text-gray-300 text-sm">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start gap-6 pt-6 lg:pt-0 lg:pl-6">
//               <div className="w-10">
//                 <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
//                     />
//                   </svg>
//                 </span>
//               </div>
//               <div className="flex-1 space-y-1">
//                 <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
//                   High Quality
//                 </h2>
//                 <p className="text-gray-700 dark:text-gray-300 text-sm">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// const iconRender = (val) => {
//   switch (val) {
//     case "send":
//       return (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
//           />
//         </svg>
//       );
//     default:
//       return <>No Icon</>;
//   }
// };

// const ServiceCard = ({ title, description, icon }) => {
//   return (
//     <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
//       <div className="rounded-xl bg-gray-200 dark:bg-gray-800 p-3 text-gray-900 dark:text-white w-max relative">
//         {iconRender(icon)}
//       </div>
//       <div className="mt-6 space-y-4 relative">
//         <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
//           {title}
//         </h2>
//         <p className="text-gray-700 dark:text-gray-300">{description}</p>
//       </div>
//       <span className="absolute w-32 aspect-square -bottom-16 -right-16 bg-sky-600/10 rounded-full" />
//     </div>
//   );
// };

// const services = [
//   {
//     id: 1,
//     title: "Social media marketing",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
//     icon: "send",
//   },
//   {
//     id: 2,
//     title: "Email marketing",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
//     icon: "send",
//   },
//   {
//     id: 3,
//     title: "Service 3",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
//     icon: "send",
//   },
//   {
//     id: 4,
//     title: "Email marketing",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
//     icon: "send",
//   },
//   {
//     id: 5,
//     title: "Service 4",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
//     icon: "send",
//   },
//   {
//     id: 6,
//     title: "Email marketing",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
//     icon: "send",
//   },
// ];
// const Services = () => {
//   return (
//     <section className="py-20 dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 xl:gap-14">
//         <div className="text-center max-w-3xl mx-auto space-y-4">
//           <h1 className="text-gray-900 dark:text-white font-semibold text-4xl">
//             What we offer
//           </h1>
//           <p className="text-gray-700 dark:text-gray-300">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </p>
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {services.map((service) => (
//             <ServiceCard key={service.id} {...service} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const BlogCard = ({ cover, published_at, title, sumary }) => {
//   return (
//     <a
//       href="#"
//       className="flex p-px flex-col bg-gray-100 dark:bg-gray-900 group border border-gray-200 dark:border-gray-800 rounded-lg"
//     >
//       <div className="flex rounded-[7px] bg-gray-300 dark:bg-gray-700">
//         <img
//           src={cover}
//           className="rounded-[7px] aspect-[4/2.8] w-full object-cover"
//           alt="image article"
//         />
//       </div>
//       <div className="flex flex-col p-5 relative space-y-4">
//         <h1 className="text-xl/tight font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500">
//           {title}
//         </h1>
//         <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
//           {sumary}
//         </p>
//         <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-5 h-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
//             />
//           </svg>
//           <span>{published_at}</span>
//         </div>
//       </div>
//     </a>
//   );
// };

// const posts = [
//   {
//     id: 1,
//     cover: "/images/working-on-housing-project.jpg",
//     published_at: "Jun, 12, 2021",
//     title: "How to Sructure your reactJs Application like a Legend ",
//     sumary:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum ",
//   },
//   {
//     id: 2,
//     cover: "/images/working-on-housing-project.jpg",
//     published_at: "Jun, 12, 2021",
//     title: "You're probably fetching data in the wrong way",
//     sumary:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum ",
//   },
// ];

// const BlogSection = () => {
//   return (
//     <section className="py-20 dark:bg-slate-950">
//       <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-14">
//         <div className="text-center space-y-6 max-w-2xl mx-auto">
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">
//             Our most recent Articles
//           </h1>
//           <p className="text-gray-700 dark:text-gray-300">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
//             perferendis eos amet eum repudiandae aspernatur mollitia quos
//             consectetur voluptatibus pariatur
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 rounded-t-lg">
//           {posts.map((post) => (
//             <BlogCard key={post.id} {...post} />
//           ))}
//           <div className="sm:col-span-2 lg:col-span-1 p-6 sm:p-10 md:p-14 lg:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 flex flex-col space-y-6 relative">
//             <div className="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-blue-600 to-violet-500 blur-2xl z-10 -top-7 -left-7 opacity-40"></div>
//             <div className="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-blue-600 to-violet-500 blur-2xl z-10 -bottom-7 -right-7 opacity-40"></div>
//             <div className="lg:h-full flex flex-col items-center text-center justify-center space-y-5 mx-auto max-w-2xl">
//               <h1 className="font-bold text-gray-900 dark:text-white text-3xl">
//                 Join other{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-bl from-blue-700 to-violet-400 dark:from-blue-300 dark:to-violet-400">
//                   600 Amazing
//                 </span>{" "}
//                 developers
//               </h1>
//               <p className="text-gray-700 dark:text-gray-300 text-center">
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                 Laudantium, rem eius dicta
//               </p>
//               <form
//                 action
//                 className="w-full flex flex-col sm:items-center sm:flex-row lg:flex-col gap-y-3 gap-x-4"
//               >
//                 <input
//                   type="email"
//                   className="py-3 px-5 rounded-lg text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800 outline-none w-full placeholder:text-gray-600 dark:placeholder:text-gray-300"
//                   placeholder="johndoe@gmail.com"
//                 />
//                 <div className="flex justify-center w-full sm:w-max lg:w-full">
//                   <button className="py-3 rounded-lg px-6 bg-blue-600 dark:bg-blue-500 text-white font-medium text-base w-full flex justify-center">
//                     Subscribe
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <a
//             href="#"
//             className="px-6 py-3 border rounded-lg border-gray-100 dark:border-gray-900 text-blue-600 dark:text-gray-300 flex items-center gap-x-3"
//           >
//             See More
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-4 h-4"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M8.25 4.5l7.5 7.5-7.5 7.5"
//               />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// const MetricsSection = () => {
//   return (
//     <section className="py-10 bg-gray-50 dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-6">
//         <div className="bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-100/80 dark:border-gray-900/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700 dark:text-gray-300">
//           <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white">
//             2 Years
//           </span>
//           <span>Experiences</span>
//         </div>
//         <div className="bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-100/80 dark:border-gray-900/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700 dark:text-gray-300">
//           <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white">
//             4k
//           </span>
//           <span>Projects</span>
//         </div>
//         <div className="bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-100/80 dark:border-gray-900/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700 dark:text-gray-300">
//           <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white">
//             95%
//           </span>
//           <span>Satisfaction</span>
//         </div>
//         <div className="bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-100/80 dark:border-gray-900/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700 dark:text-gray-300">
//           <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white">
//             +2k
//           </span>
//           <span>Clients</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export function FeatureSection({ text, image }) {
//   return (
//     <>
//       <main className="w-full h-full dark:bg-slate-950 ">
//         <section className="relative pt-10 xl:pt-14">
//           <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
//             <div className="mx-auto text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
//               <h1 className="text-indigo-950 dark:text-white text-4xl/snug sm:text-6xl/tight lg:text-5xl/tight xl:text-6xl/tight font-semibold text">
//                 Build Your {text} Online Platform with best{" "}
//                 <span className="bg-indigo-50 dark:bg-gray-900 dark:text-indigo-300 inline-block border border-dashed border-indigo-600 px-3">
//                   Digital Agency
//                 </span>
//               </h1>
//               <p className="mt-10 text-gray-700 dark:text-gray-300 lg:text-lg max-w-2xl lg:max-w-none mx-auto">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Dignissimos, fugit! Laborum quo maxime at sapiente quasi
//               </p>
//               <div className="mt-10 flex gap-4 justify-center lg:justify-start flex-wrap">
//                 <a
//                   href="#"
//                   className="relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition active:before:bg-indigo-700 text-white hover:before:bg-indigo-800 before:bg-indigo-600 hover:before:scale-105"
//                 >
//                   <span className="relative">{text}</span>
//                 </a>
//                 <a
//                   href="#"
//                   className="relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition before:bg-gray-100 dark:before:bg-gray-900 text-indigo-600 dark:text-white hover:before:scale-105"
//                 >
//                   <span className="relative">{text}</span>
//                 </a>
//               </div>
//             </div>
//             <div className="flex flex-1 lg:w-1/2 relative max-w-3xl mx-auto lg:max-w-none">
//               <img
//                 src={image}
//                 alt="happy team"
//                 width={1850}
//                 height="auto"
//                 className="lg:absolute w-full lg:inset-x-0 object-cover lg:h-full"
//               />
//               <div className="absolute left-1/2 -translate-x-1/2 lg:-translate-x-0 -bottom-10 w-60 p-4 rounded-lg bg-white dark:bg-gray-950 border dark:border-gray-800">
//                 <div className="flex children:ring-4 children:ring-white dark:children:ring-gray-950 children:w-9 children:h-9 children:object-cover children:-ml-1 children:rounded-full">
//                   <img
//                     src="/images/creative-agency-production.webp"
//                     alt="employee image"
//                     width={1920}
//                     height={1320}
//                     className="!-ml-0"
//                   />
//                   <img
//                     src="/images/creative-agency-production.webp"
//                     alt="employee image"
//                     width={1920}
//                     height={1320}
//                   />
//                   <img
//                     src="/images/creative-agency-production.webp"
//                     alt="employee image"
//                     width={1920}
//                     height={1320}
//                   />
//                   <img
//                     src="/images/creative-agency-production.webp"
//                     alt="employee image"
//                     width={1920}
//                     height={1320}
//                   />
//                 </div>
//                 <div>
//                   <p className="text-lg font-semibold text-indigo-950 dark:text-white">
//                     45+ employees
//                   </p>
//                   <p className="text-gray-700 dark:text-gray-300 flex">
//                     <span className="text-yellow-500 text-xl">★</span> 5.0 (2.5k
//                     reviews)
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

// const FooterItem = ({ text, link }) => {
//   return (
//     <li>
//       <a
//         href={link}
//         className="duration-200 hover:text-blue-600 dark:hover:text-blue-500"
//       >
//         {text}
//       </a>
//     </li>
//   );
// };

// const FooterBlockItem = ({ title, items }) => {
//   return (
//     <div className="space-y-5">
//       <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
//         {title}
//       </h1>
//       <ul className="space-y-3">
//         {items.map((item) => (
//           <FooterItem key={item.id} {...item} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// const footerBlocks = [
//   {
//     id: 1,
//     title: "Navigation",
//     items: [
//       {
//         id: 1,
//         text: "Home",
//         link: "#",
//       },
//       {
//         id: 2,
//         text: "About",
//         link: "#",
//       },
//       {
//         id: 3,
//         text: "Contact",
//         link: "#",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Services",
//     items: [
//       {
//         id: 1,
//         text: "Web design",
//         link: "#",
//       },
//       {
//         id: 2,
//         text: "Marketing",
//         link: "#",
//       },
//       {
//         id: 3,
//         text: "Web Development",
//         link: "#",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "Products",
//     items: [
//       {
//         id: 1,
//         text: "Unify Tailwind",
//         link: "#",
//       },
//       {
//         id: 2,
//         text: "Unify Uno",
//         link: "#",
//       },
//       {
//         id: 3,
//         text: "Tailset Builder",
//         link: "#",
//       },
//     ],
//   },
// ];

// const FooterBlock = () => {
//   return (
//     <footer className="pt-16 md:pt-20 bg-gray-100 dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
//         <div className="w-full text-gray-700 dark:text-gray-300 grid grid-cols-2 lg:grid-cols-4 gap-8 pb-4 border-b border-b-gray-200 dark:border-b-gray-800">
//           <div className="flex">
//             <a href="#">
//               <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-800 to-indigo-400 font-bold text-2xl">
//                 U
//               </span>
//               Unify-Ui
//             </a>
//           </div>
//           <div className="flex items-center space-x-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-5 h-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//               />
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//               />
//             </svg>
//             <span>Lubumbashi-RDC</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
//               />
//             </svg>
//             <span>+243 ......</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
//               />
//             </svg>
//             <span>info@dcssarl</span>
//           </div>
//         </div>
//         <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-8 py-10 text-gray-700 dark:text-gray-300">
//           {footerBlocks.map((footerBlock) => (
//             <FooterBlockItem key={footerBlock.id} {...footerBlock} />
//           ))}
//           <div className="space-y-5 col-span-2 md:col-span-3 lg:col-span-1">
//             <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
//               Subscribe to our newsletter
//             </h1>
//             <p className="max-w-xl">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
//               debitis ex temporibus
//             </p>
//             <form action className="grid w-full relative max-w-xl">
//               <div className="flex flex-col gap-3 w-full relative">
//                 <input
//                   type="email"
//                   className="w-full outline-none px-3 py-3 rounded-md bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
//                   placeholder="johndoe@gmail.com"
//                 />
//                 <button className="w-full py-3 sm:py-0 sm:w-max sm:absolute sm:right-1 sm:inset-y-1 px-4 text-sm flex sm:items-center justify-center outline-none bg-blue-600 text-white rounded-md">
//                   Subscribe
//                 </button>
//               </div>
//             </form>
//           </div>
//         </nav>
//         <div className="w-full flex flex-col md:flex-row gap-4 items-center sm:justify-between py-3 border-t border-gray-200 dark:border-t-gray-800 text-gray-700 dark:text-gray-300">
//           <div className="flex text-center sm:text-left sm:min-w-max">
//             <p> © 2023 UnifyUI. All right reserved </p>
//           </div>
//           <div className="flex justify-center sm:justify-end w-full gap-3">
//             <a href="#" aria-label="social link">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 className="w-5 h-5"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
//               </svg>
//             </a>
//             <a href="#" aria-label="social link">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 className="w-5 h-5"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
//               </svg>
//             </a>
//             <a href="#" aria-label="social link">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 className="w-5 h-5"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
//               </svg>
//             </a>
//             <a href="#" aria-label="social link">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 className="w-5 h-5"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default NewPage;

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// import "./newpage.css";

// // import required modules
// import { EffectCoverflow, Pagination } from "swiper/modules";

// export default function App() {
//   //50 projects in 50 days Udemy

//   const testimonialsContainer = document.querySelector(
//     ".testimonials-container"
//   );
//   const testimonial = document.querySelector(".testimonial");
//   const userImage = document.querySelector(".user-image");
//   const username = document.querySelector(".username");
//   const role = document.querySelector(".role");

//   const testimonials = [
//     {
//       name: "Miyah Myles",
//       position: "Marketing",
//       photo:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
//       text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
//     },
//     {
//       name: "June Cha",
//       position: "Software Engineer",
//       photo: "https://randomuser.me/api/portraits/women/44.jpg",
//       text: "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
//     },
//     {
//       name: "Iida Niskanen",
//       position: "Data Entry",
//       photo: "https://randomuser.me/api/portraits/women/68.jpg",
//       text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
//     },
//     {
//       name: "Renee Sims",
//       position: "Receptionist",
//       photo: "https://randomuser.me/api/portraits/women/65.jpg",
//       text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
//     },
//     {
//       name: "Jonathan Nunfiez",
//       position: "Graphic Designer",
//       photo: "https://randomuser.me/api/portraits/men/43.jpg",
//       text: "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
//     },
//     {
//       name: "Sasha Ho",
//       position: "Accountant",
//       photo:
//         "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
//       text: "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!",
//     },
//     {
//       name: "Veeti Seppanen",
//       position: "Director",
//       photo: "https://randomuser.me/api/portraits/men/97.jpg",
//       text: "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
//     },
//   ];

//   let idx = 1;

//   function updateTestimonials() {
//     const { name, position, photo, text } = testimonials[idx];

//     testimonial.innerHTML = text;
//     userImage.src = photo;
//     username.innerHTML = name;
//     role.innerHTML = position;

//     idx++;

//     if (idx > testimonials.length - 1) {
//       idx = 0;
//     }
//   }

//   setInterval(updateTestimonials, 10000);
//   return (
//     <>
//       <div class="testimonial-container">
//         <div class="progress-bar"></div>
//         <div class="fas fa-quote-right fa-quote"></div>
//         <div class="fas fa-quote-left fa-quote"></div>
//         <p class="testimonial">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
//           repellendus, vitae suscipit culpa molestiae possimus voluptate
//           consequuntur odit nulla saepe obcaecati dolorem laudantium praesentium
//           aspernatur mollitia aperiam laborum rem cum commodi doloremque
//           asperiores officia hic similique. Sint ad nobis quos?
//         </p>
//         <div class="user">
//           <img
//             src="https://randomuser.me/api/portraits/women/46.jpg"
//             alt="user"
//             class="user-image"
//           />
//           <div class="user-details">
//             <h4 class="username">Lola Smith</h4>
//             <p class="role">Marketing</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
