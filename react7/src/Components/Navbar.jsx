import React from 'react'


const Navbar = () => {
  return (
    <>
    <div className='bg-amber-100'>

    
   <div className=' max-w-[80rem] flex justify-between text-fuchsia-700 p-3
   rounded-4xl bg-amber-200 m-auto '>
<h1 className='text-amber-700'><span>A</span>vo<span>E</span>Du</h1>
   {/* <img  src="https://xpertlab.com/wp-content/uploads/2024/05/3-1.jpg" 
      alt="image"
        style={{ width: "300px", height: "auto" }} /> */}

   <div className='flex gap-6 items-center '>
   <a href=''>Home</a>
   <a href=''>Work</a>  
   <a href=''>Prices</a> 
   <a href=''>Projects</a>

   </div>


   <button className='rounded-lg bg-amber-300
   px-2 '>JOIN US</button>
   </div>
</div>

   </>
  )
}

export default Navbar
