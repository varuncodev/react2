import React from 'react'
import Cards from './Components/Cards'

const App = () => {
  return (
    <div className='p-[1rem] grid grid-cols-4 gap-12 max-[1200px]:grid-cols-3 max-[950px]:grid-cols-2 max-[600px]:grid-cols-1'>

    <Cards name="Rakesh Sharma" profession="Engineer" imgUrl="https://picsum.photos/300?random=1" />

<Cards name="Amit Verma" profession="Doctor" imgUrl="https://picsum.photos/300?random=2" />

<Cards name="Priya Singh" profession="Designer" imgUrl="https://picsum.photos/300?random=3" />

<Cards name="Neha Gupta" profession="Teacher" imgUrl="https://picsum.photos/300?random=4" />

<Cards name="Rahul Mehta" profession="Developer" imgUrl="https://picsum.photos/300?random=5" />

<Cards name="Sonia Kapoor" profession="Lawyer" imgUrl="https://picsum.photos/300?random=6" />

<Cards name="Vikas Yadav" profession="Engineer" imgUrl="https://picsum.photos/300?random=7" />

<Cards name="Anjali Mishra" profession="Doctor" imgUrl="https://picsum.photos/300?random=8" />

<Cards name="Karan Malhotra" profession="Designer" imgUrl="https://picsum.photos/300?random=9" />

<Cards name="Pooja Chauhan" profession="Teacher" imgUrl="https://picsum.photos/300?random=10" />

<Cards name="Arjun Reddy" profession="Developer" imgUrl="https://picsum.photos/300?random=11" />

<Cards name="Meera Nair" profession="Lawyer" imgUrl="https://picsum.photos/300?random=12" />



    </div>
  
  )
}

export default App
