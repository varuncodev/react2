
import React, { useState } from 'react'
import Button from './Button'
import { FaBars, FaTimes,FaGraduationCap } from "react-icons/fa";


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className='bg-amber-100'>

        <div className=' max-w-[80rem] flex justify-between items-center text-fuchsia-700 p-3
        rounded-4xl bg-amber-200 m-auto px-4'>

         <h1 className='text-amber-700 flex items-center gap-1 font-bold text-xl'>
         <FaGraduationCap className='text-2xl text-fuchsia-700' />
          <span>A</span>vo<span>E</span>Du
         </h1>

          {/* Desktop Menu */}
          <div className='hidden md:flex gap-6 items-center'>
            <a href=''>Home</a>
            <a href=''>Work</a>  
            <a href=''>Prices</a> 
            <a href=''>Projects</a>
          </div>

          {/* Desktop Button */}
          <div className='hidden md:block'>
            <Button title='JOIN US'/>
          </div>

          {/* Mobile Icon */}
          <div 
            className='md:hidden text-2xl cursor-pointer'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className='md:hidden flex flex-col items-center gap-4 py-4 bg-amber-200 mt-2 rounded-xl'>
            <a href=''>Home</a>
            <a href=''>Work</a>  
            <a href=''>Prices</a> 
            <a href=''>Projects</a>
            <Button title='JOIN US'/>
          </div>
        )}

      </div>
    </>
  )
}

export default Navbar
