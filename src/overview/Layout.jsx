import React, { useState } from "react";
import { easeOut, motion } from "motion/react";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <main className="min-h-screen w-screen bg-gradient-to-bl from-[#7b2ff7] to-[#f107a3] flex justify-center items-center">
      <div
        onClick={() => {
          setIsOn(!isOn);
          console.log("Okay");
        }}
        className={`w-40 h-[100px] bg-white/40 flex justify-start items-center rounded-[50px] p-[10px] cursor-pointer ${
          isOn && "justify-end" 
        }`}
      >
        <motion.div
          layout
          transition={spring}
          className="w-20 h-20 rounded-full bg-white"
          whileHover={{scale: 1.2}}
        ></motion.div>
      </div>
    </main>
  );
};

export const Modal = () => {

}

