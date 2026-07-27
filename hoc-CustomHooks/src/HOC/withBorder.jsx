import React from 'react'


const withBorder = (Component) => {
  return ()=>{
    return (
        <>
        <div className="border border-black bg-red-400 text-black">
        <Component/>
        </div>
        
        </>
    )
  }
}

export default withBorder