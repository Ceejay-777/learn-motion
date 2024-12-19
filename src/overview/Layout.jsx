import React from 'react'
import {motion} from 'motion/react'

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
}

const Layout = () => {
  return (
    <motion.div layout transition={spring}>

    </motion.div>
  )
}

export default Layout