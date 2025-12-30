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

const CurrentlyWorkingOn = ({ onclose = () => {}, projectData }) => {
  let { state, dispatch } = useContext(GlobalContext);

  const baseUrl = state?.baseUrl;

  const [loading, setloading] = useState(false);

  const [apiError, setApiError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    addProjectFormik.setFieldValue("title", projectData?.title);
  }, []);

  const addValidation = yup.object({
    title: yup.string().required("This Field is required"),
  });

  const addProjectFormik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: addValidation,

    onSubmit: async (values) => {
      setloading(true);
      console.log(values);

      try {
        let response = await api.post(`/addTitle`, {
          title: values?.title,
        });

        console.log(response);

        setloading(false);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,

          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Add Title successfully",
        });

        addProjectFormik.resetForm();
        onclose();
      } catch (error) {
        setloading(false);
        console.log(error?.response.data?.message);

        setApiError(error?.response.data?.message || "Something went wrong");

        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-start",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "warning",
          title: error?.response.data?.message || "Something went wrong",
        });
      } finally {
        setloading(false);
      }
    },
  });

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
            {projectData?._id ? "Update" : "Add"} Title
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
                ) : (
                  "Add Title"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CurrentlyWorkingOn;
