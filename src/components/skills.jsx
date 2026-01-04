import React, { useEffect } from "react";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SkillCardSection from "./skillCard";

const SkillBar = ({ name, icon, level, percent, className }) => {
  return (
    <div
      className={`flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-8 w-full ${
        className || ""
      }`}
    >
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

// const SkillCard = ({ icon, name, className }) => (
//   <div
//     className={`
//       flex flex-col items-center gap-2
//       p-4 rounded-xl
//       border border-theme-secondary/20
//       hover:border-theme-primary
//       hover:-translate-y-1 hover:scale-105
//       transition-all duration-300
//       ${className || ""}
//       `}
//   >
//     <img src={icon} alt={name} className="h-12 w-12 sm:h-16 sm:w-16" />
//     <p className="text-sm">{name}</p>
//   </div>
// );

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

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#Skills .skill0", {
      xPercent: 20,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Skills .skill0",
        // markers: true,
        scrub: 2,
        start: "top 80%",
        end: "top 80%",
        scroll: -1,
      },
    });
    gsap.from("#Skills .skill1", {
      xPercent: 20,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Skills .skill1",
        // markers: true,
        scrub: 2,
        start: "top 75%",
        end: "top 75%",
        scroll: -1,
      },
    });
    gsap.from("#Skills .skill2", {
      xPercent: 20,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Skills .skill2",
        // markers: true,
        scrub: 2,
        start: "top 70%",
        end: "top 70%",
        scroll: -1,
      },
    });
    gsap.from("#Skills .skill3", {
      xPercent: 20,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Skills .skill3",
        //  markers: true,
        scrub: 2,
        start: "top 75%",
        end: "top 90%",
        scroll: -1,
      },
    });
    // gsap.from("#Stagger1 .staggerBox1", {
    //   yPercent: 30,
    //   opacity: 0,
    //   duration: 1,
    //   stagger: 0.3,
    //   scrollTrigger: {
    //     trigger: "#Stagger1 .staggerBox1",
    //     markers: true,
    //     scrub: 1,
    //     start: "top 80%",
    //     end: "top 70%",
    //     scroll: -1,
    //   },
    // });
    // gsap.from("#Stagger2 .staggerBox2", {
    //   yPercent: 30,
    //   opacity: 0,
    //   duration: 1,
    //   stagger: 0.3,
    //   scrollTrigger: {
    //     trigger: "#Stagger2 .staggerBox2",
    //     markers: true,
    //     scrub: 2,
    //     start: "top 80%",
    //     end: "top 70%",
    //     // scroll: -1,
    //   },
    // });
    // gsap.from("#Stagger3 .staggerBox3", {
    //   yPercent: 30,
    //   opacity: 0,
    //   duration: 1,
    //   stagger: 0.3,
    //   scrollTrigger: {
    //     trigger: "#Stagger3 .staggerBox3",
    //     markers: true,
    //     scrub: 2,
    //     start: "top 80%",
    //     end: "top 70%",
    //     // scroll: -1,
    //   },
    // });
  });


//   useEffect(() => {
//   const ctx = gsap.context(() => {
//     [
//       { section: "#Stagger1", box: ".staggerBox1" },
//       { section: "#Stagger2", box: ".staggerBox2" },
//       { section: "#Stagger3", box: ".staggerBox3" },
//     ].forEach(({ section, box }) => {
//       gsap.from(`${section} ${box}`, {
//         yPercent: 30,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.3,
//         scrollTrigger: {
//           trigger: section,
//           start: "top 80%",
//           end: "top 60%",
//           scrub: 2,
//           markers: true,
//         },
//       });
//     });
//   });

//   return () => ctx.revert();
// }, []);

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
            <div id="Skills" className="flex flex-col gap-6 h-full">
              {languages?.map((lang, i) => (
                <SkillBar
                  key={i}
                  name={lang.name}
                  icon={lang.icon}
                  level={lang.level}
                  percent={lang.percent}
                  className={`skill${i}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>


      

       <SkillCardSection/>
    </div>
  );
};

export default Skills;
