import React from "react";
import { motion } from "motion/react";

const hue = (h) => `hsl(${h}, 100%, 50%)`;

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const food = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  //   ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];

const ScrollOne = () => {
  return (
    <main className="bg-zinc-700 ">
      <div className="mx-auto max-w-[500px] bg-zinc-700 w-full">
        {food.map(([emoji, hueA, hueB]) => (
          <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
        ))}
      </div>
    </main>
  );
};

const Card = ({ emoji, hueA, hueB }) => {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={`overflow-hidden -mb-30 flex justify-center items-end h-[430px] relative`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.6, once:true }}
    >
      <div
        className={`h-[240px] rounded-3xl w-full absolute -rotate-6 origin-bottom-left -bottom-12`}
        style={
          {
            background,
          }
        }
      >
      </div>
        <motion.div
          className={`text-[164px] w-[300px] h-[430px] flex justify-center items-center rounded-3xl bg-white mx-auto z-30 `}
          style={{
            boxShadow:
              "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
            transformOrigin: "10% 60%",
          }}
          variants={cardVariants}
        >
          {emoji}
        </motion.div>
    </motion.div>
  );
};
export default ScrollOne;
