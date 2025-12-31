import { useFormik } from "formik";
import * as yup from "yup";
import "../App.css";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa6";
import React, { useState } from "react";
import Swal from "sweetalert2";
import LampWithForm from "./hanglamp";
// import LampWithWire from "./lamp";

export const Form = () => {
  const [loading, setloading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [pulse, setPulse] = useState(false);
  const formRef = React.useRef(null); // reference to native HTML form

  const contactValidation = yup.object({
    name: yup.string().required("name is required"),
    email: yup.string().email().required("Email is required"),
    message: yup.string().required("message is required"),
  });

  const contactFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactValidation,

    onSubmit: (values) => {
      console.log(values);
      setPulse(true);
      setTimeout(() => setPulse(false), 600);

      setloading(true);
      // Trigger native HTML form submission

      formRef.current.submit();

      // Simulate form submit (API call, FormSubmit, etc.)
      setTimeout(() => {
        setloading(false);
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-left",
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
          title: "Thank you for message",
        });

        contactFormik.resetForm();
      }, 1000); // Simulated 2-second delay
    },
  });
  return (
    <div>
      <div className="mt-5 sm:mt-20 px-4 md:px-8 lg:px-20  bg-theme-background text-theme-white w-full  ">
        <div className="flex h-full flex-col items-center ">
          <div className="flex flex-col gap-20  my-10 px-2">
            <div className="w-full flex flex-col justify-center items-center">
              <p className="text-xl md:text-3xl font-medium source text-center md:text-start">
                <span className="text-3xl jetBranis">Get In Touch</span>
              </p>
              <p className="text-[16px] source  text-center border-l-4 border-r-4 w-[95%] sm:w-[70%] md:w-[50%] !border-[#C778DD] px-3 roboto text-gray-400 mt-2">
                I’m very approachable and would love to speak to you. Feel free
                to call, send me an email . Follow me in social media or simply
                complete the enquiry form.
              </p>
            </div>

            <div
              className={`grid grid-cols-3 place-items-center h-full transition-colors duration-700 `}
            >
              {!showForm && (
                <p className="mb-3 col-span-3 text-sm text-theme-secondary animate-pulse">
                  💡 Click the lamp to contact me
                </p>
              )}
              <div className=" col-span-3 md:col-span-1  md:min-h-[500px] flex  justify-center items-center">
                <LampWithForm
                  onTurnOn={() => setShowForm(!showForm)}
                  On={showForm}
                  pulse={pulse}
                />
              </div>

              <div
                className={`col-span-3 md:col-span-2  poppins text-xl  font-light flex justify-center  form-wrapper ${
                  showForm ? "form-show" : ""
                }`}
              >
                {/* Send message form */}
                <form
                  action="https://formsubmit.com/umarmajeed711@gmail.com"
                  method="POST"
                  ref={formRef}
                  onSubmit={contactFormik.handleSubmit}
                  className=" flex flex-col gap-3 p-5 rounded-2xl  w-80  contactForm"
                  style={{ boxShadow: "0 0 10px #c778db" }}
                >
                  <div>Send me a Message</div>

                  <div className="flex flex-col gap-1 text-sm">
                    <label htmlFor="name">Name</label>
                    <div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        value={contactFormik.values.name}
                        onChange={contactFormik.handleChange}
                        className="inputField"
                      />

                      <div className="error-wrapper">
                        {contactFormik.touched.name &&
                          contactFormik.errors.name && (
                            <p className="requiredError">
                              {contactFormik.errors.name}
                            </p>
                          )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 text-sm">
                    <label htmlFor="email">Email</label>
                    <div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        value={contactFormik.values.email}
                        onChange={contactFormik.handleChange}
                        className="inputField"
                      />

                      <div className="error-wrapper">
                        {contactFormik.touched.email &&
                          contactFormik.errors.email && (
                            <p className="requiredError">
                              {contactFormik.errors.email}
                            </p>
                          )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 text-sm">
                    <label htmlFor="message">Message</label>
                    <div>
                      <input
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Your message"
                        value={contactFormik.values.message}
                        onChange={contactFormik.handleChange}
                        className="inputField "
                      />

                      <div className="error-wrapper">
                        {contactFormik.touched.message &&
                          contactFormik.errors.message && (
                            <p className="requiredError">
                              {contactFormik.errors.message}
                            </p>
                          )}
                      </div>
                    </div>
                  </div>

                  {/* Optional hidden fields */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Message from Portfolio!"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://ss1-portfolio.netlify.app/"
                  />

                  <div
                    className="bg-theme-primary text-theme-background hover:bg-theme-background hover:text-theme-primary transition-all duration-300 p-2 rounded text-center   text-sm font-medium   cursor-pointer"
                    style={{ boxShadow: "0 0 10px #c979df" }}
                  >
                    <button type="submit" disabled={loading}>
                      {loading ? (
                        <div className="flex items-center gap-1 bg-transparent">
                          <span className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                          <span className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                          <span className="w-2 h-2 bg-black rounded-full animate-bounce"></span>
                        </div>
                      ) : (
                        "Send message"
                      )}
                    </button>
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
