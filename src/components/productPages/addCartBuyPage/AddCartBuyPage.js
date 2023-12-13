import React, { useState } from 'react'
import "./AddCartBuyPage.css";
import AddToCartAndBuy from 'src/components/productPages/addCartBuyPage/AddToCartAndBuy';
import MultiCardSelection from 'src/components/productPages/addCartBuyPage/MultiCardSelection';
import ItemDiscription from './ItemDiscription';
import { useParams } from 'react-router-dom';
import Navbar from 'src/components/navbar/Navbar';
import Footer from 'src/components/footerSection/Footer';
import database from 'src/product_data/database';
import { useCart } from '../CartContext';

const AddCartBuyPage = () => {
  const { addToCart } = useCart();
  const [filteredItem, setFilteredItem] = useState([]);

  let { id } = useParams();

  {
    database.forEach((item) => {
      if(item.id == id){
        filteredItem.push(item);
      }
    })
  }

  function handleAddToCart(item) {
    addToCart(item);
  }

  return (
    <>
      <Navbar />
      <div className='cart-buy-main-container'>
        <div className='cart-inner-container'>
          <MultiCardSelection imgProp={filteredItem[0]} />
          <ItemDiscription productProp={filteredItem[0]} /> 
          <AddToCartAndBuy stock={filteredItem[0]} onAddToCart={() => handleAddToCart(filteredItem[0])} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AddCartBuyPage
