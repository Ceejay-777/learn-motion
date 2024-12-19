import React from "react";
import { motion } from "motion/react";
import { useState } from "react";
import Input from "./compnents/Input";

const MotionOne = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <main className="w-screen min-h-screen justify-around items-center flex gap-12">
      <div className="">
        <motion.div
          className="w-48 h-48 rounded-2xl border-2 border-pink-700 pointer-events-none border-dotted"
          animate={{ x, y, rotate }}
          transition={{type: "spring"}}
        />
      </div>
      <div className="flex flex-col">
        <Input value={x} set={setX}>
          x
        </Input>
        <Input value={y} set={setY}>
          y
        </Input>
        <Input value={rotate} set={setRotate} min={-180} max={180}>
          rotate
        </Input>
      </div>
    </main>
  );
};

export default MotionOne;
