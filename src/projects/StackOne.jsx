import React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useState } from "react";

const StackOne = () => {
  const [index, setIndex] = useState(0);

  return (
    <main className="bg-gradient-to-r from-purple-500 to-purple-800 flex justify-center items-center w-screen min-h-screen">
      <AnimatePresence>
        <Card key={index + 1} frontCard={false} />
        <Card
          key={index}
          drag="x"
          index={index}
          setIndex={setIndex}
          frontCard={true}
        />
      </AnimatePresence>
    </main>
  );
};

const Card = ({ drag, frontCard, index, setIndex }) => {
  const [exitX, setExitX] = useState(0);

  const frontCardVariants = {
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: (custom) => ({
      x: custom,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
    }),
  };

  const backCardsVariant = {
    initial: { scale: 0, y: 105, opacity: 0 },
    animate: { scale: 0.75, y: 30, opacity: 0.5 },
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -100) {
      setExitX(-250);
      setIndex(index + 1);
    }
    if (info.offset.x > 100) {
      setExitX(250);
      setIndex(index + 1);
    }
  };

  const x = useMotionValue(0);
  const xRange = [-150, 0, 150];
  const scale = useTransform(x, xRange, [0.5, 1, 0.5]);
  const rotate = useTransform(x, xRange, [-45, 0, 45], { clamp: false });

  return (
    <motion.div
      className="w-32 h-32 rounded-3xl bg-white cursor-grab text-6xl font-bold text-center flex justify-center items-center absolute"
      drag={drag}
      dragConstraints={{ top: 0, bottom: 0, right: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      style={{ scale, x, rotate }}
      whileTap={{ cursor: "grabbing" }}
      variants={frontCard ? frontCardVariants : backCardsVariant}
      custom={exitX}
      animate="animate"
      initial="initial"
      exit="exit"
      transition={
        frontCard
          ? { type: "spring", stiffness: 300, damping: 20 }
          : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      }
    >
      {index}
    </motion.div>
  );
};

export default StackOne;
