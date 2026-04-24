import React from 'react'


const Cards = ({ data ,title,rating,review,offers}) => {
  return (
    <>
    <div className ='grid grid-cols-3 pt-3 gap-4 m-auto w-3/4 border-2 border-gray-300 rounded-lg p-4'>

 
        <div >

            <img src={data.image} alt="Image 1" className=" rounded-lg shadow-md" />
        </div>
        <div className='flex flex-col '>
            <h1 className='text-xl font-bold'>{data.title}</h1>
            <div className='flex gap-4 '>
                 <p className='text-green-400'>{data.rating }</p>
                  <span className='text-black-400'>|</span>
                 <p className='text-green-400'>{data.reviews}</p>
            </div>
           
           <div>
{data.details.map((feature,index)=>{
    return <li className='text-gray-600 ' key="">{feature}</li>
})}
            
          </div>

            <p className='text-green-500 font-bold'>{data.offers.exchangeOffer}</p>
            <p >{data.offers.bankOffer}</p>
        </div>
        
        <div >
            <p className='flex justify-center mt-25 font-bold text-2xl'>{data.price}/-</p>
            <p className='flex justify-center text-xl line-through'>{data.originalPrice}/-</p>
            <p className='flex justify-center text-green-500 font-bold text-lg'>{data.discount}</p>
        </div>
    </div>
    </>
  )
}

export default Cards
