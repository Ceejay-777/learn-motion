import React from 'react'
import {motion, useMotionValue, useTransform} from 'motion/react'

const SpinInterpolation = () => {
    const rotate = useMotionValue(0)
    const backgroundColor = useTransform(
      rotate,
      [-180, 0, 180],
      ["#a0d", "#60f", "#0bf"]
    );
  return (
    <motion.main
      className="w-screen min-h-screen flex justify-center items-center"
      animate = {{backgroundColor: ["#a0d", "#60f", "#0bf"]}}
      transition={{
        repeatType: "reverse",
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0.5,
      }}
    >
      <motion.div
        className="w-36 h-36 rounded-3xl bg-white"
        animate={{ rotate: [0, 180] }}
        transition={{
          repeatType: "reverse",
          duration: 1,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        style={{ rotate }}
      />
    </motion.main>
  );
}

export default SpinInterpolation