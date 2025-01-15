import { useState } from "react"
const useWishlist = () => {
  const [whislist,setWishlist]=useState([])

  const addTOwishlist=(product)=>{
    if(!whislist.find((item)=>item.id=== product.id)){
        setWishlist([...whislist,product])
    }
  }

  const removWishlit =(id)=>{
   setWishlist(whislist.filter((item)=>item.id!==id))
  }
  

  return {whislist,addTOwishlist,removWishlit}
}

export default useWishlist