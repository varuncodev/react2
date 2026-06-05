import React from 'react'
import { useState } from 'react'
import Nav from './Navbar'
import './App.css'
import Butt from './Components/Butt' 



const App = () => {
const [count,setCount] = useState(0)

function incre(){
 setCount(count+1)
}

function decre(){
  if(count>0){
  setCount(count-1)
  }

}

function reset(){
  setCount(0)
}
let user ={
  name:'varun',
  age:25
}

  return (
    <>
      <Nav name='varun' title='software developer'/>
    

      <h1>Counter App</h1>
      <h3>Value is : {count} </h3>
      <div className='btn'>
      {/* <button onClick={incre}>Increase</button>
      <button onClick={decre}>Decrease</button>
      <button onClick={reset}>Reset</button> */}

      <Butt count ="INCREMENT" setCount ={incre}/>
      <Butt  count ="DECREAMENT" setCount ={decre}/>
      <Butt count ="RESET" setCount ={reset}/>

      </div>
      {React.createElement('h1',null,'Hello,Muskan')}



    {/* <div className='card'>
      <h1>My name is {user.name}</h1>
      <p>I am ${user.age} year old.</p>
    </div> */}


    {React.createElement('div',{className:'card'},
    React.createElement('h1',null,`My Name is ${user.name}`),
    React.createElement('p',null,`I am ${user.age} year old.`)
    
    )}

      </>

  )
}



export default App
