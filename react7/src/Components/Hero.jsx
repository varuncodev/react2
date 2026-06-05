
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className='bg-pink-100'>

      <div className='max-w-[70rem] m-auto text-center 
                      py-16 sm:py-24 md:py-32 lg:py-40 
                      px-4'>

        <h1 className='font-extrabold font-serif 
                       text-3xl sm:text-5xl md:text-6xl lg:text-7xl 
                       leading-tight'>

          Responsive NavBar Interactions

          <span className='bg-amber-200 rounded-2xl 
                           px-2 mx-2 inline-block'>
            WITH
          </span>

          Tailwind CSS
        </h1>

        <p className='mt-6 text-sm sm:text-base md:text-lg 
                      leading-relaxed text-gray-700 max-w-2xl mx-auto'>
          Build modern, responsive navigation experiences using Tailwind CSS.
          This layout adapts smoothly across all screen sizes and devices.
        </p>

        <div className='mt-8'>
          <Button title="Click Here to Explore More..." />
        </div>

      </div>

    </div>
  )
}

export default Hero
