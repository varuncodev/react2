import React, { useState } from 'react'

const App = () => {
const [isFruit, setIsFruit] = useState(false)
const [isVegetable, setIsVegetable] = useState(false)
const [isSalad, setIsSalad] = useState(false)


// const changer =(e) => {
//  setIsChecked(e.target.checked)
// }
const handleSelectAll = (e) =>{
  // const checked =e.target.checked
  setIsFruit(e.target.checked)
  setIsVegetable(e.target.checked)
  setIsSalad(e.target.checked)
}

  return (
   <>
   <label>  
  <input type='checkbox'
  checked={isFruit && isVegetable && isSalad}
  onChange={handleSelectAll} 
  />
   Select All
   </label>
   <br></br>
  
   <label htmlFor='a'>  
  <input id='a' type='checkbox'
  checked={isFruit}
  onChange={(e)=>setIsFruit(e.target.checked)} 
  />
   Fruits
   </label>
   <br></br>
   
     <label htmlFor='c'>  
  <input id='c' type='checkbox'
  checked={isVegetable}
  onChange={(e)=>setIsVegetable(e.target.checked)} 
  />
  Vegetables
   </label>
   <br>


   </br>
     <label htmlFor='b'>  
  <input id='b' type='checkbox'
  checked={isSalad}
  onChange={(e)=>setIsSalad(e.target.checked)} 
  />
  Salads
   </label>


   
      <hr />

      <p>Fruits: {isFruit ? "✅ Selected" : "❌ Not Selected"}</p>
      <p>Vegetables: {isVegetable ? "✅ Selected" : "❌ Not Selected"}</p>
      <p>Salads: {isSalad ? "✅ Selected" : "❌ Not Selected"}</p>
   </>
  )
}

export default App