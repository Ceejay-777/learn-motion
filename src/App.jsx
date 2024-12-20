import { useState } from 'react'
import './App.css'
import Overview from './overview/Overview'
import Scroll from './overview/Scroll'
import {Toggle} from './overview/Layout'
import Exit from './overview/Exit'
import MotionOne from './motion/motionOne'
import Samples from './motion/Samples'
import Keyframes from './motion/Keyframes'
import Variants from './motion/Variants'
import Drag from './motion/Drag'

function App() {

  return (
    <div>
      {/* <Overview /> */}
      {/* <Scroll /> */}
      {/* <Toggle /> */}
      {/* <Exit /> */}
      {/* <MotionOne /> */}
      {/* <Samples /> */}
      {/* <Keyframes /> */}
      {/* <Variants /> */}
      <Drag />
    </div> 
  )
}

export default App
