import React, { useState } from 'react'
import {useCounter} from './Counter/useCount'

const App = () => {
  const [input,setInput] =useState("")
  const {count,increment,decrement,reset,changeByValue} = useCounter(0)
  return (
    <>
    <h1>Counter App</h1>
    <h1>Count : {count} </h1>
    <button onClick={increment}> Increment</button>
    <button onClick={decrement}> Decrement </button>
    <button onClick={reset}>Reset</button>
    <input type='number' 
    placeholder='Enter number to set'
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    />
    <button onClick={()=>{changeByValue(input)
      setInput("")
    }}>Set Value</button>


    
    </>
  )
}

export default App