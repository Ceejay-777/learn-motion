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
import StackOne from './projects/StackOne'
import SpinShow from './projects/SpinShow'
import TapSequence from './projects/TapSequence'

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
      {/* <Drag /> */}
      {/* <ScrollOne /> */}
      {/* <AniPresence /> */}
      {/* <StackOne /> */}
      {/* <SpinShow /> */}
      <TapSequence />
    </div> 
  )
}

export default App
