import React from 'react'
import "./Header.css"
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <div className='header'>
        
        <h1 className='header-title'>ReactMeals</h1>
        <button className='cart-button'><FaShoppingCart /> Your Cart <div className='cart-count'>1</div></button>
    </div>
  )
}

export default Header