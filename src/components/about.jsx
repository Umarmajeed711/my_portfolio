import React from "react";

export const About = () => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className="col-span-1 ">
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
              <a className="px-2 py-1  button ibm " href="/about-me">
                Read More /&gt;
              </a>
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
    </div>
  );
};
