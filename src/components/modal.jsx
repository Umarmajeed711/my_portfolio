import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, children, className }) => {
  const modalRef = useRef(null);

  // 🔒 Lock body scroll when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ⌨️ Close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed  inset-0  backdrop-blur-md flex justify-end items-center z-50 modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Modal Body */}
          <motion.div
            // initial={{ scale: 0.8, opacity: 0 }}
            // animate={{ scale: 1, opacity: 1 }}
            // exit={{ scale: 0.8, opacity: 0 }}
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            className={`relative w-[90%] max-w-lg h-screen  overflow-hidden  border-l-[12px] border-theme-primary shadow-xl ${className || ""}`}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            // transition={{ type: "spring", stiffness: 460, damping: 20 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()} // Prevent backdrop close
          >
            {/* Close Button */}
            {/* <button
              onClick={onClose}
              className="absolute top-3 right-5 text-xl font-bold text-[#c778dd] hover:scale-110 transition-all duration-200"
            >
              ×
            </button> */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute  right-4 top-2 text-2xl font-bold text-theme-primary transition hover:scale-110"
            >
              ×
            </button>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
