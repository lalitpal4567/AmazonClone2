import React from 'react'
import "./CarouselCard1ads.css"
import { Link } from 'react-router-dom'

const CarouselCard1ads = ({product}) => {
    return (
        <>
            <Link to={`/cartPage/${product.id}`} className='main-container-carousel-1ads'>
                <div className='inner-container-carousel-1ads'>
                    <div className='img-container-carousel-1ads'>
                        <img className='img-xyz-1ads' src={product.images.imgUrl1}/>
                    </div>
                    <div className='item-details-carousel-1ads'>
                        <div className='item-offer-carousel-1ads'>
                            <p className='offer-carousel-1ads'>25% off</p>
                            <p className='item-deals-carousel-1ads'>Deal of the Day</p>
                        </div>
                        <div className='item-price-container-carousel-1ads'>
                            <p><span><sup>₹</sup></span>{product.price}/-</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CarouselCard1ads
