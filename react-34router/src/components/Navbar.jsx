import React from 'react'
import {Link, NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="bg-[lightseagreen] flex gap-5">

      <NavLink to="/Home" className={({isActive})=> isActive ? "text-red-600": ""}>Home</NavLink>
        <NavLink to="/About" className={({isActive})=> isActive ? "text-red-600": ""}>About</NavLink>
        <NavLink to="/Contact" className={({isActive})=> isActive ? "text-red-600": ""}>Contact</NavLink>
        <NavLink to="/Services" className={({isActive})=> isActive ? "text-red-600": ""}>Services</NavLink>   

        {/* <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Services">Services</Link>     */}
    </div>
  )
}

export default Navbar