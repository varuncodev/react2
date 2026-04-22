import React from 'react'
import { FaSquareFacebook, FaTwitter,FaRegMessage } from "react-icons/fa6";
import { FaInstagramSquare,FaCameraRetro, } from "react-icons/fa";
import Button from './Button';
import { CiHeart } from "react-icons/ci";
import { BiShare } from "react-icons/bi";


const Cards = ({name,profession,imgUrl}) => {
  return (
 <div className='shadow-2xl rounded-xl w-full overflow-hidden'>
  <div className='relative w-full h-[10rem] bg-blue-400 rounded-lg aspect-video '>
  <img src={imgUrl} alt='Person Image' className='absolute h-full rounded-full aspect-square object-cover object-top  left-1/2 translate-y-1/4 -translate-x-1/2 border-4 border-blue-400 p-1 bg-white '/>

  </div>

  {/* bottom part */}
  <div className='flex flex-col items-center pt-[3rem] '>
    <h1 className='text-2xl font-bold'>{name}</h1>
    <p>{profession}</p>
    
    <div className='flex gap-2 pt-4'>
      <FaSquareFacebook  className='text-blue-800 text-4xl'/>
      <FaTwitter className='text-blue-400 text-4xl'/>
      <FaInstagramSquare className='text-pink-400 text-4xl'/>
      <FaCameraRetro className='text-black-400 text-4xl'/>
    </div>
    
    <div className='flex gap-[2rem] py-2 '>
      <Button text='Follow'/>
      <Button text='Message'/>
    </div>
    <div>
      <div className='flex gap-3 items-center py-19'>
        <CiHeart  className='text-red-600'/>
        <span>40.8K</span>
        <Line/>
        <FaRegMessage className='text-blue-400'/>
         <span>90.4M</span>
          <Line/>
        <BiShare className='text-orange-500' />
         <span>120M</span>
      </div>
    </div>
  </div>
 </div>
 
  )
}


const Line = () => {
  return (
    <div className='w-[1px] h-[1.1rem] bg-black/40'>
      
    </div>
  )
}




export default Cards
