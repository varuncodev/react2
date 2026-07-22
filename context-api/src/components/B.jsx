import React from 'react'
import E from './E';
import F from './F';
import { useMYContext } from '../MyContext';

const B = () => {
  const {count} =useMYContext()

  return (
    <div className="bg-pink-500 p-10">B
    {count}
    <E/>
    <F/>
    </div>
  )
}

export default B