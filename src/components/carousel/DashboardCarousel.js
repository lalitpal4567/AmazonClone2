import React, { useState, useEffect } from "react";
import "./DashboardCarousel.css";

const DashboardCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 5);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [currentSlide, 5, 2000]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % 5);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + 5) % 5);
  };

  return (
    <div className="carousel-container">
      <button className="arrowBtn leftBtn" onClick={prevSlide}>&#10094;</button>
        <div className={`carousel-slide ${0 === currentSlide ? "active" : ""}`}>
            <img src="/images/carouselImages/fashion.jpg"/>
        </div>
        <div className={`carousel-slide ${1 === currentSlide ? "active" : ""}`}>
            <img src="/images/carouselImages/fashion2.jpg"/>
       </div>
       <div className={`carousel-slide ${2 === currentSlide ? "active" : ""}`}>
            <img src="/images/carouselImages/fashion3.jpg"/>
       </div>
       <div className={`carousel-slide ${3 === currentSlide ? "active" : ""}`}>
            <img src="/images/carouselImages/mobile.jpg"/>
       </div>
       <div className={`carousel-slide ${4 === currentSlide ? "active" : ""}`}>
            <img src="/images/carouselImages/mobile2.jpg"/>
       </div>
      <button className="arrowBtn rightBtn" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default DashboardCarousel;

