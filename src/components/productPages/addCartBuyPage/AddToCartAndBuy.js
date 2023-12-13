import React from 'react'
import "./AddToCartAndBuy.css";

const AddToCartAndBuy = ({ stock, onAddToCart }) => {
  return (
    <div className='main-container-addToCart-section'>
      <p id="available-in-stock">{stock.stock}</p>
      <button className='buy-cart-btn' id="add-to-cart" onClick={onAddToCart}>Add to Cart</button>
      <button className='buy-cart-btn' id="buy-now">Buy Now</button>
    </div>
  )
}

export default AddToCartAndBuy
