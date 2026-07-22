import React from 'react'
import Navbar from './components/Navbar'
import Category from './components/Category';
import News from './page/News'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Category/>
    
     <News/>
    <Footer/>
    </>
  )
}

export default App