import React, { useEffect } from 'react'
import Counter from './components/Counter'
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from './store/counter';
import { fetchData } from './store/userRe'
import User from './components/User'



const App = () => {
  const dispatch = useDispatch()
  
  // for render check
  // const state =useSelector(state=>state.counter)
  // console.log(state)
  useEffect(()=>{
    dispatch(fetchData())
  },[])


  return (
  <>
    <div className="flex justify-center mt-10">
    <input className='border border-gray-400 px-3 py-2 rounded' placeholder="enter name" onChange={(e)=>{
    dispatch(changeName(e.target.value))
     }}/>
    </div>
   
    <Counter/>
    <User/>
    
  </>
   
  )
}

export default App