import React, { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'
import { FaAlignJustify } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import './Header.css'

const Header = ({cart}) => {

  const [toggle, setToggle] = useState(false);


  useEffect(() => {
    console.log('Header cart length:', cart.length);
  }, [cart]);


  return (
    <>
      <nav className='text-lg'>
        <div className='left'>
          <span> <a href="/"> Shop now</a> </span>
        </div>

        <ul className={toggle? 'navlink active':'navlink'}>
          <li><NavLink to="/">Product</NavLink></li>
          <li><NavLink to="/wishlist">Wishlist</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
          <li><NavLink to="/cart">Cart - {cart.length} </NavLink></li>
        </ul>


        <div className="menu" onClick={()=>setToggle(!toggle)} >
          {toggle ? 
             <RxCross2 />
          : 
            <FaAlignJustify/>
          }
        </div>

      </nav>



    </>
  )
}

export default Header;