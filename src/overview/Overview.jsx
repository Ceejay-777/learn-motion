import React from "react";
import { motion } from "motion/react";

const Overview = () => {
  return (
    <div className="w-screen h-screen">
      <motion.div
        className="w-24 aspect-square bg-zinc-600 rounded-xl flex justify-center text-white items-center"
        animate={{ x: 100 }}
      >
        One
      </motion.div>

      <motion.div
        className="w-24 aspect-square bg-green-800 rounded-xl flex justify-center text-white items-center mx-auto"
        animate={{
          scale: 1.5,
          transition: {
            duration: 2,
          },
        }}
      >
        Two
      </motion.div>

      <motion.div
        className="w-24 aspect-square bg-blue-900 rounded-full flex justify-center text-white items-center mx-12"
        initial={{ scale: 0 }}
        animate={{
          scale: 1.2,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
      >
        Three
      </motion.div>

      <motion.button
        className="w-24 aspect-square bg-blue-900 rounded-3xl flex justify-center text-white items-center m-6 border-2 border-yellow-400"
        whileHover={{scale: 1.1}}
        whileTap={{scale:0.9}}
        onHoverStart={() => console.log("Hover started")}
      >
        Four
      </motion.button>
    </div>
  );
};

export default Overview;
