import React, { useEffect } from "react";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SkillCard = ({ icon, name, className }) => (
  <div
    className={`
      flex flex-col items-center gap-2
      p-4 rounded-xl
      border border-theme-secondary/20
      hover:border-theme-primary
      hover:-translate-y-1 hover:scale-105
      transition-all duration-300
      ${className || ""}
      `}
  >
    <img src={icon} alt={name} className="h-12 w-12 sm:h-16 sm:w-16" />
    <p className="text-sm">{name}</p>
  </div>
);

const SkillCardSection = () => {
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
      name: "Cursor",
      icon: "./cursor-ai.png",
    },
    {
      name: "Thunder Client",
      icon: "./thunderclient.png",
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
    gsap.from("#stag .stagBox", {
      rotate: 45,
      opacity: 0,
      duration: 1,
      // stagger: 0.8,
      scrollTrigger: {
        trigger: "#stag .stagBox",
        // markers: true,
        scrub: 2,
        start: "top 80%",
        end: "top 70%",
        scroll: -1,
      },
    });
    // gsap.from("#Stagger2 .staggerBox2", {
    //   xPercent: 30,
    //   opacity: 0,
    //   duration: 1,
    // //   stagger: 0.3,
    //   scrollTrigger: {
    //     trigger: "#Stagger2 .staggerBox2",
    //     // markers: true,
    //     scrub: 2,
    //     start: "top 80%",
    //     end: "top 70%",
    //     scroll: -1,
    //   },
    // });
    // gsap.from("#Stagger3 .staggerBox3", {
    //   rotate: 30,
    //   opacity: 0,
    //   duration: 1,
    //   stagger: 0.3,
    //   scrollTrigger: {
    //     trigger: "#Stagger3 .staggerBox3",
    //     // markers: true,
    //     scrub: 2,
    //     start: "top 80%",
    //     end: "top 70%",
    //     scroll: -1,
    //   },
    // });
  });
  return (
   
    <div>

   
      {/* libraries and Frameworks */}

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 my-2 sm:my-5  "
        
      >
        <div className="col-span-3">
          <div className="flex flex-col justify-center  items-center">
            <div className="text-xl sm:text-2xl font-bold mt-5 capitalize jetBranis">
              Libraries & Frameworks
            </div>

            <div className="flex gap-5 m-5 justify-center items-center">
              <div className="flex gap-8 flex-wrap justify-center" id="stag">
                {frameworks?.map((each, i) => {
                  return (
                    <SkillCard
                      key={i}
                      icon={each.icon}
                      name={each.name}
                      className="stagBox"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Hosting */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 my-5  "
        // id="Stagger2"
      >
        <div className="col-span-3">
          <div className="flex flex-col justify-center  items-center">
            <div className="text-xl sm:text-2xl font-bold mt-5 capitalize jetBranis">
              Tools & Hostings
            </div>

            <div className="flex gap-5 m-5 justify-center items-center">
              <div className="flex gap-4 flex-wrap justify-center" id="stag">
                {tools?.map((each, i) => {
                  return (
                    <SkillCard
                      key={i}
                      icon={each.icon}
                      name={each.name}
                      className="stagBox"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backend & DataBases */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 my-5"
        // id="Stagger3"
      >
        <div className="col-span-3">
          <div className="flex flex-col justify-center  items-center">
            <div className="text-xl sm:text-2xl font-bold mt-5 capitalize jetBranis">
              Backend & DataBases
            </div>

            <div className="flex gap-5 m-5 justify-center items-center">
              <div className="flex gap-4 flex-wrap justify-center" id="stag">
                {backend?.map((each, i) => {
                  return (
                    <SkillCard
                      key={i}
                      icon={each.icon}
                      name={each.name}
                      className="stagBox"
                    />
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

export default SkillCardSection;
