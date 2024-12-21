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
import ScrollOne from './motion/ScrollOne'
import AniPresence from './projects/AniPresence'

function App() {

  return (
    <div className='w-screen min-h-screen'>
      {/* <Overview /> */}
      {/* <Scroll /> */}
      {/* <Toggle /> */}
      {/* <Exit /> */}
      {/* <MotionOne /> */}
      {/* <Samples /> */}
      {/* <Keyframes /> */}
      {/* <Variants /> */}
      {/* <Drag /> */}
      {/* <ScrollOne /> */}
      {/* <AniPresence /> */}
      <StackOne />
    </div> 
  )
}

export default App
