import React, { useContext, useEffect, useState } from "react";
import Projects from "../../components/Projects";
import Navbar from "../../components/navbar";
import { Footer } from "../../components/footer";
import { GlobalContext } from "../../context/Context";
import Modal from "../../components/modal";
import AddProject from "../../components/addProject";
import api from "../../components/api";
import Swal from "sweetalert2";

const Portfolio = () => {

  const { state } = useContext(GlobalContext);
  
    let isAdmin = state?.isAdmin;
  
    const [showModal, setShowModal] = useState(false);
    const [projects, setProjects] = useState([]);
    const [loading, setloading] = useState(false);
    const [projectData, setProjectData] = useState({});
    const [toggle, setToggle] = useState(false);
  
    const getProjects = async () => {
      setloading(true);
  
      try {
        let response = await api.get("projects");
  
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
            position: "bottom-left",
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
            position: "bottom-left",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
        }
      }
    };


      const onSuccess = ({ position, icon, message }) => {
        setProjectData({});
        setShowModal(false);
        dynamicToast({ position, icon, message });
        getProjects()
      };
    
      const OnError = ({ position, icon, message }) => {
        dynamicToast({ position, icon, message });
      };
    
      const dynamicToast = ({
        position = "bottom-left",
        icon = "success",
        message = "",
      }) => {
        const Toast = Swal.mixin({
          toast: true,
          position: position,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
    
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: icon,
          title: message,
        });
      };


  
  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="mt-5 sm:mt-12  px-4 md:px-8 lg:px-20  bg-theme-background  w-full ">
             <div className="jetBranis text-4xl flex justify-center items-center">Portfolio</div>
          <div className="flex justify-between mt-5 sm:mt-[130px]  md:my-5">
           
            <div className="flex justify-center items-center gap-2">
              <div>
                <span className="text-theme-primary text-2xl">#</span>
                <span className="text-[22px] source">projects</span>
              </div>

              <div className="h-[1px] sm:w-96 md:w-[550px] lg:w-[850px]  bg-theme-primary"></div>
            </div>
          </div>
          <Projects 
            projects={projects}
            loading={loading}
            onEdit={editProject}
            isAdmin={isAdmin}
            deleteProject={deleteProject}/>
        </div>

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
            OnSuccess={onSuccess}
            OnError={OnError}
          />
        </Modal>
      )}
    </>
  );
};

export default Portfolio;
