import React, { useState } from 'react'

const App = () => {
const [Password,setPassword] =useState('')
const [length, setLength] = useState(8)
const [isNumber ,setIsNumber] = useState(false)
const [ischar,setIsChar] =useState(false)
console.log(isNumber,ischar)

  return (
    <>
      <h1>Password Generator</h1>
      <input type='text' placeholder='password'
        readOnly ={true}/>
      
      <input type='range' 
        min={0}
        max={100}

      />
      <label>
         <input type='checkbox'
         id='number'
         value={isNumber}

         onChange={(e)=>setIsNumber(e.target.checked)}

      />
      Number
      </label>
      <label>
         <input type='checkbox' 
         id='ischar'
         value={ischar}
         onChange={(e)=>setIsChar(e.target.checked)}


      />
      Character
      </label>
      

      <button>Save password</button>
      <button>Reset Password</button>
      <button>Copy Password</button>

    </>
  )
}

export default App