import React from "react";
import { motion } from "motion/react";

const SpinShow = () => {
  return (
    <main className="w-screen min-h-screen bg-gradient-to-b from-pink-600 to-pink-500 flex justify-center items-center">
      <motion.div
        className="w-36 h-36 rounded-3xl bg-white"
        whileInView={{ rotate: 180, scale: 1 }}
        initial={{ scale: 0 }}
        transition={{type: "spring", bounce: 0.6}}
      />
    </main>
  );
};

export default SpinShow;
