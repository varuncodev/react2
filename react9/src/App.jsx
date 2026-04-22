import React, { useState } from 'react'
import Button from './Component/Button'
import Color from './Component/Color'

const App = () => {
  const [colo ,setColo] =useState('');


const colors= ['red','orange','pink','blue','yellow','green','black','violet']


  return (
   <>
    <h1 className='justify-center flex mt-2 font-bold text-4xl bg-pink-100 p-2'>Color Switcher</h1>


    <div className='flex gap-4 my-7 justify-center   '>
    {colors.map((items)=>{
      return(
        <Button key={items} color={items} setColo={setColo}>
        {items}
        </Button> 
      )
    })
    }
    </div>
    <Color color={colo}/>
   </>
  )
}

export default App
