import React from 'react'

const App = () => {
  const content = ['Varun','rohit','satyarth','satyarth','satyarth','satyarth','satyarth','satyarth','satyarth','satyarth','satyarth','satyarth']

  return (
    <div>
    <h1>Welcome Back!</h1>
    {content.map((item,index)=>
    {
      return (
        <h1 key={index}>
          {item}
        </h1>
      );
    })}
      
    </div>
  )
}

export default App
