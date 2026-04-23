import React from 'react'
import Timer from './Component/Timer'
import Questions from './Component/Questions'
import { useState } from 'react'
import Result from './Component/Result'
import question from './Component/question.json'

const App = () => {
   const [score, setScore] = useState(0)
  const [isOver,setisOver] = useState(false)
  return (
  <>
    <h1 className="text-red-400 justify-center flex mt-5 text-2xl font-bold">React 10</h1>
    <Timer setisOver={setisOver} />
    {isOver ? (
      <Result score={score} />
    )
    : (<Questions setisOver={setisOver}  setScore={setScore}/>
    )}
   
    
  </>
  )
}

export default App
