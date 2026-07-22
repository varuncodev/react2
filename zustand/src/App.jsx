import React from 'react'
import useMystore from './store';
import Navbar from './components/Navbar'

const App = () => {
  const stat =useMystore()
  console.log(stat)
  return (
    <div >App
      <Navbar/>
    </div>
  )
}

export default App