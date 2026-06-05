import React from 'react'
// import Ternary from './Components/Ternary'
// import Switch from './Components/Switch'
import Popup from './Components/Popup'
import { useState } from 'react'
import Navbar from './Components/Navbar'


const App = () => {
  const [popup, setPopup] = useState(false)
  const [editPopup, setEditPopup] = useState(false)




  return (
<>
<Navbar />
{/* <Ternary  isLoggedIn={true} isAdmin={"A"}/>
<Switch /> */}
<div className='flex justify-center items-center'> 

<button className='hover:bg-orange-200 text-orange-800 p-2 rounded m-auto border border-red-800' onClick ={()=>setPopup(true)}>Delete</button>

<button className='hover:bg-orange-200 text-orange-800 p-2 rounded  m-auto my-40 border border-red-800' onClick ={()=>setEditPopup(true)}>Edit</button>

</div>

<Popup popup={popup} setPopup={setPopup} title="Confirm Delete" description="Are you sure you want to delete this item?" />

<Popup popup={editPopup} setPopup={setEditPopup} title="Edit Item" description="Are you sure you want to edit this item?" />

</>
  )
}

export default App
