import React from 'react'
import { useMYContext } from '../MyContext';

const F = () => {
  const {setCount} =useMYContext()
  return (<>
   <div className="bg-amber-600 p-10">F
    </div>
    <button onClick={()=>setCount(prev=>prev+1)}>INcrEASe</button>
  </>
   
  )
}

export default F