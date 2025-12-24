import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import Projects from "../../components/Projects";
import Skills from "../../components/skills";
import { About } from "../../components/about";
// import { Contact } from "../../components/contact";
import Modal from "../../components/modal";
import { Footer } from "../../components/footer";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import Navbar from "../../components/navbar";
import { ReactTyped } from "react-typed";
import InteractiveMernIcons from "../../components/mernIcons";
import api from "../../components/api";
import AddProject from "../../components/addProject";
import Swal from "sweetalert2";
import { GlobalContext } from "../../context/Context";
import { ArrowUpRight } from "lucide-react";
import { ContactBoat } from "../../components/contact";

const Home = () => {
  const [bulbOn, setBulbOn] = useState(false);

  const { state } = useContext(GlobalContext);

  let isAdmin = state?.user.isAdmin;

  const [showModal, setShowModal] = useState(false);
  const [projectData, setProjectData] = useState({});
  const [toggle, setToggle] = useState(false);

  const mernIcons = [
    { id: 1, icon: <SiMongodb size={45} /> },
    { id: 2, icon: <SiExpress size={45} /> },
    { id: 3, icon: <SiReact size={45} /> },
    { id: 4, icon: <SiNodedotjs size={45} /> },
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) =>
        prev < mernIcons.length - 1 ? prev + 1 : prev
      );
    }, 900); // change icon every 900ms

    return () => clearInterval(interval);
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % mernIcons.length);
    }, 1000); // change every 1 sec
    return () => clearInterval(timer);
  }, []);

  const [projects, setProjects] = useState([]);
  const [loading, setloading] = useState(false);

  const getProjects = async () => {
    setloading(true);

    try {
      let response = await api.get("projects?top=true");

      setProjects(response?.data?.projects);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, [toggle]);

  const editProject = (project) => {
    setProjectData(project);
    setShowModal(true);
  };

  const deleteProject = async (project) => {
    const id = project?._id;

    // 🔥 Show confirmation alert first
    const result = await Swal.fire({
      title: "Are You Sure?",
      text: "Do you want to delete this project?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    });

    // ✅ If user confirms
    if (result?.isConfirmed) {
      try {
        let response = await api.delete(`/project?id=${id}`);
        setToggle(!toggle); // refresh UI

        // Success toast
        Swal.fire({
          icon: "success",
          title: "Project deleted successfully",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      } catch (error) {
        // Error toast
        Swal.fire({
          icon: "error",
          title: error?.response?.data?.message || "Something went wrong",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    }
  };

  return (
    <>
      <div className="w-full">
        <Navbar />
        {/* hero section */}
        <div className="home my-10 md:my-0 gap-3 px-4 md:px-8 lg:px-20  w-full  grid grid-cols-1 md:grid-cols-3 ">
          {/* hero div */}
          <div className="flex flex-col justify-center gap-1 sm:gap-4 col-span-1 md:col-span-2 h-full source">
            <p className="text-xl md:text-2xl text-theme-secondary">
              Hello World /&gt;
            </p>

            <p className="text-4xl md:text-5xl lg:text-[56px] font-bold text-theme-primary">
              Muhammad Umar
            </p>

            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-theme-white flex items-center gap-2">
              MERN Stack Developer
              <span className="hover:scale-110 transition">
                {mernIcons[index].icon}
              </span>
              {/* <ReactTyped
                strings={["Developer", "SEO EXPERT", "SMM Expert"]}
                typeSpeed={50}
                loop
                backSpeed={20}
                cursorChar=">"
                showCursor={true}
              /> */}
              {/* <div
                className="icons-row"
                style={{ display: "flex", gap: "20px" }}
              >
                {mernIcons.map((item, index) => (
                  <div
                    key={item.id}
                    style={{
                      opacity: index <= visibleIndex ? 1 : 0,
                      transition: "opacity 0.8s ease",
                    }}
                  >
                    {item.icon}
                  </div>
                ))}
              </div> */}
            </p>

            <div>
              {/* <a
                href="mailto:mu493790@gmail.com?subject=Hire%20Request&body=Hi%20Muhammad Umar%20I%20saw%20your%20portfolio%20and%20I%20want%20to%20hire%20you."
                target="_blank"
                className="px-2 py-1  button ibm"
              >
                Hire me /&gt;
              </a> */}

              <a
                href="mailto:mu493790@gmail.com?subject=Hire%20Request"
                className="
    inline-flex items-center gap-2
    mt-4 px-5 py-2
    border border-theme-primary
    text-theme-primary
    hover:bg-theme-primary hover:text-black
    transition-all duration-300
    rounded
    ibm
  "
              >
                Hire Me
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          {/* hero image */}
          <div className="heroImg col-span-1 flex justify-center items-center flex-col h-full ">
            <div className="">
              <img
                src="./hero.png"
                alt=""
                className="h-56 md:h-80 w-56 md:w-80"
              />
            </div>
            <div>
              <div
                className="flex flex-start gap-2 items-center relative  group  px-4 source border hover:border-theme-primary shadow-white shadow-lg hover:shadow-theme-primary  font-medium  leading-9 transition-all duration-300"
                style={{
                  letterSpacing: ".1em",
                  wordSpacing: ".2em",
                  boxSizing: "border-box",
                }}
              >
                <span className="h-4 w-4 bg-theme-primary"></span>
                <span className="text-[11px] md:text-[11px] lg:text-[14px] text-theme-secondary ">
                  Currently working on
                </span>
                <span className="text-[14px] md:text-[12px] lg:text-[15px] jetBranis">
                  Portfolio
                </span>
                <div
                  onClick={() => {
                    setShowModal(!showModal);
                  }}
                  className="absolute top-0 right-0 px-2 opacity-0 group-hover:opacity-100"
                >
                  //
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-theme-background pt-6  hidden md:block source">
          <div className="flex justify-center gap-2 items-center pb-5">
            <div
              className={` h-10 w-10 md:h-12 md:w-12 bg-theme-background  transition-all duration-300  md:mr-5 ${
                bulbOn ? "customeAnimate" : ""
              }  `}
              style={bulbOn ? { boxShadow: "0 0 10px #fff" } : null}
            ></div>
            <div
              className={`border  border-doubled  rounded   bg-theme-background -mt-5  transition-all duration-300 ${
                bulbOn
                  ? "bg-theme-background animate-bounce text-theme-primary border-theme-primary shadow-inner shadow-theme-primary border-2 border-dashed"
                  : ""
              }  `}
              style={bulbOn ? { boxShadow: "0 0 20px #fff" } : null}
            >
              <div className="p-2 rounded text-xs md:text-sm">
                with Great powers comes great electricity bills!
              </div>
            </div>
            <div
              className={`h-10 w-10 md:h-12 md:w-12 bg-theme-background transition-all duration-300 md:ml-5  ${
                bulbOn ? "customeAnimate" : ""
              }  `}
              style={bulbOn ? { boxShadow: "0 0 10px #fff" } : null}
            ></div>
          </div>

          <div className="flex justify-evenly p-5 ">
            <div>
              <div
                onClick={() => {
                  setBulbOn(!bulbOn);
                }}
                className={`px-2 py-1 text-xs md:text-sm border !border-theme-secondary rounded button hover:!border-transparent`}
              >
                {bulbOn ? "Off" : "On"}
              </div>
            </div>
          </div>
        </div> */}

        <div className="px-4 md:px-8 lg:px-20  bg-theme-background  w-full ">
          <div className="flex justify-between mt-10 sm:mt-[130px]  md:my-5">
            <div className="flex justify-center items-center gap-2">
              <div>
                <span className="text-theme-primary text-2xl">#</span>
                <span className="text-[22px] source">projects</span>
              </div>

              <div className="h-[1px] sm:w-96 md:w-[550px] lg:w-[650px]  bg-theme-primary"></div>
            </div>

            <div>
              {/* <a
                className="text-xl ibm flex gap-1 items-center"
                href="/portfolio"
              >
                view-all <ArrowUpRight />
              </a> */}

              <a
                href="/portfolio"
                className="
    group inline-flex items-center gap-1.5
    text-[16px] font-medium
    text-[#C778DD]
    relative
  "
              >
                View all
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
          <Projects
            projects={projects}
            loading={loading}
            onEdit={editProject}
            Admin={isAdmin}
            deleteProject={deleteProject}
          />
        </div>

        <Skills />

        <About />
        {/* <Contact /> */}
        <ContactBoat />

        <Footer />
      </div>

      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
            setProjectData({});
          }}
          isOpen={showModal}
        >
          <AddProject
            onclose={() => {
              setShowModal(false);
              setProjectData({});
            }}
            projectData={projectData}
          />
        </Modal>
      )}
    </>
  );
};

export default Home;
