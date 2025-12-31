import React, { useContext, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { GlobalContext } from "../context/Context";
import Alert from "@mui/material/Alert";
import api from "./api";
import {
  Heading,
  AlignLeft,
  ExternalLink,
  Github,
  FolderKanban,
} from "lucide-react";

const AddProject = ({
  onclose = () => {},
  projectData = {},
  OnSuccess = () => {},
  OnError = () => {},
}) => {
  let { state, dispatch } = useContext(GlobalContext);

  const fileInputRef = useRef(null);

  const baseUrl = state?.baseUrl;

  const [loading, setloading] = useState(false);

  const [apiError, setApiError] = useState("");
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("project Data", projectData);
    addProjectFormik.setFieldValue("title", projectData?.title);
    addProjectFormik.setFieldValue("description", projectData?.description);
    addProjectFormik.setFieldValue("live_link", projectData?.live_link);
    addProjectFormik.setFieldValue("code_link", projectData?.code_link);
    addProjectFormik.setFieldValue("image", projectData?.image);
    addProjectFormik.setFieldValue("isTopProject", projectData?.isTopProject);
    setPreview(projectData?.image);
  }, []);

  const addValidation = yup.object({
    title: yup.string().required("This Field is required"),
    description: yup.string().required("This Field is required"),
    live_link: yup.string().required("This Field is required"),
    code_link: yup.string().required("This Field is required"),
    image: yup.mixed().required("This Field is required"),
  });

  const addProjectFormik = useFormik({
    initialValues: {
      title: "",
      description: "",
      live_link: "",
      code_link: "",
      image: "",
      isTopProject: false,
    },
    validationSchema: addValidation,

    onSubmit: async (values) => {
      setloading(true);
      console.log(values);

      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("live_link", values.live_link);
      formData.append("code_link", values.code_link);
      formData.append("image", values.image);
      formData.append("isTopProject", values.isTopProject);

      // Check values inside FormData
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      console.log("Form dAta", formData);

      try {
        let response = await api.post(
          `/project?id=${projectData?._id || ""}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(response);

        setloading(false);
        // navigate("/dashbaord")

        addProjectFormik.resetForm();
       
        OnSuccess({
          icon: "success",
          message: response?.data?.message || "Add Project Successfully"
        });
      } catch (error) {
        setloading(false);
        console.log(error?.response.data?.message);
        OnError({
          icon: "warning",
          title: error?.response.data?.message || "Something went wrong",
        });

        // setApiError(error?.response.data?.message || "Something went wrong");

        // const Toast = Swal.mixin({
        //   toast: true,
        //   position: "bottom-start",
        //   showConfirmButton: false,
        //   timer: 3000,
        //   timerProgressBar: true,
        //   didOpen: (toast) => {
        //     toast.onmouseenter = Swal.stopTimer;
        //     toast.onmouseleave = Swal.resumeTimer;
        //   },
        // });
        // Toast.fire({
        //   icon: "warning",
        //   title: error?.response.data?.message || "Something went wrong",
        // });
      } finally {
        setloading(false);
      }
    },
  });

  const handleFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Only image files allowed!");
      return;
    }

    setPreview(URL.createObjectURL(file));
    addProjectFormik.setFieldValue("image", file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleInput = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  return (
    <div className="overflow-auto h-full w-full bg-transparent">
      {/*Add Project Form */}

      <div
        className="border rounded-lg  w-full  border-[#979696cc] overflow-hidden h-full pl-2 "
        style={{ boxShadow: "0 0 10px #c979df  " }}
      >
        <form
          onSubmit={addProjectFormik.handleSubmit}
          className=" px-4   flex flex-col gap-4 items-center overflow-hidden h-full w-full "
        >
          <p className="jetBranis text-xl sm:text-2xl md:text-3xl font-medium sm:font-semibold mt-2   ">
            {projectData?._id ? "Update" : "Add"} Project
          </p>

          <div className="flex flex-col gap-4 w-full overflow-x-hidden overflow-y-auto  h-full custom-scrollbar">
            {/* Title */}
            <div className="flex gap-3 flex-col justify-center ">
              <label>
                <span className="text-xl font-bold flex items-center gap-1">
                  <FolderKanban /> Title
                </span>
              </label>
              <div>
                <input
                  type="title"
                  name="title"
                  value={addProjectFormik.values.title}
                  onChange={(e) => {
                    addProjectFormik.handleChange(e);
                    setApiError("");
                  }}
                  disabled={loading}
                  className="inputField"
                  placeholder="new-project"
                />

                <div className="error-wrapper">
                  {addProjectFormik.touched.title &&
                    addProjectFormik.errors.title && (
                      <p className="requiredError">
                        {addProjectFormik.errors.title}
                      </p>
                    )}
                </div>
              </div>
            </div>
            {/* Live link */}
            <div className="flex gap-3 flex-col justify-center ">
              <label>
                <span className="text-xl font-bold flex items-center gap-1">
                  <ExternalLink /> Host Link
                </span>
              </label>
              <div>
                <input
                  type="url"
                  name="live_link"
                  value={addProjectFormik.values.live_link}
                  onChange={(e) => {
                    addProjectFormik.handleChange(e);
                    setApiError("");
                  }}
                  disabled={loading}
                  className="inputField"
                  placeholder="https://newhost.com"
                />
                <div className="error-wrapper">
                  {addProjectFormik.touched.live_link &&
                    addProjectFormik.errors.live_link && (
                      <p className="requiredError">
                        {addProjectFormik.errors.live_link}
                      </p>
                    )}
                </div>
              </div>
            </div>
            {/* Code Link */}
            <div className="flex gap-3 flex-col justify-center ">
              <label>
                <span className="text-xl font-bold flex items-center gap-1">
                  <Github /> Code Link
                </span>
              </label>
              <div>
                <input
                  type="url"
                  name="code_link"
                  value={addProjectFormik.values.code_link}
                  onChange={(e) => {
                    addProjectFormik.handleChange(e);
                    setApiError("");
                  }}
                  disabled={loading}
                  className="inputField"
                  placeholder="https://github.com"
                />
                <div className="error-wrapper">
                  {addProjectFormik.touched.code_link &&
                    addProjectFormik.errors.code_link && (
                      <p className="requiredError">
                        {addProjectFormik.errors.code_link}
                      </p>
                    )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="flex gap-3 flex-col justify-center">
              <label>
                <span className="text-xl font-bold flex items-center gap-1">
                  <AlignLeft /> Description
                </span>
              </label>

              <div>
                <textarea
                  name="description"
                  value={addProjectFormik.values.description}
                  onChange={(e) => {
                    addProjectFormik.handleChange(e);
                    setApiError("");
                  }}
                  disabled={loading}
                  className="inputField !h-28 resize-none"
                  placeholder="Write project description..."
                />
                <div className="error-wrapper">
                  {addProjectFormik.touched.description &&
                    addProjectFormik.errors.description && (
                      <p className="requiredError">
                        {addProjectFormik.errors.description}
                      </p>
                    )}
                </div>
              </div>
            </div>

            {/* Top Project Checkbox */}
            <div className="flex gap-3 flex-col justify-center">
              <label>
                <span className="text-xl font-bold flex items-center gap-1">
                  ⭐ Mark as Top Project
                </span>
              </label>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="isTopProject"
                  checked={addProjectFormik.values.isTopProject}
                  onChange={(e) =>
                    addProjectFormik.setFieldValue(
                      "isTopProject",
                      e.target.checked
                    )
                  }
                  className="w-5 h-5 cursor-pointer"
                  disabled={loading}
                />
                <span className="text-gray-400 text-sm">
                  Show this project on Home Page
                </span>
              </div>
            </div>

            {/* <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="w-full border-2 border-dashed border-gray-400 rounded-xl p-5 text-center cursor-pointer 
                 hover:border-theme-primary transition"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-40 object-cover rounded-lg"
                />
              ) : (
                <p className="text-gray-500">
                  Drag & Drop image here or click to upload
                </p>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleInput}
                className="mt-3 mx-auto block"
              />
            </div> */}

            <div
              onClick={() => fileInputRef.current.click()}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="w-full border-2 border-dashed  border-gray-400 rounded-xl p-3 text-center cursor-pointer 
             hover:border-theme-primary transition"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-40 object-cover rounded-lg"
                />
              ) : (
                <p className="text-gray-500 flex justify-center items-center h-full">
                  Drag & Drop image here or click to upload
                </p>
              )}

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleInput}
                className="hidden"
              />
            </div>
            <div className="error-wrapper">
              {addProjectFormik.touched.image &&
                addProjectFormik.errors.image && (
                  <p className="requiredError">
                    {addProjectFormik.errors.image}
                  </p>
                )}
            </div>

            <div className="flex flex-col justify-between items-center">
              <button
                disabled={loading}
                className=" bg-theme-primary transition-all duration-200 flex justify-center rounded px-3 py-2 my-2 text-white  hover:bg-[#b554cd] hover:shadow-md"
                type="submit"
              >
                {loading ? (
                  <div className="flex items-center px-1 py-2 gap-2 bg-transparent">
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                  </div>
                ) : 
                 ( projectData?._id ? "Update Project"   : "Add Project")
                }
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
