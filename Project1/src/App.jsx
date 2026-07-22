import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
     {/* <p>heello all, Warm welcome to my coding class</p> */}
     <Navbar/>
     <Outlet/>
    </>
    
  )
}

export default App