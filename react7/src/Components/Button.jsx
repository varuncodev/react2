import React from 'react'

const Button = (props)=>{
  return (
    <div>
       <button className='rounded-lg bg-amber-300
   px-2 '>{props.title}</button>
    </div>
  )
}

export default Button
