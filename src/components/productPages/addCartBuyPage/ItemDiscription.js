import React from 'react'
import "../addCartBuyPage/ItemDiscription.css";
import Star from './Star';
import CurrencyFormatter from 'src/components/currencyFormatter/CurrencyFormatter';


const ItemDiscription = ({productProp}) => {
  const AboutItem = () =>{
   let aboutList = productProp.about.map((info) => <li>{info}</li>
  );
  return <ul>{aboutList}</ul>
} 

  return (
    <>
        <div className='main-container-product-discription'>
            <div className='item-main-heading'>
                <p>{productProp.discription}</p>
            </div><hr/>
            <div className='star-ratings'>
                <Star itemRating={productProp}/>
            </div>
            <p className="current-price-item-discription"><span><sup>₹</sup></span>{<CurrencyFormatter price={productProp.price}/>}</p>
            <hr/>
            <div className='discription-about-item'>
              <h4>About this item</h4>
              {AboutItem()}
            </div>
        </div>
    </>
  )
}

export default ItemDiscription
