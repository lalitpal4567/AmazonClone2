import React from 'react'
import "./ShoppingCartCard.css";
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const ShoppingCartCard = ({ item }) => {
  const { removeFromCart } = useCart();

  const handleDelete = () => {
    removeFromCart(item.id);
  };
  return (
    <div className='product-info-shopping-cart'>
      <div className='checkbox-shopping-cart'><input type="checkbox" /></div>
      <Link to="#"><img src={item.images.imgUrl1} className='left-section-shopping-cart' /></Link>
      <div className='right-section-shopping-cart'>
        <p className='product-discription-shopping-cart'>{item.discription}</p>
        <div className='product-offer-shopping-cart-container'>
          <div className='product-offer-shopping-cart'>{item.offer}% off</div>
          <div className='product-deal-shopping-cart'>Deal</div>
        </div>
        <div className='product-price-stock'>
          <p id="current-price"><span><sup>₹</sup></span>{item.price}</p>
          <p id="stock-shopping-cart">In stock</p>
          <div className='product-quantity-shopping-cart'>
            <button className='delete-btn-shopping-cart' onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartCard
