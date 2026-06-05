import React from 'react'

const Button = (props) => {
  return (
   <div className='bg-blue-500 rounded-full py-2 px-5'>
    <button>{props.text}</button>
   </div>
  )
}

export default Button
