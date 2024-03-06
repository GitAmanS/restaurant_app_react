import React, { useState } from 'react';
import './Cart.css';

const Cart = ({cartOpen, setCartOpen}) => {

  

  function handleCart(){
    setCartOpen((prevcart)=>{
        return prevcart === false
    })
  }
  return (
    cartOpen ? (
      <div className='cartcontainer'>
        <div className='cartitems'>
          <div className='carttotal'>
            <h1>Total Amount</h1>
            <h1>Rs 500</h1>
          </div>

          <div className='cartbuttons'>
            <button onClick={handleCart}  className='Close'>Close</button>
            <button onClick={handleCart} className='Order'>Order</button>
          </div>
        </div>
      </div>
    ) : (
      <div></div>
    )
  );
};

export default Cart;
