import React from "react";
import { AnimatePresence, motion } from "motion/react";

const Samples = () => {
  return (
    <main className="w-screen min-h-screen">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "calc(100vw - 120%)" }}
        transition={{ duration: 2 }}
        className="w-24 h-24 bg-green-700 rounded-2xl"
      />

      <motion.button
        className="px-8 py-4 font-semibold bg-green-600 rounded-full mx-6"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Noooo!!!
      </motion.button>

      <motion.li
        className="border-2 rounded-xl p-4 w-fit text-black border-green-800 my-2"
        initial={{ transform: "translateX(100px)" }}
        animate={{ transform: "translateX(0px)" }}
        transition={{ type: "spring", damping: 10, duration: 2 }}
      >
        Yessss!!!
      </motion.li>

      <motion.ul
        initial={{ "--rotate": "0deg" }}
        animate={{ "--rotate": "360deg" }}
        transition={{ duration: 2, repeat: Infinity }}
        className="border w-fit"
      >
        <li style={{ transform: "rotate(var(--rotate))" }}>123</li>
        <li style={{ transform: "rotate(var(--rotate))" }}>123</li>
        <li style={{ transform: "rotate(var(--rotate))" }}>123</li>
      </motion.ul>

      <motion.div
        className="w-24 h-24 rounded-full bg-orange-500 mx-auto"
        initial={{ scale: 0.1 }}
        animate={{ scale: 1, opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1, repeat: 5 }}
      />

      <motion.div
        animate={{ x: [0, 120, 0, -120, 0] }}
        // initial={{scale: 1}}
        transition={{
          // type: "spring",
          // damping: 300,
          repeat: Infinity,
          repeatDelay: 1,
          repeatType: "reverse",
          duration: 2,
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        className="p-4 border m-4 rounded-xl mx-auto border-green-800 w-fit"
      >
        And
      </motion.div>
    </main>
  );
};

export default Samples;
