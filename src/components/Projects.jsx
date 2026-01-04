import React from "react";
import "../App.css";
import { Pencil, Trash2 } from "lucide-react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Projects = ({
  projects = [],
  loading = false,
  onEdit = () => {},
  deleteProject = () => {},
  isAdmin = false,
}) => {
  // const projects = [
  //   {
  //     title: "Ecomerrce",
  //     description: "Its my first project,Ecommerce",
  //     image: "./project1.png",
  //     live_link: "http://abc.com",
  //     code_link: "http://abc.com",
  //     isTopProject: "http://abc.com",
  //   },
  //   {
  //     title: "Application",
  //     description: "Its my Appicarion project,APp",
  //     image: "./project2.png",
  //     live_link: "http://abc.com",
  //     code_link: "http://abc.com",
  //     isTopProject: "http://abc.com",
  //   },
  //   {
  //     title: "Ecomerrce",
  //     description: "Its my first project,Ecommerce",
  //     image: "./project3.png",
  //     live_link: "http://abc.com",
  //     code_link: "http://abc.com",
  //     isTopProject: "http://abc.com",
  //   },
  //   {
  //     title: "Ecomerrce",
  //     description: "Its my first project,Ecommerce",
  //     image: "./project4.png",
  //   },
  // ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#Projects .project", {
      yPercent: 20,
      duration: 1,
      opacity: 0,
      stagger: "0.4",
      scrollTrigger: {
        trigger: "#Projects .project",
        // markers: true,
        scrub: 2,
        start: "top 75%",
        end: "top 75%",
        scroll: -1,
      },
    });
  });
  return (
    <div className=" bg-theme-background h-full py-5">
      <div>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 " id="Projects"> 
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-full h-80 animate-pulse shadow-md rounded-lg bg-slate-200 col-span-1 py-2 md:py-3 project"
              ></div>
            ))}
          </div>
        ) : projects?.length < 1 ? (
          <div className="w-full col-span-4  h-40 flex justify-center items-center  text-theme-primary">
            Projects Not Found
          </div>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 "
            id="Projects"
          >
            {projects?.map((project, i) => {
              return (
                <div key={i} className="col-span-1 py-2 md:py-3 project">
                  <div className="relative group projects rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-theme-secondary/40 bg-theme-background">
                    {/* Image */}
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-3 flex flex-col gap-2">
                      {/* Title */}
                      <p className="border-l-4 border-theme-primary pl-2 text-xl font-medium text-theme-primary">
                        {project.title}
                      </p>

                      {/* Description */}
                      <p className="text-sm italic text-theme-secondary line-clamp-3">
                        {project.description}
                      </p>

                      {/* Buttons */}
                      <div className="flex gap-2 mt-2">
                        <a
                          href={project.live_link}
                          target="_blank"
                          className="border border-theme-secondary px-3 py-1 text-sm rounded hover:bg-theme-primary hover:text-theme-background transition"
                        >
                          Live /&gt;
                        </a>
                        <a
                          href={project.code_link}
                          target="_blank"
                          className="border border-theme-secondary px-3 py-1 text-sm rounded hover:bg-theme-primary hover:text-theme-background transition"
                        >
                          Code /&gt;
                        </a>
                      </div>
                    </div>

                    {/* Admin Edit Button */}
                    {isAdmin && (
                      <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 bg-transparent">
                        <button
                          onClick={() => onEdit(project)}
                          // className="border border-theme-primary text-[#ABB2BF] px-3 py-1 text-xs rounded  transition-all duration-300 hover:scale-105"
                          className="edit-buttons"
                        >
                          <Pencil
                            size={18}
                            className="edit hover:!text-theme-primary"
                          />
                        </button>
                        <button
                          onClick={() => deleteProject(project)}
                          // className="border border-theme-primary text-[#ABB2BF] hover:text-[#E5484D] px-3 py-1 text-xs rounded  transition-all duration-300 hover:scale-105"
                          className="edit-buttons"
                        >
                          <Trash2
                            size={18}
                            className="edit hover:!text-theme-primary"
                          />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
