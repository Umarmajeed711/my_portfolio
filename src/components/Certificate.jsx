import { useState } from "react";
import { motion } from "framer-motion";

export default function CertificateSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const certificate = {
    title: "MERN Stack Developer",
    image: "/hero.png", // replace with your certificate path
    institute: "SMIT",
    completed: "Aug 2025",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
  };

  return (
    <section className="bg-[#282C33] py-4 md:py-20 px-2 md:px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[#C778DD] mb-12 text-center">
        My Certification
      </h2>

      {/* Certificate Card with floating and hover */}
      <motion.div
        className="relative w-full max-w-md h-64 cursor-pointer"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px #C778DD" }}
        onClick={() => setModalOpen(true)}
      >
        {/* Front: Certificate Image */}
        <div className="absolute w-full h-full bg-[#2A2F38] rounded-xl p-4 shadow-lg flex justify-center items-center">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="rounded-md w-full h-full object-contain"
          />
        </div>
      </motion.div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 "
          onClick={() => setModalOpen(false)}
        >
          <div className="bg-[#2A2F38] p-6 rounded-lg max-w-3xl w-full h-[500px] relative">
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-[#C778DD] font-bold text-xl"
            >
              ×
            </button>

            {/* Certificate Image */}
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-[60%] md:h-[70%]  rounded-md mb-4 object-contain"
            />

            {/* Certificate Details */}
            <div className="text-center">
              <h3 className="text-[#C778DD] font-bold text-2xl mb-2">
                {certificate.title}
              </h3>
              <p className="text-[#BFC7D5] mb-1">Institute: {certificate.institute}</p>
              <p className="text-[#BFC7D5] mb-2">Completed: {certificate.completed}</p>
              <div className="flex justify-center flex-wrap gap-2">
                {certificate.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-[#C778DD]/20 text-[#C778DD] px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
