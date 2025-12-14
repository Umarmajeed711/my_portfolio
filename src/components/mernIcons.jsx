// src/components/InteractiveMernIcons.jsx
import React from "react";
import { motion } from "framer-motion";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const icons = [
  { id: 1, icon: <SiMongodb /> },
  { id: 2, icon: <SiExpress /> },
  { id: 3, icon: <SiReact /> },
  { id: 4, icon: <SiNodedotjs /> },
];

const InteractiveMernIcons = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "35px",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "30px",
      }}
    >
      {icons.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.10,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.3,
            rotate: 3,
            boxShadow: "0px 0px 20px #C778DD",
          }}
          whileTap={{ scale: 0.9 }}
          style={{
            fontSize: "60px",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default InteractiveMernIcons;
