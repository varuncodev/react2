import { useState } from "react";

export const useCounter = (initialState)=>{
    const [count,setCount] =useState(initialState);

    const increment =()=>{
        setCount(prev=>prev+1)

    }

    const decrement =()=>{
        setCount(prev=>prev-1)
    }

    const reset =()=>{
        setCount(0)
        
    }

    const changeByValue = (value) =>{
        setCount(Number(value))
    }

    return{
        count,
        increment,
        decrement,
        reset,
        changeByValue,
    }

}