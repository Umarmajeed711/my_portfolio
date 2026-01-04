import { ArrowUpRight } from "lucide-react";
import React from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#About .aboutMe", {
      xPercent: -20,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#About .aboutMe",
        // markers: true,
        scrub: 2,
        start: "top 75%",
        end: "top 75%",
        scroll: -1,
      },
    });
    gsap.from("#About .aboutImage", {
      yPercent: 20,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#About .aboutImage",
        // markers: true,
        scrub: 2,
        start: "top 80%",
        end: "top 80%",
        scroll: -1,
      },
    });
  });
  return (
    <div className="px-4 md:px-8 lg:px-20  bg-theme-background text-theme-white w-full py-2 sm:py-5 ">
      <div className="flex justify-between my-0 sm:my-5">
        <div className="flex justify-center items-center gap-2">
          <div>
            <span className="text-theme-primary text-2xl">#</span>
            <span className="text-[22px] source">About me</span>
          </div>

          <div className="h-[1px] sm:w-96 md:w-[500px] lg:w-[700px]  bg-theme-primary"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5  " id="About">
        <div className="col-span-1 aboutMe ">
          <div className="flex flex-col gap-2 sm:gap-4 py-5 sm:py-10 text-[18px] roboto">
            <div className="text-theme-secondary">
              Hello, i’m Muhammad Umar!
            </div>
            <div className="text-theme-secondary">
              I am a passionate MERN Stack Developer with a strong focus on
              building full-stack web applications that are scalable, secure,
              and performance-driven.
            </div>

            <div className="text-theme-secondary">
              I specialize in MongoDB, Express.js, React.js, and Node.js, and I
              enjoy working across the entire development lifecycle—from
              designing intuitive user interfaces to building robust backend
              APIs.
            </div>

            <div>
              {/* <a className="px-2 py-1  button ibm " href="/about-me">
                Read More /&gt;
              </a> */}
              <a
                href="/about-me"
                className="
    group inline-flex items-center gap-1.5
    text-[18px] font-medium
    text-[#C778DD]
    relative
  "
              >
                Read More
                <ArrowUpRight
                  size={18}
                  className="
      transition-transform duration-300 ease-out
      group-hover:translate-x-1 group-hover:-translate-y-1
    "
                />
                <span
                  className="
      absolute left-0 -bottom-0.5
      w-0 h-[1px]
      bg-[#C778DD]
      transition-all duration-300
      group-hover:w-full
    "
                />
              </a>
            </div>
          </div>
        </div>

     

        <div className="col-span-1 flex justify-center items-center aboutImage h-full">
          {/* <img
            src="./heroImage2.png"
            alt=""
            className="h-56 w-56 rounded-full myshadow "
          /> */}
          <img
            src="./about.png"
            alt=""
            className="animate-pulse transition-all duration-100"
          />
        </div>
      </div>
    </div>
  );
};
