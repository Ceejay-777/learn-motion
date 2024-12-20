import React from "react";
import { motion } from "motion/react";

const Keyframes = () => {
  return (
    <main className="min-h-screen border-12 w-screen bg-gradient-to-bl from-[#7b2ff7] to-[#f107a3] flex justify-center items-center">
      <motion.div
        className="w-48 h-48 bg-white"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%%", "50%", "50%", "0%"],
          x: [0, -40, 10, -20, 0],
          y: [0, -80, 0, 80, 0],
        }}
        // initial={{scale: 1, rotate: 0, borderRadius: "0%", x: 0}}
        transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: 5,
          repeatDelay: 1,
        }}
      />
    </main>
  );
};

export default Keyframes;
