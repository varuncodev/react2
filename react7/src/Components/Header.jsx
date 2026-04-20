import React from 'react'
import Button from './Button'

const Header = () => {
  return (<>


    <div className='max-w-[70rem] m-auto text-center py-40 '>
      <h1 className='font-extrabold font-serif text-7xl '>Responsive NavBar Interactions
      <spam className='bg-amber-200 rounded-2xl
       '>WITH</spam> Tailwind CSS</h1>
       <p>Compressing objects: 100% (23/23), done.
Writing objects: 100% (25/25), 46.45 KiB | 5.16 MiB/s, done.
Total 25 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with</p>
    
    {/* <button className='bg-amber-400 rounded-2xl  px-3 font-bold'>Click Here to Explore More</button> */}
   
     <Button title="Click Here to Explore More..."/>
    </div>
      </>
  )
}

export default Header
