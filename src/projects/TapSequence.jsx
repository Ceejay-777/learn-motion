import React from 'react'
import {motion, useAnimate} from 'motion/react'

const TapSequence = () => {
  const [clickScope, clickAnimate] = useAnimate()

  const sequence = () => {
    const ele = clickScope.current
    clickAnimate([
      [ele, { rotate: -90 }],
      [ele, { scale: 1.5 }],
      [ele, { rotate: 0 }],
      [ele, { scale: 1 }],
    ], {duration: 2});
    // clickAnimate(ele, {rotate: -90})
  }
  return (
    <main className="w-screen min-h-screen bg-yellow-200 flex justify-center items-center">
      <motion.div className='w-36 h-36 rounded-3xl bg-white shadow-md' ref={clickScope} onClick={sequence}/>
    </main>
  )
}

export default TapSequence