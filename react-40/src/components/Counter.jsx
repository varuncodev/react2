import React, { useEffect } from "react";
import {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { changeByValue, decrement, increment, reset } from "../store/counter";

const Counter = () => { 

  const [value, setValue] = useState(0)
  const data = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // console.log(data)

  const handleIncre = () => {
    dispatch(increment());
  };

  const handleDecre = () => {
    dispatch(decrement());
  };
  const handleReset =()=>{
    dispatch(reset())
  }

  const handleChangeValue = () =>{
    dispatch(changeByValue(value))
  }

  useEffect(()=>{
    console.log("re render hua h ")
  })

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">Count : {data}</h1>

        <div className="flex gap-4">
          <button onClick={handleIncre} className="bg-amber-600 rounded-xl p-2">Increment +</button>
          <button onClick={handleDecre} className="bg-amber-500 rounded-xl p-2">Decrement -</button>
          <button onClick={handleReset} className="bg-amber-300 rounded-xl p-2">Reset</button>
          <input className="border border-gray-300 focus:border-blue-500 focus:outline-none" type="number" placeholder=" Enter Number" onChange={(e)=>setValue(e.target.value)}/>
          <button onClick={handleChangeValue} className="bg-red-300 rounded-xl p-2">Change by Value</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
