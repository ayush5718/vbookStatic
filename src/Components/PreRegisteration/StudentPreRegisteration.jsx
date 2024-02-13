import React from "react";
import "./student.css";
const StudentPreRegisteration = () => {
  return (
    <>
      <section id="home" class="registeration-home">
        <h1>
          {" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Register<span className="text-white lowercase"></span>{" "}
          </span>{" "}
          Yourself
        </h1>
        <h2>To get a free high qualified V-books.</h2>
      </section>

      <body class="bg-white text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto mt-[10vh]">
        <main class="flex-1 md:p-0 lg:pt-8 lg:px-8 md:ml-24 flex flex-col">
          <section class="bg-cream-lighter p-4 shadow ml-[2vh] mr-[5vh]">
            <div class="md:flex">
              <h2 class="md:w-1/3 uppercase tracking-wide text-3xl font-bold mb-6">
                registration Form
              </h2>
            </div>
            <form>
              <div class="md:flex mb-8">
                <div class="md:flex-1 mb-4">
                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-3xl font-medium mb-[2vh]">
                      Name
                    </label>
                    <input
                      class="w-full text-3xl shadow-inner p-4 border-0"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-3xl font-medium mb-[2vh]">
                      Institute Name
                    </label>
                    <input
                      class="w-full text-3xl shadow-inner p-4 border-0"
                      type="text"
                      name="institute"
                      placeholder="Your Institute Name"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-3xl font-medium mb-[2vh]">
                      Highest Qualification
                    </label>
                    <input
                      class="w-full text-3xl shadow-inner p-4 border-0"
                      type="text"
                      name="qualification"
                      placeholder="Your Highest Qualification"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-3xl font-medium mb-[2vh]">
                      Phone Number
                    </label>
                    <input
                      class="w-full text-3xl shadow-inner p-4 border-0"
                      type="text"
                      name="number"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-3xl font-medium mb-[2vh]">
                      E-mail
                    </label>
                    <input
                      class="w-full text-3xl shadow-inner p-4 border-0"
                      type="text"
                      name="email"
                      placeholder="Your E-mail"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-3xl font-medium mb-[2vh]">
                      Date of birth
                    </label>
                    <input
                      class="w-full text-3xl shadow-inner p-4 border-0"
                      type="date"
                      name="dob"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-fit rounded border text-3xl border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </main>
      </body>
    </>
  );
};

export default StudentPreRegisteration;
