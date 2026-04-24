import React from 'react'
import Ternary from './Components/Ternary'
import Switch from './Components/Switch'
const App = () => {

  return (
<>
<Ternary  isLoggedIn={true} isAdmin={"A"}/>
<Switch />
</>
  )
}

export default App
