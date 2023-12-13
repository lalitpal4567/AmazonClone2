import React, { useEffect, useState } from 'react'
import "./Carousel5Cards.css"
import CarouselCard1ads from './CarouselCard1ads'
import database from 'src/product_data/database';

const Carousel5Cards = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mobileOffer, setMobileOffer] = useState([]);

    const handleNextSlide = () => {
        // update the state to show the next set of items
        setCurrentSlide((prevSlide) => (prevSlide + 1) % mobileOffer.length);
    };

    const handlePrevSlide = () => {
        // update the state to show the previous set of items
        setCurrentSlide((prevSlide) => (prevSlide - 1 + mobileOffer.length) % mobileOffer.length);
    };


    useEffect(() =>{
        // load the initial data
        let mobiles = database.filter((item) => {
            if(item.subCategory === "phone" && item.offer === 25){
                return item;
            }
            return null;
        })

        setMobileOffer(mobiles);
    },[])


    return (
        <div className='main-container-multiple-carousel-5ads'>
            <h3 id="multiple-carousel-title">Top Deals</h3>
            <div className='multiple-cards-carousel-5ads'>

                {
                    mobileOffer.slice(currentSlide, currentSlide + 10)
                    .map((item, index) =>{
                        return <CarouselCard1ads key = {index} product = {item}/>
                    })
                }

                <button className='caraousel5cardsleftBtn cards-btn' onClick={handlePrevSlide}>&lt;</button>
                <button className='caraousel5cardsrightBtn cards-btn' onClick={handleNextSlide}>&gt;</button>
            </div>
        </div>
    )
}

export default Carousel5Cards
