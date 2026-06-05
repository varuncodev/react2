import React, { useState } from 'react'

const App = () => {
const [gender ,setGender]=useState('')
console.log(gender)

  return (
    <>
    <label htmlFor='male'>
    <input
    id='male'
    name='gender'
     type='radio'
     checked={gender === 'male'}
     onChange={(e)=>setGender(e.target.id)} />
    Male
    </label>
<br></br>
     <label htmlFor='female'>
    <input
    id='female'
    name='gender'
     type='radio' 
     checked={gender === 'female'}
      onChange={(e)=>setGender(e.target.id)}
     />
    Female
    </label>
<br></br>
     <label htmlFor='other'>
    <input
    id='other'
    name='gender'
     type='radio' 
     checked={gender === 'other'}
      onChange={(e)=>setGender(e.target.id)}
     />
    Others
    </label>

      

    </>
  )
}

export default App