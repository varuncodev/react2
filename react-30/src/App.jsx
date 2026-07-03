import React from 'react'
import { useState } from 'react'

const App = () => {
  const [language,setLanguage] = useState('');

  const languages =['java','c++','python','javascript','c']

 
  return (
    <>
      <select value={language} onChange={(e)=>{
        setLanguage(e.target.value)
      }}>
      <option value=''>--Select Below--</option>
       {languages.map((item)=>(
       <option key={item} value={item}>{item.toUpperCase()}</option>
       )
       )}
         
        {/* <option value='python'>Python</option>
        <option value='javascript'>JavaScript</option> */}
      </select>
    
      <p>Selected Language: {language}</p>
    </>
  )
}

export default App