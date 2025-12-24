import React from "react";
import Projects from "../../components/Projects";
import Navbar from "../../components/navbar";
import { Footer } from "../../components/footer";
import BulbSection from "../../components/BulbSection";

const About = () => {
  const work = [
    "Develop full-stack applications using MERN Stack",

    "Build secure and scalable REST APIs",

    "Create responsive and interactive React interfaces",

    "Manage and optimize MongoDB databases",

    "Implement authentication & authorization",

    "Ensure clean code and performance optimization",
  ];
  return (
    <>
      <div className="w-full">
        <Navbar />

        <div className="mt-5 sm:mt-12  px-4 md:px-8 lg:px-20  bg-theme-background text-theme-white w-full  ">
          <div className="jetBranis text-4xl flex justify-center items-center">
            About
          </div>
          <div className="flex justify-between my-5">
            <div className="flex justify-center items-center gap-2">
              <div>
                <span className="text-theme-primary text-2xl">#</span>
                <span className="text-[22px] source">About me</span>
              </div>

              <div className="h-[1px] sm:w-96 md:w-[500px] lg:w-[700px]  bg-theme-primary"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className="col-span-1 ">
              <div className="flex flex-col gap-4 py-0 sm:py-10 text-[18px] roboto">
                <div className="text-theme-secondary">
                  Hello, i’m Muhammad Umar!
                </div>
                <div className="text-theme-secondary">
                  I am a passionate MERN Stack Developer with a strong focus on
                  building full-stack web applications that are scalable,
                  secure, and performance-driven.
                </div>

                <div className="text-theme-secondary">
                  I specialize in MongoDB, Express.js, React.js, and Node.js,
                  and I enjoy working across the entire development
                  lifecycle—from designing intuitive user interfaces to building
                  robust backend APIs.
                </div>

                <div className="text-theme-secondary">
                  I believe in writing clean, maintainable code and following
                  best practices to ensure long-term project stability. I
                  continuously improve my skills by working on real-world
                  projects, learning modern tools, and refining my development
                  workflow.
                </div>
                <div className="text-theme-secondary">
                  My goal is to deliver high-quality digital experiences that
                  combine functionality, performance, and modern design.
                </div>
              </div>
            </div>

            {/* <div className="col-span-1">
              <div className="h-80 w-full flex justify-center items-center">
                <img src="./hero.png" alt="" className="h-full w-[50%]" />
              </div>
            </div> */}
            <div className="col-span-1 flex justify-center items-center ">
              <img
                src="./hero.png"
                alt=""
                className="h-56 w-56 rounded-full myshadow "
              />
            </div>
          </div>

          <div className="flex justify-between my-5">
            <div className="flex justify-center items-center gap-2">
              <div>
                <span className="text-theme-primary text-2xl">#</span>
                <span className="text-[22px] source">What i Can do</span>
              </div>

              <div className="h-[1px] sm:w-96 md:w-[500px] lg:w-[700px]  bg-theme-primary"></div>
            </div>
          </div>

          {/* What can i do */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className="col-span-1 flex justify-center items-center ">
              <img
                src="./hero.png"
                alt=""
                className="h-56 w-56 rounded-full myshadow "
              />
            </div>

            <div className="col-span-1 ">
              <div className="flex flex-col gap-4 py-0 sm:py-10 text-[18px] roboto">
                <ul
                  className="flex flex-col gap-2"
                  style={{ listStyle: "circle" }}
                >
                  {work?.map((each, i) => {
                    return (
                      <li className="text-theme-secondary" key={i}>
                        {each}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-between my-5">
            <div className="flex justify-center items-center gap-2">
              <div>
                <span className="text-theme-primary text-2xl">#</span>
                <span className="text-[22px] source">Education</span>
              </div>

              <div className="h-[1px] sm:w-96 md:w-[500px] lg:w-[700px]  bg-theme-primary"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className="col-span-1">
              <div className=" ">
                <div className="pl-1 sm:pl-6">
                  <span className="text-[18px] sm:text-xl source ">
                    const = Matriculation{" "}
                  </span>
                </div>
                <div className="flex flex-col gap-4 py-10 pt-5 text-[18px] pl-2 sm:pl-10 ">
                  <div className="flex gap-2 text-sm sm:text-xl">
                    <p className="jetBranis text-gray-400">School:</p>
                    <p className="ibm text-gray-500">
                      "AL RAZZAQ CHILDREN ACADEMY",
                    </p>
                  </div>
                  <div className="flex gap-2 text-sm sm:text-xl">
                    <p className="jetBranis text-gray-400">Subject:</p>
                    <p className="ibm text-gray-500">"Computer Science",</p>
                  </div>
                  <div className="flex gap-2 text-sm sm:text-xl">
                    <p className="jetBranis text-gray-400">Passing Year:</p>
                    <p className="ibm text-gray-500">2022</p>
                  </div>
                </div>
              </div>

              <div className=" ">
                <div className="pl-1 sm:pl-6">
                  <span className="text-[18px] sm:text-xl source ">
                    const = Intermediate{" "}
                  </span>
                </div>
                <div className="flex flex-col gap-4 py-10 pt-5 text-[18px] pl-2 sm:pl-10 ">
                  <div className="flex gap-2 text-sm sm:text-xl">
                    <p className="jetBranis text-gray-400">College:</p>
                    <p className="ibm text-gray-500">"Jinnah Govt College",</p>
                  </div>
                  <div className="flex gap-2 text-sm sm:text-xl">
                    <p className="jetBranis text-gray-400">Subject:</p>
                    <p className="ibm text-gray-500">"Fsc pre-engineering",</p>
                  </div>
                  <div className="flex gap-2 text-sm sm:text-xl">
                    <p className="jetBranis text-gray-400">Passing Year:</p>
                    <p className="ibm text-gray-500">2024</p>
                  </div>
                </div>
              </div>

              <div className=" ">
                <div className="pl-1 sm:pl-6">
                  <span className="text-[18px] sm:text-xl source ">
                    const = Mern{" "}
                  </span>
                </div>
                <div className="flex flex-col gap-4 py-10 pt-5 text-[18px] pl-2 sm:pl-10 ">
                  <div className="flex gap-2 text-sm sm:text-xl">
                    <p className="jetBranis text-gray-400">Institute:</p>
                    <p className="ibm text-gray-500">"SMIT",</p>
                  </div>
                  <div className="flex gap-2 text-sm sm:text-xl">
                    <p className="jetBranis text-gray-400">Course:</p>
                    <p className="ibm text-gray-500">
                      "Mern Stack Development",
                    </p>
                  </div>
                  <div className="flex gap-2 text-sm sm:text-xl">
                    <p className="jetBranis text-gray-400">Passing Year:</p>
                    <p className="ibm text-gray-500">2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between my-5">
            <div className="flex justify-center items-center gap-2">
              <div>
                <span className="text-theme-primary text-2xl">#</span>
                <span className="text-[22px] source">FUn Facts</span>
              </div>

              <div className="h-[1px] sm:w-96 md:w-[500px] lg:w-[700px]  bg-theme-primary"></div>
            </div>
          </div>

          <BulbSection />

          
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
