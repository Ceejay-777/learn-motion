import React from "react";
import { motion } from "motion/react";
import { useState } from "react";

const outerVariants = {
  on: { scale: 1 },
  off: { scale: 0 },
};

const innerVariants = {
  on: { scale: 1 },
  off: { scale: 0 },
};


const SwitchingVariants = () => {
  const [on, setOn] = useState(false);
  return (
    <main className="w-screen min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-400">
      <div className="w-36 h-36 rounded-full flex justify-center items-center bg-white">
        <motion.div
          className="bg-gray-200 w-12 h-6 rounded-full relative flex p-[1px]"
          animate={on ? "on" : "off"}
          style={{ justifyContent: on ? "flex-end" : "flex-start" }}
          onClick={() => setOn(!on)}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
            // duration: 0.2,
          }}
        >
          <motion.div
            layout
            className="bg-green-500 absolute top-0 right-0 w-full h-full rounded-full"
            // style={{ originX: "left" }}
            variants={outerVariants}
            transition={{ ease: "easeInOut" }}
          />
          <motion.div
            className="aspect-square h-full shadow-lg bg-white rounded-full z-30 self-end"
            layout
          />
        </motion.div>
      </div>
    </main>
  );
};

export default SwitchingVariants;
