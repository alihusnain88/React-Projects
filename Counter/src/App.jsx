import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function increment(){
    count<10 ? setCount(count+1) : setCount(count)
    // setCount((count)=>{return count+1})
    // setCount((count)=>{return count+1})
    // setCount((count)=>{return count+1})
    // setCount((count)=>{return count+1})
  }
  
  function decrement(){
    count>0 ? setCount(count-1): setCount(count)
  }


  return (
    <>
    <button onClick={increment}>Increment: {count}</button>
    <button onClick={decrement}>Decrement: {count}</button>
    </>
    
  )
}

export default App
