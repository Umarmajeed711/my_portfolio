import { useFormik } from "formik";
import * as yup from "yup";
import "../App.css";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa6";
import React, { useState } from "react";
import Swal from "sweetalert2";

export const ContactForm = () => {
  const [loading, setloading] = useState(false);

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
          <div className="flex justify-center items-center flex-col">
            <p className="jetBranis text-4xl flex justify-center items-center">
              Contact Form
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20  my-10 px-2">
            <div className="col-span-1 flex flex-col gap-10 justify-evenly  ">
              <div className="w-full">
                <p className="text-xl md:text-3xl font-medium source text-center md:text-start">
                  <span className="text-theme-primary text-2xl">#</span>
                  <span className="text-[22px] source">Get In Touch</span>
                </p>
                <p className="text-[16px] source  text-center md:text-justify border-l-4 !border-[#C778DD] pl-3 roboto text-gray-400 mt-2">
                  I’m very approachable and would love to speak to you. Feel
                  free to call, send me an email . Follow me in social media or
                  simply complete the enquiry form.
                </p>
              </div>

              {/* <div className="flex  gap-20 justify-center items-center ">
                <div className="flex gap-5 flex-col">
                  <div className="flex items-center gap-4 ">
                    <div>
                      <a
                        href="https://wa.me/+923116127244?text=Hi%20there%2C%20I%20want%20to%20hire%20you%20for%20a%20project"
                        target="_blank"
                      >
                        <FaWhatsapp className="w-10 h-10 icons " />
                      </a>
                    </div>
                    <div>whatsapp</div>
                  </div>

                  <div className="flex items-center gap-4">
                  <div>
                    <a href=""></a> <GrGithub className="w-10 h-10 icons" />
                  </div>
                  <div>Github</div>
                </div>

                  <div className="flex items-center gap-4">
                    <div>
                      <a
                        href="https://www.linkedin.com/in/saifa-shahnawaz-7a8091318/"
                        target="blank"
                      >
                        <FaLinkedinIn className="w-10 h-10 icons" />
                      </a>
                    </div>
                    <div>LinkedIn</div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div>
                      <a
                        // href="https://www.instagram.com/saifashahnawaz"
                        target="blank"
                      >
                        {" "}
                        <FaInstagram className="w-10 h-10 icons" />
                      </a>
                    </div>
                    <div>Instagram</div>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="col-span-1 poppins text-xl  font-light flex justify-center ">
              {/* Send message form */}
              <form
                action="https://formsubmit.co/umarmajeed711@gmail.com"
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
  );
};
