import React from "react";
import { motion } from "motion/react";

const Samples = () => {
  return (
    <main className="w-screen min-h-screen">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "calc(100vw - 50%)" }}
        transition={{duration: 2}}
        className="w-24 h-24 border border-green-700 rounded-2xl"
      />
    </main>
  );
};

export default Samples;
