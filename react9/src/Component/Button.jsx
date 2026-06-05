import React from 'react'

const Button = ({color,setColo ,children}) => {
    function settig(){
        // console.log("setcolor")
        setColo(color)
    }
  return (
    
      <button className='rounded-lg px-2 py-1 font-bold text-white' 
      onClick={settig} style={{
        backgroundColor:color,         
      }} >
      {children}

      </button>
    
  )
}

export default Button
