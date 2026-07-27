import React from 'react'
import Alpha from './components/Alpha'
import Beta from './components/Beta'
import withBorder from './HOC/withBorder';


const App = () => {

const AlphaWithBorder =withBorder(Alpha)
const BetaWithBorder =withBorder(Beta)
  return (
    <>
  <div className='flex flex-col gap-4'>
    <AlphaWithBorder/>
    <BetaWithBorder/>
  </div>
    

    </>
  )
}

export default App