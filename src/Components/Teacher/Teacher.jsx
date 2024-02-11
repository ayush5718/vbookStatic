import React, { Fragment, useState } from "react";
// import Modal from '../Modal/Modal';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

// importing images
import bb from "./images/bb.png";
import inspire from "./images/inspire.png";
import trophy from "./images/trophy.png";
import instructor from "/src/assets/images/tutor.jpeg";
import getstarted1 from "/src/assets/images/planyourbook.png";
import tutor2 from "/src/assets/images/tutor-2.png";
import tutor3 from "/src/assets/images/tutor-3.png";
import "./Teacher.css";
// import Footer from '../Footer/Footer';

const Teacher = () => {
  // const [showModal, setShowModal] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleTitleClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand clicked item
    }
  };

  const data = [
    {
      id: 1,
      title: "this is title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium eos explicabo excepturi dicta autem architecto iste officiis minus vero dolore, harum sequi rem modi blanditiis doloremque doloribus asperiores ipsam?",
    },
    {
      id: 2,
      title: "this is title 2 ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium eos explicabo excepturi dicta autem architecto iste officiis minus vero dolore, harum sequi rem modi blanditiis doloremque doloribus asperiores ipsam?",
    },
    {
      id: 3,
      title: "this is the title 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium eos explicabo excepturi dicta autem architecto iste officiis minus vero dolore, harum sequi rem modi blanditiis doloremque doloribus asperiores ipsam?",
    },
  ];

  return (
    <Fragment>
      {/* get started section starts */}

      <section id="home" class="teacher-home inset-4">
        <h1>
          {" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text mt-4">
            Become<span className="text-white lowercase"></span>{" "}
          </span>{" "}
          A Tutor
        </h1>
        <button className=" btn btn-warning px-8 py-4 text-2xl mt-5">
          Get Started
        </button>
      </section>

      {/* </div> */}
      {/* get started section ends */}

      {/* card section starts */}
      <section className="flex justify-center gap-[50px] m-10 flex-wrap">
        <div className="relative grid h-[40rem]  max-w-[40rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 hover:scale-110 h-[300px]">
          <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
            <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div className="relative p-6 px-6 py-14 md:px-12">
            <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
              Teach your way{" "}
              <p className="text-base">
                Publish the v-books you want, in the way you want, and always
                have control of your own content.
              </p>
            </h2>
            <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
              Tania Andrew
            </h5>
          </div>
        </div>

        <div className="relative grid h-[40rem] w-full max-w-[40rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 hover:scale-110 h-[300px]">
          <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.pexels.com/photos/7710184/pexels-photo-7710184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
            <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div className="relative p-6 px-6 py-14 md:px-12">
            <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
              Inspire learners
              <p className="text-base">
                Teach what you know and help learners explore their interests,
                gain new skills, and advance their careers.
              </p>
            </h2>
            <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
              Tania Andrew
            </h5>
          </div>
        </div>

        <div className="relative grid h-[40rem] w-full max-w-[40rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 hover:scale-110 h-[300px]">
          <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.pexels.com/photos/6120397/pexels-photo-6120397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
            <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div className="relative p-6 px-6 py-14 md:px-12">
            <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
              Get rewarded
              <p className="text-base">
                Expand your professional network, build your expertise, and earn
                money on each paid enrollment.
              </p>
            </h2>
            <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
              Tania Andrew
            </h5>
          </div>
        </div>
      </section>
      {/* card section ends */}

      {/* reason to start section starts from here  */}
      <div className="bg-[#F1F0E8] p-8">
        <div className="flex justify-center">
          <p className="text-4xl font-semibold">Reasons to Start</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8 ">
          <div className="flex flex-col items-center fade-in">
            <img className="w-[22%] md:w-[15%]" src={bb} alt="" />
            <p className="font-semibold text-xl mt-4">Teach your way</p>
            <p className="text-gray-600 mt-2 text-center">
              Publish the course you want, in the way you want, and always have
              control of your own content.
            </p>
          </div>
          <div className="flex flex-col items-center fade-in">
            <img className="w-[20%] md:w-[15%]" src={inspire} alt="" />
            <p className="font-semibold text-xl mt-4">Inspire learners</p>
            <p className="text-gray-600 mt-2 text-center">
              Teach what you know and help learners explore their interests,
              gain new skills, and advance their careers.
            </p>
          </div>
          <div className="flex flex-col items-center fade-in">
            <img className="w-[20%] md:w-[15%]" src={trophy} alt="" />
            <p className="font-semibold text-xl mt-4">Get rewarded</p>
            <p className="text-gray-600 mt-2 text-center">
              Expand your professional network, build your expertise, and earn
              money on each paid enrollment.
            </p>
          </div>
        </div>
      </div>
      {/* reason to starts section ends here */}

      <div className="bg-white p-8 section">
        <div className="flex flex-col items-center justify-center mb-8">
          <p className="text-4xl font-semibold text-center">
            How to Get Started
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Follow these steps to begin your journey as an instructor.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-md shadow-md card">
            <div className="text-4xl">
              <p className="text-orange-500">
                {" "}
                <span className="font-bold text-black"> Step:1</span> Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
                ex veniam quae officia esse nesciunt labore nulla. Quaerat,
                porro deleniti.
              </p>
            </div>
            <div className="w-full">
              <img src={getstarted1} alt="" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md card">
            <div className="text-4xl">
              <p className="text-orange-500">
                {" "}
                <span className="font-bold text-black"> Step:1</span> Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
                ex veniam quae officia esse nesciunt labore nulla. Quaerat,
                porro deleniti.
              </p>
            </div>
            <div className="w-full">
              <img src={getstarted1} alt="" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="bg-white p-6 rounded-md shadow-md card">
            <div className="text-4xl">
              <p className="text-orange-500">
                {" "}
                <span className="font-bold text-black"> Step:1</span> Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
                ex veniam quae officia esse nesciunt labore nulla. Quaerat,
                porro deleniti.
              </p>
            </div>
            <div className="w-full">
              <img src={getstarted1} alt="" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md card">
            <div className="text-4xl">
              <p className="text-orange-500">
                {" "}
                <span className="font-bold text-black"> Step:1</span> Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
                ex veniam quae officia esse nesciunt labore nulla. Quaerat,
                porro deleniti.
              </p>
            </div>
            <div className="w-full">
              <img src={getstarted1} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* dropdown starts from here  */}

      <div className="text-center">
        <h1 className="text-6xl">How to get started</h1>
        <div className="container flex items-center mx-auto p-4 justify-center">
          {data.map((item, index) => (
            <div key={item.id} className="mx-4">
              <div
                className="cursor-pointer text-4xl"
                onClick={() => handleTitleClick(index)}
              >
                {item.title}
              </div>
              {expandedIndex === index && (
                <div className="mt-4">{item.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* dropdown ends here  */}

      <div className="bg-[#1D2331] p-10 text-center">
        <p className="text-4xl font-bold text-white mb-4">
          Ready to Make a Difference?
        </p>
        <button
          className="bg-blue-500 text-white px-8 py-4 rounded-md hover:bg-blue-700"
          onClick={() => setShowModal(true)}
        >
          Get Started
        </button>
      </div>

      {/* <Modal isVisible={showModal} onClose={() => setShowModal(false)}> */}
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <p className="mb-8 text-3xl text-center font-bold">
            Become an Instructor
          </p>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1 get-started-btn"
          >
            Create Account
          </button>
          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the{" "}
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="text-grey-dark mt-6">
          Already have an account?{" "}
          <a className="no-underline border-b text-blue-500" href="#">
            Log in
          </a>
          .
        </div>
      </div>
      {/* </Modal> */}
      <br />
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Teacher;
