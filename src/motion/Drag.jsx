import React from "react";
import { motion } from "motion/react";
import { useRef } from "react";

const Drag = () => {
  const constraintRef = useRef(null);
  return (
    <main className="w-screen min-h-screen flex justify-center items-center">
      <motion.div
        className="w-[300px] h-[300px] bg-zinc-300/40 rounded-3xl"
        ref={constraintRef}
      >
        <motion.div
          drag
          dragConstraints={constraintRef}
          dragMomentum={false}
          className="w-[100px] h-[100px] rounded-2xl bg-pink-500"
          whileDrag={{ opacity: 0.5 }}
        />
      </motion.div>
    </main>
  );
};

export default Drag;
