import React from 'react'

const Input = ({value, children, set, min = -200, max = 200}) => {
  return (
    <label className="flex justify-between items-center my-4">
      <code>{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
        className=" "
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value) || 0)}
        className="border-0 border-b-2 border-dotted ml-4 focus:outline-none focus:border-solid border-pink-800"
      />
    </label>
  );
};

export default Input