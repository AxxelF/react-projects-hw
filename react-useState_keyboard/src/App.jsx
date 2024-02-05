import { useState } from 'react';
import letters from './letters';

function App() {
  const [text, setText] = useState("")
  const [isCaps, setIsCaps] = useState(false)

function addLetter(letter) {
    const newLetter = isCaps ? letter.toUpperCase() : letter
    setText((prev) => prev + newLetter)
  }

function capslock() {
    setIsCaps((prev) => !prev)
  } 

function clear() {
    setText([])
  }  

function backspace() {
    setText((prev) => prev.slice(0, -1))
  }
 
return (
  <>
  <div className="text-wrapper">
    <div className="text">
      <h1>{text}</h1>  
      <button className='key-clear' onClick={clear}>Clear</button>
    </div>
  </div>
  <div className="keyboard-container">
    <button className='key-backspace' onClick={backspace}>backspace</button>
    <button className={isCaps ? 'key-capslock active' : 'key-capslock'} onClick={capslock}>{isCaps ? 'CAPS LOCK' : 'caps lock'}</button>
    <div className="keyboard">    
      {letters.map((letter) => {
        return (
          <button className='key' onClick={() => addLetter(letter)}>
            {isCaps ? letter.toUpperCase() : letter}
          </button>
      )
      })}    
    </div>
    <div className="space">
      <button className="key-space" onClick={() => addLetter(" ")}>Space</button>
    </div>
  </div>
  </>
  )
}

export default App;