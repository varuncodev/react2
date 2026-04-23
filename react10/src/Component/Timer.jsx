import React from 'react'
import { useState, useEffect } from 'react'

const Timer = ({ setisOver }) => {

    const [leftTime, setLeftTime] = useState(5)
    const [formattedTime, setFormattedTime] = useState('')

    useEffect(()=>{
        let intervalId = setInterval(()=>{
        setLeftTime((prev)=> {
            if(prev ===0){
                clearInterval(intervalId);
                
                return 0;

            }
            return prev-1;
        })
        },1000);
        // cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        }
    },[])


       useEffect(() => { 
        if(leftTime === 0){
            setisOver(true)
        } 
     let formattedTime = 
     ( `${Math.floor(leftTime / 60).toString().padStart(2, '0')}:${(leftTime % 60).toString().padStart(2, '0')}`
    );
    setFormattedTime(formattedTime);
    },[leftTime]);


  return (
    <div className='flex flex-col justify-center items-center mt-5 gap-3'>
      <p className='text-xl font-bold'>Time left: {formattedTime}</p> 
    </div>
  )
}

export default Timer
