import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";

import productdata from '../api'


const Product = ({addToCart,addTOwishlist}) => {

  // we get data from dummy api 
const [products,setProduct]=useState([])

useEffect(()=>{
  setProduct(productdata)
},[])


  return (
    <>
    <div className="w-full px-5 py-3 flex flex-wrap">
      {products.map((item)=>{
        return (
          <div key={item.id} className="px-5 py-5 mx-3 my-3 flex-col items-center  border  border-black text-center">
            <img src={item.image} className="" alt="" />
            <ul>
              <li>Rs:  {item.price}</li>
              <li> author :{item.author}  </li>
            </ul>
            <div className="w-full flex justify-between">
            <button onClick={()=>addToCart(item)} className="bg-blue-600">Add to cart</button>
            <button onClick={()=>addTOwishlist(item)} className="bg-pink-600">Add to Wishlist</button>
            </div>
           
          </div>
         )
      })}
    </div>
    </>
  );
};

export default Product;
