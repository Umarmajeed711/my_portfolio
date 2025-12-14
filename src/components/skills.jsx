import React from "react";
import { SiExpress, SiNextdotjs } from "react-icons/si";

const Skills = () => {
  let vercel = (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 76 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000000" />
    </svg>
  );

  let vsCode = (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#007ACC" d="M4 32l64 32-64 32V32z" />
      <path fill="#1F1F1F" d="M124 4l-36 36 36 36V4z" />
    </svg>
  );

  let nextJs = <SiNextdotjs size={40} color="#fff" />;
  let gsap = (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 256 256"
      fill="#88CE02"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h256v256H0z" fill="none" />
      <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm0 240c-61.9 0-112-50.1-112-112S66.1 16 128 16s112 50.1 112 112-50.1 112-112 112z" />
      <path d="M168 64H88v128h80V64z" />
    </svg>
  );

  // { id: 1, icon: <SiMongodb size={45} /> },
  //     { id: 2, icon: <SiExpress size={45} /> },
  //     { id: 3, icon: <SiReact size={45} /> },
  //     { id: 4, icon: <SiNodedotjs size={45} /> },

  const frameWorks = [
    {
      name: "React",
      icon: "./atom.png",
    },
    {
      name: "npm",
      icon: "./npm.png",
    },
    // {
    //   name: "Next.js",
    //   icon: <SiExpress size={40} />,
    // },
    {
      name: "Tailwind",
      icon: "./tailwind.png",
    },
    {
      name: "Bootstrap",
      icon: "./bootstrap.png",
    },
    {
      name: "MUI",
      icon: "./mui.png",
    },
    // {
    //   name: "GSAP",
    //   icon: gsap,
    // },
    {
      name: "TanstackQuery",
      icon: "./bootstrap.png",
    },
  ];

  const tools = [
    {
      name: "Git",
      icon: "./git.png",
    },
    {
      name: "Github",
      icon: "./github.png",
    },
    // {
    //   name: "Vercel",
    //   icon: vercel,
    // },
    {
      name: "Netlify",
      icon: "./netlify.png",
    },
    {
      name: "PostMan",
      icon: "./bootstrap.png",
    },
    {
      name: "Thunder Client",
      icon: "./mui.png",
    },
    // {
    //   name: "VS Code",
    //   icon: vsCode,
    // },
    {
      name: "Cursor",
      icon: "./cursor-ai.png",
    },
  ];

  const backend = [
    {
      name: "Express",
      icon: "./express.png",
    },
    {
      name: "Node.js",
      icon: "./node-js.png",
    },
    {
      name: "Mongo Db",
      icon: "./monog-db.png",
    },
    {
      name: "PostgreSql",
      icon: "./elephant.png",
    },
    {
      name: "MySql",
      icon: "./database.png",
    },
  ];
  return (
    <div className="px-4 md:px-8 lg:px-20  bg-theme-background text-theme-white w-full py-5 ">
      <div className="flex justify-between my-2 sm:my-5">
        <div className="flex justify-center items-center gap-2">
          <div>
            <span className="text-theme-primary text-2xl">#</span>
            <span className="text-[22px] source">Skills</span>
          </div>

          <div className="h-[1px] sm:w-96 md:w-[500px] lg:w-[700px]  bg-theme-primary"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Animated Images */}
        <div className="col-span-1  h-full">
          <div className="flex flex-col gap-5 py-10 h-full">
            <div className="flex justify-between">
              <img
                src="./Dots.png"
                alt=""
                className="sm:!ml-20  sm:mt-4 animate-pulse"
              />
              {/* <img src="./html-box.png" alt="" className="h-28 w-28   sm:!-mt-5"/> */}
              <div className="h-28 w-28 border border-theme-secondary sm:!pl-20 sm:!-mt-5"></div>
            </div>
            <div className="flex justify-center">
              <img src="./whitelogo.png" alt="" className="animate-bounce" />
            </div>

            <div className="flex justify-evenly">
              <img
                src="./outline.png"
                alt=""
                className="sm:!ml-10 sm:mt-24 animate-spin"
              />

              <img
                src="./Dots.png"
                alt=""
                className="h-20 w-20 animate-pulse sm:mt-14 sm:-mr-20"
              />
            </div>
          </div>
        </div>

        {/* Languages Div */}

        <div className="col-span-1">
          <div className="flex flex-col gap-5 h-full px-5 sm:px-10 lg:px-16 ">
            <div className="text-theme-secondary text-xl source">
              &lt;Languages/&gt;
            </div>

            {/* HTML */}
            <div className="flex items-end gap-10  w-full ">
              <div className="">
                <div
                  className="text-center   h-20 !w-20  border-[10px]  rounded-full flex justify-center items-center  overflow-hidden hover:scale-[1.1] transition-all duration-400"
                  style={{ boxShadow: "0 0 30px #c778dd" }}
                >
                  <img src="./html.png" alt="html" className="h-10 sm:h-12 " />
                </div>
              </div>
              <div className="flex flex-col w-full  ">
                <div className="flex justify-between items-center  ibm">
                  <span className="text-theme-secondary">&lt;HTML/&gt;</span>
                  <span>85%</span>
                </div>
                <div
                  className="w-full h-[10px] bg-[#daabe9] relative rounded"
                  style={{ boxShadow: "0 0 10px #daabe9" }}
                >
                  <div
                    className="w-[85%] text-theme-background h-[10px] px-2 font-bold text-end text-[10px] m-0 p-0 leading-none aboslute bg-theme-primary top-0   rounded"
                    style={{ boxShadow: "0 0 5px #c778dd" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* CSS */}
            <div className="flex items-end gap-10  w-full">
              <div className="">
                <div
                  className="text-center   h-20 !w-20  border-[10px]  rounded-full flex justify-center items-center overflow-hidden hover:scale-[1.1] transition-all duration-400 "
                  style={{ boxShadow: "0 0 30px #c778dd" }}
                >
                  <img src="./css3.png" alt="css" className="h-10 sm:h-12 " />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center  ibm">
                  <span className="text-theme-secondary">&lt;CSS/&gt;</span>
                  <span>85%</span>
                </div>
                <div
                  className="w-full h-[10px] bg-[#daabe9] relative rounded"
                  style={{ boxShadow: "0 0 10px #daabe9" }}
                >
                  <div
                    className="w-[85%] text-theme-background h-[10px] px-2 font-bold text-end text-[10px] m-0 p-0 leading-none aboslute bg-theme-primary top-0   rounded"
                    style={{ boxShadow: "0 0 5px #c778dd" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Javascript */}
            <div className="flex items-end gap-10  w-full">
              <div className="">
                <div
                  className="text-center   h-20 !w-20  border-[10px]  rounded-full flex justify-center items-center overflow-hidden hover:scale-[1.1] transition-all duration-400"
                  style={{ boxShadow: "0 0 30px #c778dd" }}
                >
                  <img
                    src="./javascript.png"
                    alt=""
                    className="h-10 sm:h-12 rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full ">
                <div className="flex justify-between items-center  ibm">
                  <span className="text-theme-secondary">
                    &lt;JavaScript/&gt;
                  </span>
                  <span>80%</span>
                </div>
                <div
                  className="w-full h-[10px] bg-[#daabe9] relative rounded"
                  style={{ boxShadow: "0 0 10px #daabe9" }}
                >
                  <div
                    className="w-[80%] text-theme-background h-[10px] px-2 font-bold text-end text-[10px] m-0 p-0 leading-none aboslute bg-theme-primary top-0   rounded"
                    style={{ boxShadow: "0 0 5px #c778dd" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* TypeScript */}
            <div className="flex items-end gap-10  w-full">
              <div className="">
                <div
                  className="text-center   h-20 !w-20  border-[10px]  rounded-full flex justify-center items-center overflow-hidden hover:scale-[1.1] transition-all duration-400 "
                  style={{ boxShadow: "0 0 30px #c778dd" }}
                >
                  <img
                    src="./typescript.png"
                    alt=""
                    className="h-10 sm:h-12 rounded-full "
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center  ibm">
                  <span className="text-theme-secondary">
                    &lt;TypeScript/&gt;
                  </span>
                  <span>75%</span>
                </div>
                <div
                  className="w-full h-[10px] bg-[#daabe9] relative rounded"
                  style={{ boxShadow: "0 0 10px #daabe9" }}
                >
                  <div
                    className="w-[75%] text-theme-background px-2 h-[10px] font-bold text-end text-[10px] m-0 p-0 leading-none aboslute bg-theme-primary top-0   rounded"
                    style={{ boxShadow: "0 0 5px #c778dd" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* libraries and Frameworks */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-2 sm:my-5  ">
        <div className="col-span-3">
          <div className="flex flex-col justify-center  items-center">
            <div className="text-2xl font-bold mt-5 capitalize jetBranis">
              Libraries & FrameWorks
            </div>

            <div className="flex gap-5 m-5 justify-center items-center">
              <div className="flex gap-8 flex-wrap justify-center">
                {frameWorks?.map((each, i) => {
                  return (
                    <div key={i} className="flex flex-col gap-1 items-center">
                      <div>
                        <img
                          src={each?.icon}
                          alt={each?.icon}
                          className="h-12 w-12 sm:h-16 sm:w-16 "
                        />
                      </div>
                      <p>{each?.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Hosting */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-5  ">
        <div className="col-span-3">
          <div className="flex flex-col justify-center  items-center">
            <div className="text-2xl font-bold mt-5 capitalize jetBranis">
              Tools & Hostings
            </div>

            <div className="flex gap-5 m-5 justify-center items-center">
              <div className="flex gap-4 flex-wrap justify-center">
                {tools?.map((each, i) => {
                  return (
                    <div key={i} className="flex flex-col gap-1 items-center">
                      <div>
                        <img
                          src={each?.icon}
                          alt=""
                          className="h-12 w-12 sm:h-16 sm:w-16 "
                        />
                      </div>
                      <p>{each?.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backend & DataBases */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-5  ">
        <div className="col-span-3">
          <div className="flex flex-col justify-center  items-center">
            <div className="text-2xl font-bold mt-5 capitalize jetBranis">
              Backend & DataBases
            </div>

            <div className="flex gap-5 m-5 justify-center items-center">
              <div className="flex gap-4 flex-wrap justify-center">
                {backend?.map((each, i) => {
                  return (
                    <div key={i} className="flex flex-col gap-1 items-center">
                      <div>
                        <img
                          src={each?.icon}
                          alt=""
                          className="h-12 w-12 sm:h-16 sm:w-16 "
                        />
                      </div>
                      <p>{each?.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Skills;
