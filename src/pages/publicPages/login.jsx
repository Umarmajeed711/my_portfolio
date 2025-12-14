import React, { useContext, useState } from "react";
import Navbar from "../../components/navbar";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { GlobalContext } from "../../context/Context";
import Alert from "@mui/material/Alert";
import "./home.css";
import "../../App.css"
import api from "../../components/api";

const Login = () => {
  let { state, dispatch } = useContext(GlobalContext);

  const baseUrl = state?.baseUrl;

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setloading] = useState(false);

  const [apiError, setApiError] = useState("");

  const navigate = useNavigate();

  const PasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  const loginValidation = yup.object({
    email: yup.string().trim().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,

    onSubmit: async (values) => {
      setloading(true);
      console.log(values);

      try {
        let response = await api.post(`/login`, {
          email: values.email,
          password: values.password,
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
          title: "Login Successfully",
        });

        loginFormik.resetForm();
        dispatch({ type: "ADMIN_LOGIN", payload: response?.data?.user });
        navigate("/dashboard");
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

  // let Styles = {
  //   inputField:
  //     "border-b-2  bg-transparent p-1 outline-none focus:drop-shadow-xl hover: w-[220px]",
  // };

  return (
    <div>
      <Navbar />
      {/* hero section */}
      <div className="loginBackground">
        <div className="my-10 md:my-0 gap-3 px-4 md:px-8 lg:px-20  w-full">
          <div className="flex justify-center items-center home">
            <div
              className="border rounded-lg p-2 w-80  border-[#979696cc] "
              style={{ boxShadow: "0 0 10px #c979df  " }}
            >
              <form
                onSubmit={loginFormik.handleSubmit}
                className=" px-4   flex flex-col gap-4 items-center "
              >
                <p className="jetBranis text-xl sm:text-2xl md:text-3xl font-medium sm:font-semibold mt-2">
                  Login{" "}
                </p>

                {/* <div className="h-[20px] w-full flex justify-center items-center mb-1 overflow-hidden">
                  <Alert
                    severity="error"
                    className={`transition-all duration-300 transform text-sm px-4 py-1 max-w-[350px]
      ${
        apiError
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-2"
      }
    `}
                  >
                    {apiError || "placeholder"}
                  </Alert>
                </div> */}

                <div className="flex flex-col gap-4 w-full">
                  {/* Email */}
                  <div className="flex gap-3 flex-col justify-center ">
                    <label>
                      <span className="text-xl font-bold flex items-center gap-1">
                        <MdEmail /> Email
                      </span>
                    </label>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={loginFormik.values.email}
                        onChange={(e) => {
                          loginFormik.handleChange(e);
                          setApiError("");
                        }}
                        disabled={loading}
                        className="inputField"
                        placeholder="email"
                      />
                      <div className="error-wrapper">
                        {loginFormik.touched.email &&
                          loginFormik.errors.email && (
                            <p className="requiredError">
                              {loginFormik.errors.email}
                            </p>
                          )}
                      </div>
                    </div>
                  </div>

                  {/* Password */}

                  <div className="flex gap-3 flex-col justify-center relative">
                    <label>
                      <span className="text-xl font-bold flex gap-1 items-center">
                        <RiLockPasswordFill /> Password
                      </span>
                    </label>
                    <div>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={loginFormik.values.password}
                          onChange={(e) => {
                            loginFormik.handleChange(e);
                            setApiError("");
                          }}
                          disabled={loading}
                          className="inputField"
                          placeholder="password"
                        />
                        <p
                          onClick={PasswordVisible}
                          className="absolute right-0 top-0 m-[15px] cursor-pointer"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </p>
                      </div>

                      <div className="error-wrapper">
                        {loginFormik.touched.password &&
                          loginFormik.errors.password && (
                            <p className="requiredError">
                              {loginFormik.errors.password}
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
                        "Log In"
                      )}
                    </button>

                    <div>
                      <Link
                        to="/forget-password"
                        className="text-theme-primary hover:text-[#b554cd] transition-all duration-300"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
