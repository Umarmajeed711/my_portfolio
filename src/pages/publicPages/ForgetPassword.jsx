import React, { useContext, useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Navbar from "../../components/navbar";
import { GlobalContext } from "../../context/Context";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isOtpField, setIsOtpField] = useState(false);
  const [isPassField, setIsPassField] = useState(false);
  const [newPass, setNewPass] = useState("");
  const [otp, setOtp] = useState("");

  let { state, dispatch } = useContext(GlobalContext);

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setloading] = useState(false);

  let navigate = useNavigate();

  const [apiError, setApiError] = useState("");
  const PasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  // const sendOtp = async (e) => {
  //   e.preventDefault();

  //   let extraField = {};

  //   if (isOtpField) {
  //     extraField = { otp: otp };
  //   }

  //   if (isPassField) {
  //     extraField = { otp: otp, pass: newPass };
  //   }

  //   let apiData = {
  //     email: userEmail,
  //     ...extraField,
  //   };
  //   try {
  //     setloading(true)
  //     let response = await axios.post(isPassField
  //           ? `${state?.baseUrl}/reset-password`
  //           :  isOtpField
  //           ? `${state?.baseUrl}/verify-otp`
  //           : `${state?.baseUrl}/generate-otp`,
  //           apiData
  //       );
  //     console.log("RES", response.data);
  //     if (isOtpField) {
  //       setIsPassField(true);
  //     }
  //     setIsOtpField(true);
  //     {isPassField ? setNewPass("") : isOtpField ? setOtp("") : null}

  //     setUserEmail("");

  //     {isPassField ? navigate("/login") : null}

  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  //   finally{
  //     setloading(false);
  //   }
  // };
  const sendOtp = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      // ---------------------------
      // 1) Build Payload
      // ---------------------------
      let apiData = { email: userEmail };

      if (isPassField) {
        apiData.otp = otp;
        apiData.pass = newPass;
      } else if (isOtpField) {
        apiData.otp = otp;
      }

      // ---------------------------
      // 2) Select Correct Endpoint
      // ---------------------------
      const endpoint = isPassField
        ? `${state?.baseUrl}/reset-password`
        : isOtpField
        ? `${state?.baseUrl}/verify-otp`
        : `${state?.baseUrl}/generate-otp`;

      const response = await axios.post(endpoint, apiData);
      console.log("RES:", response.data);

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

      // STEP 1 → Email submitted → OTP generated
      if (!isOtpField) {
        setIsOtpField(true); // show OTP input
        return;
      }

      // STEP 2 → OTP verified → Show new password field
      if (isOtpField && !isPassField) {
        setIsPassField(true); // show password input
        return;
      }

      // STEP 3 → Password reset → Go to login
      if (isPassField) {
        setOtp("");
        setNewPass("");
        navigate("/login");
        return;
      }
    } catch (error) {
      console.log("Error:", error);
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
  };

  return (
    <div>
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
                  onSubmit={sendOtp}
                  className=" px-4   flex flex-col gap-4 items-center "
                >
                  <p className="jetBranis text-xl sm:text-2xl md:text-3xl font-medium sm:font-semibold mt-2">
                    Forgot Password{" "}
                  </p>

                  <div className="flex flex-col gap-4 w-full">
                    {isPassField ? (
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
                              placeholder="enter your pass"
                              value={newPass}
                              onChange={(e) => {
                                setNewPass(e.target.value);
                              }}
                              disabled={loading}
                              className="inputField"
                            />
                            <p
                              onClick={PasswordVisible}
                              className="absolute right-0 top-0 m-[15px] cursor-pointer"
                            >
                              {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : isOtpField ? (
                      <div className="flex gap-3 flex-col justify-center ">
                        <label>
                          <span className="text-xl font-bold flex items-center gap-1">
                            <MdEmail /> Otp
                          </span>
                        </label>
                        <div>
                          <input
                            type="text"
                            disabled={loading}
                            className="inputField"
                            placeholder="enter your otp"
                            value={otp}
                            onChange={(e) => {
                              setOtp(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-3 flex-col justify-center ">
                        <label>
                          <span className="text-xl font-bold flex items-center gap-1">
                            <MdEmail /> Email
                          </span>
                        </label>
                        <div>
                          <input
                            disabled={loading}
                            className="inputField"
                            type="email"
                            name="email"
                            placeholder="enter your email"
                            value={userEmail}
                            onChange={(e) => {
                              setUserEmail(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    )}

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
                          "Submit"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
