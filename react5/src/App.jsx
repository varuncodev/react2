import Cards from './Components/Cards'
import './App.css'

import React from 'react'

const App = () => {
  return (
    <div  className='grid'>
      <Cards title='katrina' desc='THis is short intro'/>
      <Cards title='Rashmika' desc='School'/>
      <Cards title='Mona' desc='Bag'/>
      <Cards title='Pooja' desc='Money'/>
      <Cards title='Sunny' desc='Life'/>
      <Cards title='Nisha' desc='BMW'/>
      <Cards title='Aditi' desc='Auddi'/>
      
    </div>
   
  )
}

export default App
