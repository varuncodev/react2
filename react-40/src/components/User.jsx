import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


const User = () => {
  
  const users =useSelector(state=>state.user.users.users)
  console.log(users)
  const dispatch= useDispatch()


  useEffect(()=>{
      
  },[])


  return (
    <div>User</div>
  )
}

export default User