import React, { useEffect } from 'react'
import  {useSelector} from 'react-redux'
const Product = () => {
    
    const cart =useSelector(state=>state.cartReducer)
    const pro =useSelector(state=>state.productReducer.products)
    const count =useSelector(state=>state.productReducer.count)
    //   const cart = useSelector((state) => state.cart);
//    console.log(pro)
// console.log(state)

    useEffect(()=>{
        console.log("re-render")
    })

  return (
   <div>
    {  JSON.stringify(pro)}
    {  JSON.stringify(count)}
    <div>
        {  JSON.stringify(cart)}
    </div>
    <h1>COunt: {count}</h1>
    
   
    </div>


   
   
  )
}

export default Product