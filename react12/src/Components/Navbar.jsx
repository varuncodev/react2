import React from 'react'
import { MdMenuOpen } from "react-icons/md";
import { useState } from 'react';

const Navbar = () => {
    const [hamburger, setHamburger] = useState(false)
  return (
    <div className ='flex justify-between items-center p-3 bg-red-200/12 backdrop-blur-sm border-b border-gray-300'>
      <h1 className='font-bold text-2xl'>logo</h1>
      <div className='flex gap-4 max-[720px]:hidden '>
        <a href="login home">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        
      </div>
      <div className='flex gap-4'>
        <button className='bg-green-500 text-white p-2 rounded-2xl px-4'>Login</button>
        <button className='bg-blue-500 text-white p-2 rounded-2xl px-4'>Signup</button>
        <MdMenuOpen  className='text-4xl min-[720px]:hidden' onClick={()=>setHamburger(!hamburger)}/>

      </div>



      {/* // mobile menu */}
      {hamburger && (
        <div className={`absolute top-0 left-0  bg-black/80 shadow-lg p-4 flex flex-col gap-4 w-full h-screen max-w-[20rem] text-white  py-12 items-center  ${hamburger ? "translate-x-0" : "-translate-x-[100%]"} transition-all duration-600`}>
          <button className='absolute top-5 right-5 bg-red-500 px-2 rounded-2xl' onClick={()=>setHamburger(false)} >
                   X
          </button>
        
        <a className='text-xl hover:text-blue-500' href="login home">Home</a>
        <a className='text-xl hover:text-blue-500' href="#">About</a>
        <a className='text-xl hover:text-blue-500'   href="#">Contact</a>
        <a className='text-xl hover:text-blue-500'   href="#">Contact</a>
        <a className='text-xl hover:text-blue-500'   href="#">Contact</a>
        
      </div>
      )}
    </div>
      
  )
}

export default Navbar
