import React from "react";
import { Github, Linkedin, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"

export const ContactBoat = () => {
    gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#Contact .contactMe", {
      xPercent: -20,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Contact .contactMe",
        // markers: true,
        scrub: 2,
        start: "top 75%",
        end: "top 75%",
        scroll: -1,
      },
    });
    gsap.from("#Contact .contactImage", {
      yPercent: 20,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Contact .contactImage",
        // markers: true,
        scrub: 3,
        start: "top 75%",
        end: "top 75%",
        scroll: -1,
      },
    });
  });
  return (
    <div className="px-4 md:px-8 lg:px-20  bg-theme-background text-theme-white w-full py-2 sm:py-5 ">
      <div className="flex justify-between my-5">
        <div className="flex justify-center items-center gap-2">
          <div>
            <span className="text-theme-primary text-2xl">#</span>
            <span className="text-[22px] source">Contact</span>
          </div>

          <div className="h-[1px] sm:w-48 md:w-[300px] lg:w-[400px]  bg-theme-primary"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center " id="Contact">
        <div className="col-span-1 contactMe">
          <div className="flex flex-col py-2 sm:py-10 pr-10 text-[16px] sm:text-[18px] text-bg-theme-secondary ">
            <div className="border-l-4 !border-[#C778DD] pl-3 roboto text-gray-400">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </div>
          </div>
        </div>

        <div className="col-span-1 flex justify-center items-center flex-col contactImage">
          <div
            className=" flex flex-col gap-y-1 text-[20px] mt-5  mb-0  m-1 sm:mb-0 sm:m-20 z-10 p-3  px-5  bg-theme-background rounded animate-pulse  hover:animate-none focus:animate-none transition duration-1000"
            style={{ boxShadow: "0 0 10px #c778dd" }}
          >
            <p className="text-[15px] sm:text-[20px] font-semibold bg-transparent text-theme-primary source w-full ">
              Message me here!
            </p>
            <div
              className="border border-theme-primary px-2  flex gap-4 bg-transparent ibm cursor-pointer hover:animate-pulse duration-300 "
              style={{ boxShadow: "0 0 5px #c778dd" }}
            >
              <a href="https://github.com/Umarmajeed711" target="_blank">
                <div className="flex items-center gap-4">
                  <Github />
                  <p className="text-xl sm:text-xl">Github</p>
                </div>
              </a>{" "}
            </div>
            <div
              className="border border-theme-primary px-2 flex gap-4 bg-transparent ibm cursor-pointer hover:animate-pulse duration-300"
              style={{ boxShadow: "0 0 5px #c778dd" }}
            >
              <a href="https://www.linkedin.com/in/muhammad-umar-b481882ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                <div className="flex items-center gap-4">
                  <Linkedin />
                  <p className="text-xl sm:text-xl">Linkedin</p>
                </div>
              </a>
            </div>
            <div
              className=" border border-theme-primary px-2 flex gap-4 bg-transparent ibm cursor-pointer hover:animate-pulse duration-300"
              style={{ boxShadow: "0 0 5px #c778dd" }}
            >
              <a
                href="https://wa.me/923116127244?text=Hi%20there%20I%20want%20to%20hire%20you%20for%20a%20project"
                target="_blank"
              >
                <div className="flex items-center gap-4 w-full  ">
                  <FaWhatsapp />
                  <p className="text-xl sm:text-xl">Whatsapp</p>
                </div>

             
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <span className="text-2xl text-theme-primary m-0 p-0 ">&lt;</span>
            <div
              className="w-72 mt-1 bg-theme-primary h-2 rounded-full"
              style={{ boxShadow: "0 0 10px #c778dd ,0 0 20px #C778DD " }}
            ></div>
            <span className="text-2xl text-theme-primary m-0 p-0 bg-transparent">
              /&gt;
            </span>
          </div>
        </div>
      </div>

   
      
    </div>
  );
};
