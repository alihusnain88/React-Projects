import React, { useEffect, useRef, useState } from 'react'
import './Generator.css'

function Generator() {
    let [length, setLength] = useState(8)
    let [password, setPassword] = useState("")
    let [numbersAllowed, setNumbersAllowed] = useState(false)
    let [charactersAllowed, setCharacterssAllowed] = useState(false)

    let textAreaRef = useRef()


    

    function randomTextGenerator(){
        let randomText = ""
        let alphabets = "abcdefgijklmnopqrstuvwxyz"
        let numbers = "0123456789"
        let characters = "!@#$%^&*()"

        let textSpace = ""
        textSpace += alphabets

        if(numbersAllowed) textSpace += numbers
        if(charactersAllowed) textSpace += characters

        for(let i=1; i<=length; i++){
            let charIndex = Math.floor(Math.random() * textSpace.length)
            randomText += textSpace.charAt(charIndex)
        }
        setPassword(randomText)
        
    }

    const copyToClipBoard = () => {
        textAreaRef.current.select()
        window.navigator.clipboard.writeText(password)
    }

    useEffect(randomTextGenerator, [length, numbersAllowed, charactersAllowed])

  return (
    <>
    <div className="main">
    <h1>Password Generator</h1>
        <div className="textContainer">
            <textarea name="text" id="text" value={password} placeholder="Your Password" 
            ref={textAreaRef}
            ></textarea>
            <button onClick={copyToClipBoard}>Copy</button>
        </div>
        
        <div>
        <input type="range" id="slider" 
        min = {6} max = {25}
        onChange={(e)=>{setLength(e.target.value)}}/>
        <label htmlFor="slider">Length ({length})</label>

        <input type="checkbox" id="numbers" defaultChecked={false} onClick={()=>{setNumbersAllowed((prev)=>{return !prev})}}/>
        <label htmlFor="numbers">Numbers</label>

        <input type="checkbox" id="characters" defaultChecked={false} onClick={()=>{setCharacterssAllowed((prev)=>{return !prev})}}/>
        <label htmlFor="characters">Characters</label>
        </div>
    </div>
    </>
  )
}

export default Generator