import { useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
     if(!cart.find((item)=>item.id === product.id)){
       setCart([...cart,product])
     }
  };

  const removeCartId = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const removeAllCart = () => {
    setCart([]);
  };

  return { cart, addToCart, removeCartId, removeAllCart };
};

export default useCart;