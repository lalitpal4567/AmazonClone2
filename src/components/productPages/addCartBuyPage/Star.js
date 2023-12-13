import React from 'react'
import "./Star.css";
import {FaStar, FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";

const Star = ({itemRating}) => {
    const ratingStar = Array.from({length: 5}, (elem, index) =>{
        let number = index + 0.5;
        return <span key={index}>
            {
                itemRating.stars >= index + 1 ? (<FaStar className='star-icon'/>) : itemRating.stars >= number ? (<FaStarHalfAlt className='star-icon'/>) : (<AiOutlineStar className='star-icon'/>)
            }   
        </span>
    })

  return (
    <>
        <div><span className='stars'>{itemRating.stars}</span>
            {ratingStar}<span className='ratings'>{itemRating.reviews} ratings</span>
        </div>
    </>
  )
}

export default Star
