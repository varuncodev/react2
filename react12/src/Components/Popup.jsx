import React from 'react'
    
const Popup = ({ popup, setPopup, title, description }) => {
  return (
    <>
        
{popup && (
  <div className='absolute top-0 left-0 w-screen  h-screen bg-gray-500'>
  <button className='absolute top-5 right-5 bg-red-500 p-2 rounded-2xl' onClick={()=>setPopup(false)} >
    X
  </button>
  <div className='w-full h-full max-w-[40rem] max-h-[20rem] bg-white m-auto rounded-3xl mt-40 px-2 flex flex-col justify-center items-center'>
  <h1 className='text-xl font-bold mb-4 text-red-600 flex justify-content'>{title}</h1>
  <p>{description}</p>
  <div className='flex gap-4 mt-4'>
    <button className='bg-green-500 text-white p-2 rounded-2xl px-4'>Yes</button>
    <button className='bg-red-500 text-white p-2 rounded-2xl px-4'>No</button>
  </div>
  </div>

  </div>
)}
    </>
  )
}

export default Popup
