import React, { useState } from 'react'

const App = () => {
  const [selectMode,setSelectMode] =useState('')

  const payment = [
    {id:'UPI', info:'instant transfer app'},
    {id:'Card', info:'transfer by using  debit credit cards'},
    {id:'COD', info:'payment after item receive'}
  ]
const selectedPayment = payment.find(
  obj => obj.id === selectMode
);

  return (
    <>
    {payment.map(item=>{
      return(

    <label key={item.id} htmlFor='item.id'>
      <input 
      id={item.id}
      name='payment'
      value={item.id}
      type='radio'
      checked={selectMode === item.id}
      onChange={(e)=>setSelectMode(e.target.value)}
      />
       {item.id}
    </label>)

    })}
    <p>Mode of Payemnt: {selectMode}</p>
    <p>Details: {selectedPayment?.info || 'Select a payment method'}</p>
   

    </>
  )
}

export default App