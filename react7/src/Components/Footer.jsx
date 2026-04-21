import React from 'react'

const Footer = () => {
  return (
     <>
   

    
   <div className=' max-w-[80rem] p-3 m-auto grid grid-cols-6 '>
<h1 className='text-amber-700'><span>A</span>vo<span>E</span>Du</h1>
   {/* <img  src="https://xpertlab.com/wp-content/uploads/2024/05/3-1.jpg" 
      alt="image"
        style={{ width: "300px", height: "auto" }} /> */}


   <div className=' flex flex-col gap-1'>
   <h1 className='text-pink-700 mb-2 font-bold'>Company</h1>
   <a href=''>Home</a>
   <a href=''>Work</a>  
   <a href=''>Prices</a> 
   <a href=''>Projects</a>
   </div>
      <div className=' flex flex-col gap-1 '>
      <h1 className='text-pink-700 mb-2 font-bold'>Pricing</h1>
   <a href=''>Home</a>
   <a href=''>Work</a>  
   <a href=''>Prices</a> 
   <a href=''>Projects</a>
   </div>

   <div className=' flex flex-col gap-1 '>
   <h1 className='text-pink-700 mb-2 font-bold'>Resources</h1>
   <a href=''>Home</a>
   <a href=''>Work</a>  
   <a href=''>Prices</a> 
   <a href=''>Projects</a>
   </div>

   <div className=' flex flex-col gap-1 '>
   <h1 className='text-pink-700 mb-2 font-bold'>Social</h1>
   <a href=''>Home</a>
   <a href=''>Work</a>  
   <a href=''>Prices</a> 
   <a href=''>Projects</a>
   </div>

   <div className=' flex flex-col gap-1 mb-5'>
   <h1 className='text-pink-700 mb-2 font-bold'>Awards</h1>
   <a href=''>Home</a>
   <a href=''>Work</a>  
   <a href=''>Prices</a> 
   <a href=''>Projects</a>
   </div>
</div>
<div className='w-full h-[1px] bg-black '>


   <div className='max-w-[80rem] m-auto flex justify-between py-2'>
    <p>Copyright trademark 2026 C</p>

    <div className='font-bold rounded-2xl flex gap-3'>
    <a href='' className=' bg-blue-400 rounded-4xl px-1'>FA</a>
    <a href='' className=' bg-cyan-800 rounded-4xl px-1'>EA</a>
    </div>
    
   </div>

</div>


   </>
 
  )
}

export default Footer
