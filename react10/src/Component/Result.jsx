
import React from 'react'

const Result = ({score}) => {      
    return (
        <div className='flex flex-col justify-center items-center mt-5 gap-3'>
            <h2 className='text-2xl font-bold text-red-500'>Quiz Over!</h2>
            <p className='text-lg text-green-500'>Your final score is:  {score} / 20</p>
        </div>
    )
}           
export default Result