import React from 'react'
import "./FinalProductCard.css";
import Star from 'src/components/productPages/addCartBuyPage/Star';
import { Link} from 'react-router-dom';
import CurrencyFormatter from 'src/components/currencyFormatter/CurrencyFormatter';


const FinalProductCard = ({ productProp }) => {
  return (

    <div className='main-container-final-product'>
      <Link to={`/cartPage/${productProp.id}`}>
        <div className="inner-container-final-product">
          <div className="img-zxy-container">
            <img src={productProp.images.imgUrl1} alt="item-image" />
          </div>
          <div className='product-zxy-info-box'>
            <p className='product-detailed-discription-box'>{productProp.discription}</p>
            <Star itemRating={productProp} />
            <p id="deal-zxy">Deal of the Day</p>
            <div className='price'>
              <p id="product-price"><sup><span>₹</span></sup>{<CurrencyFormatter price={productProp.price}/>}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FinalProductCard
