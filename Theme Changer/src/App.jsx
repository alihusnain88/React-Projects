import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState("white")

  function changeColor(colorVal){
    setColor(colorVal)
  }

  return (
    <>
    <div id="container" style={{backgroundColor:color}}> 
    <button onClick={()=>{changeColor("red")}}>Red</button>
    <button onClick={()=>{changeColor("green")}}>Green</button>
    <button onClick={()=>{changeColor("blue")}}>Blue</button>
    <button onClick={()=>{changeColor("purple")}}>Purple</button>
    <button onClick={()=>{changeColor("olive")}}>Olive</button>
    <button onClick={()=>{changeColor("pink")}}>Pink</button>
    <button onClick={()=>{changeColor("aqua")}}>Aqua</button>
    </div>
    </>
  )
}

export default App
