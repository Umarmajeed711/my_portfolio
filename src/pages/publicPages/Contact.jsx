import React from "react";
import Navbar from "../../components/navbar";
import { Footer } from "../../components/footer";
import { ContactForm } from "../../components/contactForm";
import { ContactBoat } from "../../components/contact";
import { Form } from "../../components/Form";

export const Contact = () => {
  return (
    <div className="w-full">
       
      <Navbar />
      <div className="mt-5 sm:mt-12 px-4 md:px-8 lg:px-20  bg-theme-background text-theme-white w-full  ">
        <div className="jetBranis text-4xl flex justify-center items-center">
          Contact Me
        </div>
      </div>

      <ContactBoat />

      <Form />

      <Footer />
    </div>
  );
};
