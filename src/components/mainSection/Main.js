import React from 'react'
import "./Main.css";
import DashboardCarousel from '../carousel/DashboardCarousel'
import CardCollections from '../cards/cardsCollections/CardCollections'
import Carousel5Cards from '../carousel/Carousel5Cards';

const Main = () => {
    return (
        <>
            <div className='main-section'>
                <DashboardCarousel />
                <div className='cardCollection_Carousel'>
                    <CardCollections />
                    <Carousel5Cards/>
                </div>
            </div>
        </>
    )
}

export default Main
