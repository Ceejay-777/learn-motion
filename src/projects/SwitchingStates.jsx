import React from 'react'
import {motion, useMotionValue, useTransform} from "motion/react"

const SwitchingStates = () => {
     const rotate = useMotionValue(0);
     const backgroundColor = useTransform(
       rotate,
       [0, 90],
       ["#0bf", "#60f"]
     );
  return (
    <motion.main className='w-screen min-h-screen flex justify-center items-center bg-[#60f]' style={{backgroundColor}} >
        <motion.div className='w-36 h-36 rounded-3xl bg-white' whileHover={{scale: 0.8, rotate: 90}} style={{rotate}}/>
    </motion.main>
  )
}

export default SwitchingStates