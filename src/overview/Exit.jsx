import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Exit = () => {
  const [on, setOn] = useState(true);
  return (
    <main className="w-screen min-h-screen bg-slate-700 flex justify-center items-center flex-col gap-12">
      <motion.button
        className="py-3 px-8 w-48 rounded-full bg-green-400 font-semibold text-xl text-center box-border fixed top-2"
        whileTap={{ scale: 0.9 }}
        onClick={() => setOn(!on)}
      >
        {on ? "Remove" : "Add"}
      </motion.button>
      <AnimatePresence>
        {on && (
          <motion.div
            className="w-48 h-48 rounded-3xl h-42 bg-green-400"
            exit={{ scale: 1.2, opacity: 0 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Exit;
