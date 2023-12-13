import React from 'react'
import "./CardFlex.css";
import Star from 'src/components/productPages/addCartBuyPage/Star';
// import buds from "../../images/ipodImages/ipod_truke.png";


const CardFlex = ({}) => {
    return (
        <div className='cards'>
            <a href="##">
                <div className='cards-container'>
                    <div className='images-container'><img src="images/ipodImages/ipod_oppo_air2.png"/></div>
                    <div className='products-info'>
                        <p>Newly launched turke buds Clarity 5 true Wireless in
                            ear EarBuds, 5Mic adv. ENC. 80H playtime. 35m Ultra- low
                        </p>
                        <Star/>
                        <p id="messages">Deal of the Day</p>
                        <div className='prices'>
                            <sup><span>₹</span></sup>
                            <p id="products-prices"><span>1,499</span></p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CardFlex
