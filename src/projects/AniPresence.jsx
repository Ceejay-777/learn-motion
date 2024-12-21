import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const animateVars = {
  initial: {
    scale: 0.3,
    opacity: 0,
  },
  open: {
    scale: 1,
    opacity: 1,
  },
  close: {
    scale: 0,
    opacity: 0,
  },
};

const AniPresence = () => {
  const [open, setOpen] = useState(true);
  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-pink-500">
      <div
        className="rounded-3xl bg-white/50 w-36 h-36 flex justify-center items-center"
        onClick={() => setOpen(!open)}
      >
        <AnimatePresence>
          {open && (
            <motion.div
              animate="open"
              variants={animateVars}
              className="bg-white rounded-2xl w-20 h-20"
              exit="close"
              initial="initial"
              transition={{ type: "spring", bounce: 0.6}}
            />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default AniPresence;
