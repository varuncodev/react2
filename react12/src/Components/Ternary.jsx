import React from 'react'

const Ternary = ({ isLoggedIn, isAdmin }) => {

  let content;

  if (!isLoggedIn) {
    content = <h1>Please Login</h1>;
  } else if (isAdmin) {
    content = <h1>Admin Panel</h1>;
  } else {
    content = <h1>User Dashboard</h1>;
  }

  return (
    <div>
      {content}
    </div>
  )
}

export default Ternary
