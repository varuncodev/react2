import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './store/action/weatherAction';
import { Search } from './components/search';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';


const App = () => {
  const dispatch =useDispatch()
  const state =useSelector(state=>state)
  console.log(state)

useEffect(()=>{
   dispatch(fetchWeather('Noida'))
},[])

  return (
   <>
   <div className='p-10 flex flex-col items-center'>
    <Search/>
    <div className='pt-20'>
      <CurrentWeather/>
      
    </div>
    <div className='p-10'>
      <Forecast/>
    </div>
    
   </div>

   
   </>
  )
}

export default App