import React, { useState } from "react";
import { motion } from "motion/react";
import { useDebounce } from "use-debounce";

const AspectRatio = () => {
  const [aspect, setAspect] = useState(1);
  const [width, setWidth] = useState(100);
  const [ratio] = useDebounce(aspect, 200);
  const [desWidth] = useDebounce(width, 200);

  const handleInput = (callback) => (e) => callback(e.currentTarget.value);

  return (
    <main className="w-screen min-h-screen flex justify-center items-center bg-black">
      <motion.div
        layout
        style={{ aspectRatio: `${ratio}`, width: parseFloat(desWidth) }}
        className="rounded-2xl bg-teal-700"
      />

      <div className="fixed bottom-0 flex text-white justify-between bg-zinc-600 w-full p-6 font-semibold text-lg">
        <div>
          <label htmlFor="aspect-ratio">Aspect ratio</label>
          <input
            id="aspect-ratio"
            name="aspect-ratio"
            type="number"
            value={aspect}
            onChange={handleInput(setAspect)}
            className="rounded-full py-2 px-4 mx-2 text-black"
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            id="width"
            name="width"
            type="number"
            value={width}
            onChange={handleInput(setWidth)}
            className="rounded-full py-2 px-4 mx-2 text-black"
          />
        </div>
      </div>
    </main>
  );
};

export default AspectRatio;
