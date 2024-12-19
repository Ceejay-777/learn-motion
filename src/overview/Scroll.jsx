import React from "react";
import { motion, useScroll } from "motion/react";

const Scroll = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div className="bg-green-800 h-4 w-screen fixed top-0 origin-left" style={{scaleX: scrollYProgress}} />
      <div className="w-screen h-screen border-4"></div>
      <motion.div
        className="w-24 h-24 rounded-xl mx-auto my-12 flex justify-center items-center text-white font-medium shadow-md"
        initial={{ backgroundColor: "green", opacity: 0.5 }}
        whileInView={{
          backgroundColor: "green",
          scale: 1.2,
          translateY: -40,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
      >
        Scrollll!!!!
      </motion.div>
    </div>
  );
};

export default Scroll;
