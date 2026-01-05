import React from "react";
import Projects from "../../components/Projects";
import Navbar from "../../components/navbar";
import { Footer } from "../../components/footer";
import BulbSection from "../../components/BulbSection";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CertificateSection from "../../components/Certificate";

const About = () => {
  const work = [
    "Develop full-stack applications using MERN Stack",

    "Build secure and scalable REST APIs",

    "Create responsive and interactive React interfaces",

    "Manage and optimize MongoDB databases",

    "Implement authentication & authorization",

    "Ensure clean code and performance optimization",
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#About .nameSection", {
      x: -50,
      duration: 1,
      opacity: 0,
      delay: 0,
    });

    gsap.from("#About .picSection", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0,
    });

    gsap.from("#WhatIDO .whatImage", {
      xPercent: -20,
      duration: 1,
      opacity: 0,
      stagger: "0.4",
      scrollTrigger: {
        trigger: "#WhatIDO .whatImage",
        // markers: true,
        scrub: 2,
        start: "top 75%",
        end: "top 75%",
        scroll: -1,
      },
    });

    gsap.from("#WhatIDO .whatText", {
      xPercent: 10,
      duration: 1,
      opacity: 0,
      stagger: "0.4",
      scrollTrigger: {
        trigger: "#WhatIDO .whatText",
        // markers: true,
        scrub: 2,
        start: "top 75%",
        end: "top 75%",
        scroll: -1,
      },
    });

    gsap.from("#education .edu", {
      yPercent: 20,
      duration: 1,
      opacity: 0,
      stagger: 0.4,
      scrollTrigger: {
        trigger: "#education .edu",
        // markers: true,
        scrub: 2,
        start: "top 75%",
        end: "top 75%",
        scroll: -1,
      },
    });
  });
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

          {/* About TOp section */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 " id="About">
            <div className="col-span-1 nameSection ">
              <div className="flex flex-col gap-4 py-0 sm:py-10 text-[16px] sm:text-[18px] roboto">
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

            <div className="col-span-1 flex justify-center items-center picSection">
              <img
                src="./heroImage.png"
                alt=""
                className="h-56 md:h-96 w-56 md:w-96  myshadow "
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 " id="WhatIDO">
            <div className="col-span-1 flex justify-center items-center whatImage ">
              <img
                src="./about.png"
                alt=""
                className="h-56 md:h-72  animate-pulse transition-all duration-100"
              />
            </div>

            <div className="col-span-1 whatText">
              <div className="flex flex-col gap-4 py-0 px-4 sm:py-10 text-[16px] sm:text-[18px] roboto">
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

          {/* Education */}
          <div className="flex justify-between my-5">
            <div className="flex justify-center items-center gap-2">
              <div>
                <span className="text-theme-primary text-2xl">#</span>
                <span className="text-[22px] source">Education</span>
              </div>

              <div className="h-[1px] sm:w-96 md:w-[500px] lg:w-[700px]  bg-theme-primary"></div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 py-2 sm:py-4 "
            id="education"
          >
            <div className="col-span-1 py-0 edu">
              <div className="pl-1 sm:pl-2">
                <span className="text-[18px] sm:text-xl source ">
                  const = <span className="text-gray-200"> Matriculation</span>
                </span>
              </div>
              <div className="flex flex-col gap-4  py-4 sm:py-6 pt-5 text-[18px] pl-2 sm:pl-4 ">
                <span>&#123;</span>
                <div className="flex gap-2 text-sm sm:text-xl">
                  <p className="jetBranis text-gray-400">School:</p>
                  <p className="ibm text-gray-500">"A.R.C.A School",</p>
                </div>
                <div className="flex gap-2 text-sm sm:text-xl">
                  <p className="jetBranis text-gray-400">Subject:</p>
                  <p className="ibm text-gray-500">"Computer Science",</p>
                </div>
                <div className="flex gap-2 text-sm sm:text-xl">
                  <p className="jetBranis text-gray-400">Passing Year:</p>
                  <p className="ibm text-gray-500">2022</p>
                </div>
                <span>&#125;;</span>
              </div>
            </div>

            <div className="col-span-1 py-0 edu">
              <div className="pl-1 sm:pl-2">
                <span className="text-[18px] sm:text-xl source ">
                  const = <span className="text-gray-200">Intermediate</span>
                </span>
              </div>
              <div className="flex flex-col gap-4 py-4 sm:py-6 pt-5 text-[18px] pl-2 sm:pl-4 ">
                <span>&#123;</span>
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
                <span>&#125;;</span>
              </div>
            </div>

            <div className="col-span-1 py-0 edu">
              <div className="pl-1 sm:pl-2">
                <span className="text-[18px] sm:text-xl source ">
                  const = <span className="text-gray-200">Mern</span>
                </span>
              </div>
              <div className="flex flex-col gap-4 py-4 sm:py-6 pt-5 text-[18px] pl-2 sm:pl-4 ">
                <span>&#123;</span>
                <div className="flex gap-2 text-sm sm:text-xl">
                  <p className="jetBranis text-gray-400">Institute:</p>
                  <p className="ibm text-gray-500">"SMIT",</p>
                </div>
                <div className="flex gap-2 text-sm sm:text-xl">
                  <p className="jetBranis text-gray-400">Course:</p>
                  <p className="ibm text-gray-500">"Mern Stack Development",</p>
                </div>
                <div className="flex gap-2 text-sm sm:text-xl">
                  <p className="jetBranis text-gray-400">Passing Year:</p>
                  <p className="ibm text-gray-500">2025</p>
                </div>
                <span>&#125;;</span>
              </div>
            </div>
          </div>
          <CertificateSection />

          <div className="hidden md:flex  justify-between md:my-5 ">
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
