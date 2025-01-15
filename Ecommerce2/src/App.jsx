import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Product from './Pages/Product';
import Wishlist from './Pages/Wishlist';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

import useCart from './hook/useCart';
import useWishlist from './hook/useWishlist';

const App = () => {

  const { cart, addToCart, removeCartId, removeAllCart } = useCart();
  const {whislist,addTOwishlist,removWishlit} =useWishlist();


  return (
    <>
      <Router>
      <Header cart={cart}/>
        <Routes>
          <Route path="/" element={<Product  addToCart={addToCart} addTOwishlist={addTOwishlist} />} />
          <Route path="/wishlist" element={<Wishlist addToCart={addToCart} whislist={whislist} removWishlit={removWishlit}
          />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeCartId={removeCartId} removeAllCart={removeAllCart} />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;