import React from 'react'
import "../cardWith1Product/Card.css";
import ipod from "./images/ipodImages/ipod2.png";

const Card = () => {
    return (
        <>
            <a href="#">
                <div className='card'>
                    <div className='product-container'>
                        <img src={ipod}></img>
                    </div>
                    <div className='card-info'>
                        <div className='card-off'>
                            <p id="offer">Up to 60% off</p>
                            <p id="message">Deal of the Day</p>
                        </div>
                        <p id="message-line2">Steal Deals on Oppo Accessories</p>
                    </div>
                </div>
            </a>
        </>
    )
}

export default Card