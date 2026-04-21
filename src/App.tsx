import React from 'react'
import EmojiWrapper from './components/Emoji/EmojiWrapper'
import AnimatedBorder from './components/AnimatedBorder/AnimatedBorder'
import Revolver from './components/RevolverMenu/Revolver'
import AnimatedTitle from './components/AnimatedTitle/AnimatedTitle'
import Hammer from './components/Hammer/Hammer'

const App = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
      <EmojiWrapper/>
      <AnimatedBorder/>
      <Revolver />
      <AnimatedTitle titles={[
        {name: "Hello", bgColor:"red"},
        {name: "világ", bgColor:"green"},
        {name: "hihihi", bgColor:"yellow"}
        ]}/>
      <Hammer/>
    </div>
  )
}

export default App
