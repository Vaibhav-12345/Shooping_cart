
import React from "react";


const Wishlist = ({addToCart,removWishlit,whislist}) => {

  return (
    <>
    <div className="w-full px-5 py-3 flex flex-wrap">
      {whislist.map((item)=>{
        return (
          <div key={item.id} className="px-5 py-5 mx-3 my-3 flex-col items-center  border  border-black text-center">
            <img src={item.image} className="" alt="" />
            <ul>
              <li>Rs:  {item.price}</li>
              <li> author :{item.author}  </li>
            </ul>
            <div className="w-full flex justify-between">
            <button onClick={()=>addToCart(item)} className="bg-blue-600">Add to cart</button>
            <button onClick={()=>removWishlit(item.id)} className="bg-pink-600">Remove to Wishlist</button>
            </div>
           
          </div>
         )
      })}
    </div>
    </>
  );
};

export default Wishlist;
