import React from "react";
import { useState } from "react";
import { motion } from "motion/react";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Variants = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="w-screen min-h-screen bg-[#6600FF] flex justify-center items-center">
      <motion.nav className="w-[300px]" animate={isOpen ? "open" : "closed"}>
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white text-[#6600FF] border-none rounded-lg py-3 px-5 text-lg font-bold cursor-pointer w-full text-left mb-4 flex justify-between items-center"
        >
          Menu
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
            className="border"
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" className="fill-[#6600FF]" />
            </svg>
          </motion.div>
        </motion.button>

        <motion.ul
          variants={{
            open: {
              scale: 1,
              opacity: 1,
              transition: {
                ease: "easeOut",
                type: "spring",
                bounce: 0.3,
                duration: 0.5,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              scale: 1.2,
              opacity: 0,
              transition: {
                ease: "easeOut",
                type: "spring",
                bounce: 0.3,
                duration: 0.5,
                when: "afterChildren",
              },
            },
          }}
          initial={{ scale: 1.2, opacity: 0 }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
          className="flex flex-col gap-4 bg-white p-4 m-0 list-none text-[#6600FF] font-medium rounded-xl"
        >
          <motion.li variants={itemVariants}>Item 1 </motion.li>
          <motion.li variants={itemVariants}>Item 2 </motion.li>
          <motion.li variants={itemVariants}>Item 3 </motion.li>
          <motion.li variants={itemVariants}>Item 4 </motion.li>
          <motion.li variants={itemVariants}>Item 5 </motion.li>
        </motion.ul>
      </motion.nav>
    </main>
  );
};

export default Variants;
