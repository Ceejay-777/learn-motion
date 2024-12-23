import { MotionConfig, useMotionValue, useTransform } from "motion/react";
import React from "react";
import { motion } from "motion/react";

const Interpolations = () => {
  const x = useMotionValue(0);
  const backgroundColor = useTransform(
    x,
    [-150, 0, 150],
    ["#a0d", "#60f", "#0bf"]
  );
  return (
    <motion.main
      className="w-screen min-h-screen flex justify-center items-center "
      style={{ backgroundColor }}
    >
      <motion.div
        className="w-36 h-36 rounded-full bg-white shadow-sm cursor-grab"
        drag="x"
        dragConstraints={{ right: 0, left: 0 }}
        whileTap={{ cursor: "grabbing" }}
        style={{ x }}
      />
    </motion.main>
  );
};

export default Interpolations;
