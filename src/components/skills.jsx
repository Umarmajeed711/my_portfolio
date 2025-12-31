import React from "react";
import { SiExpress, SiNextdotjs } from "react-icons/si";

const SkillBar = ({ name, icon, level, percent }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8 w-full">
      {/* Icon */}
      <div>
        <div
          className="
          h-20 !w-20 border-[10px] rounded-full
          flex justify-center items-center
          hover:scale-105 transition duration-300 overflow-hidden
        "
          style={{ boxShadow: "0 0 25px #c778dd" }}
        >
          <img src={icon} alt={name} className="h-10 sm:h-12" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col w-full">
        <div className="flex justify-between text-theme-secondary ibm">
          <span>&lt;{name}/&gt;</span>
          <span className="text-sm">{level}</span>
        </div>

        <div
          className="w-full h-2 bg-[#daabe9] rounded"
          style={{ boxShadow: "0 0 10px #daabe9" }}
        >
          <div
            className="h-2 bg-theme-primary rounded transition-all duration-700 ease-out"
            style={{ width: percent, boxShadow: "0 0 5px #c778dd" }}
          />
        </div>
      </div>
    </div>

    //  <div className="flex items-end gap-10  w-full ">
    //           <div className="">
    //             <div
    //               className="text-center   h-20 !w-20  border-[10px]  rounded-full flex justify-center items-center  overflow-hidden hover:scale-[1.1] transition-all duration-400"
    //               style={{ boxShadow: "0 0 30px #c778dd" }}
    //             >
    //               <img src="./html.png" alt="html" className="h-10 sm:h-12 " />
    //             </div>
    //           </div>
    //           <div className="flex flex-col w-full  ">
    //             <div className="flex justify-between items-center  ibm">
    //               <span className="text-theme-secondary">&lt;HTML/&gt;</span>
    //               <span>85%</span>
    //             </div>
    //             <div
    //               className="w-full h-[10px] bg-[#daabe9] relative rounded"
    //               style={{ boxShadow: "0 0 10px #daabe9" }}
    //             >
    //               <div
    //                 className="w-[85%] text-theme-background h-[10px] px-2 font-bold text-end text-[10px] m-0 p-0 leading-none aboslute bg-theme-primary top-0   rounded"
    //                 style={{ boxShadow: "0 0 5px #c778dd" }}
    //               ></div>
    //             </div>
    //           </div>
    //         </div>
  );
};

const SkillCard = ({ icon, name }) => (
  <div
    className="

       flex flex-col items-center gap-2
    p-4 rounded-xl
    border border-theme-secondary/20
    hover:border-theme-primary
    hover:-translate-y-1 hover:scale-105
    transition-all duration-300
    "
  >
    <img src={icon} alt={name} className="h-12 w-12 sm:h-16 sm:w-16" />
    <p className="text-sm">{name}</p>
  </div>
);

const Skills = () => {
  const languages = [
    {
      name: "HTML",
      icon: "./html.png",
      level: "Advanced",
      percent: "85%",
    },
    {
      name: "CSS",
      icon: "./css3.png",
      level: "Advanced",
      percent: "85%",
    },
    {
      name: "JavaScript",
      icon: "./javascript.png",
      level: "Intermediate",
      percent: "80%",
    },
    {
      name: "TypeScript",
      icon: "./typescript.png",
      level: "Intermediate",
      percent: "75%",
    },
  ];

  const frameworks = [
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
    {
      name: "GSAP",
      icon: "./gsap.jpeg",
    },
    {
      name: "Tanstack Query",
      icon: "./tanstack.png",
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
    {
      name: "Vercel",
      icon: "./vercel.png",
    },
    {
      name: "Netlify",
      icon: "./netlify.png",
    },
    {
      name: "Postman",
      icon: "./Postman.png",
    },
    {
      name: "Thunder Client",
      icon: "./thunderclient.png",
    },
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
      name: "MongoDB",
      icon: "./monog-db.png",
    },
    {
      name: "PostgreSQL",
      icon: "./elephant.png",
    },
    {
      name: "MySQL",
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
              <img src="./whitelogo.png" alt="" className="animate-none" />
            </div>

            <div className="flex justify-evenly">
              <img
                src="./outline.png"
                alt=""
                className="sm:!ml-10 sm:mt-24 animate-none"
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
          <div className="flex flex-col gap-6 h-full px-5 sm:px-10 lg:px-16">
            <div className="text-theme-secondary text-xl source">
              &lt;Languages/&gt;
            </div>

            {languages?.map((lang, i) => (
              <SkillBar
                key={i}
                name={lang.name}
                icon={lang.icon}
                level={lang.level}
                percent={lang.percent}
              />
            ))}
          </div>
        </div>
      </div>

      {/* libraries and Frameworks */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-2 sm:my-5  ">
        <div className="col-span-3">
          <div className="flex flex-col justify-center  items-center">
            <div className="text-2xl font-bold mt-5 capitalize jetBranis">
              Libraries & Frameworks
            </div>

            <div className="flex gap-5 m-5 justify-center items-center">
              <div className="flex gap-8 flex-wrap justify-center">
                {frameworks?.map((each, i) => {
                  return (
                    // <div key={i} className="flex flex-col gap-1 items-center">
                    //   <div>
                    //     <img
                    //       src={each?.icon}
                    //       alt={each?.icon}
                    //       className="h-12 w-12 sm:h-16 sm:w-16 "
                    //     />
                    //     {/* <SiExpress size={45} />  */}
                    //   </div>
                    //   <p>{each?.name}</p>
                    // </div>

                    <SkillCard key={i} icon={each.icon} name={each.name} />
 
 
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
                    <SkillCard key={i} icon={each.icon} name={each.name} />
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
                   <SkillCard key={i} icon={each.icon} name={each.name} />
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
