import React, { useState ,useEffect,useRef } from 'react'

const App = () => {
const [Password,setPassword] =useState('')
const [length, setLength] = useState(8)
const [isNumber ,setIsNumber] = useState(false)
const [ischar,setIsChar] =useState(false)
const [isCopied,setIsCopied] = useState([])
const passwordRef =useRef(null)

// console.log(isNumber,ischar)

function generatePassword(){
  let pass =""
  let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if(isNumber){
    characters += '0123456789'
  }
  if(ischar){
    characters += '!@#$%^&*()_+'
  }
  for(let i =1;i<=length;i++){
    let randomIndecx =Math.floor(Math.random()*characters.length)
    // console.log(randomIndecx)
    let characterPicked = characters.charAt(randomIndecx)
    pass += characterPicked
    
   
  }
  setPassword(pass)
   console.log(pass)
}

useEffect(()=>{
  generatePassword()
},[length,isNumber,ischar])

const copyPassword =()=>{
  navigator.clipboard.writeText(Password)
  passwordRef.current.select()  // to Select the text in the input field
  // alert('Password copied to clipboard')
}

  return (
    <>
      <h1>Password Generator</h1>
      <input type='text' 
      placeholder='password'
        readOnly ={true}
        value={Password}
        ref={passwordRef}
      />
      
      <input type='range' 
        min={0}
        max={100}
        value={length}
        onChange={(e)=>setLength(e.target.value)}


      />
      <label>
         <input type='checkbox'
         id='number'
         checked={isNumber}
         onChange={(e)=>setIsNumber(e.target.checked)}

      />
      Number
      </label>
      <label>
         <input type='checkbox' 
         id='ischar'
         checked={ischar}
         onChange={(e)=>setIsChar(e.target.checked)}


      />
      Character
      </label>
      

      

      <button
      onClick ={()=>{
        setLength(8)
        setIsNumber(false)
        setIsChar(false)
      }}
      >Reset Password</button>

      <button
      onClick={copyPassword}
      >Copy Password</button>

      <button
      onClick ={()=>{
        setIsCopied([...isCopied,Password])
      }}
      
      >Save password</button>
      {isCopied.map((item,index)=>{
        return(
          <p key={index}>
            {item}
          </p>
        )
      })}

    </>
  )
}

export default App