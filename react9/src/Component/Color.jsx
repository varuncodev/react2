import React from 'react'

const Color = () => {

    function Colo(){
        
    }


  return (
      <>
    <div className='font-bold text-3xl' onClick={Colo}>
      <h1>heelo world</h1>
      <div className='justify-center flex gap-4 '>
      <button className='text-red-600 bg-red-200 rounded-lg px-2'>Red</button>
      <button className='text-blue-600 bg-red-200 rounded-lg px-2'>Blue</button>
      <button className='text-orange-600 bg-red-200 rounded-lg px-2'>Orange</button>
      <button className='text-pink-600 bg-red-200 rounded-lg px-2'>Pink</button>
      <button className='text-yellow-600 bg-red-200 rounded-lg px-2'>Yellow</button>
      <button className='text-violet-600 bg-red-200 rounded-lg px-2'>Violet</button>
      <button className='text-green-600 bg-red-200 rounded-lg px-2'>Green</button>
      </div>
      
    </div>
    <div className='h-[20rem] w-[20rem] bg-red-100 m-auto mt-30'>{Colo}


      </div>
    </>
  )
}

export default Color
