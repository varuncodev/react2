import React from 'react'

const Navbar = (props) => {
    console.log(props)
  return (
    <div>
      <h1>hello {props.name}</h1>
      <h3>Welcome {props.title}</h3>
    </div>
  )
}

export default Navbar
