import React from 'react'
import { Link } from 'react-router-dom';
import "../cardWith4products/Card4Advertisment.css";

const Card4Advertisment = ({propss}) => {
  return (
    <div className="main-container-4ads" key={propss.id}>
        <h2>{propss.label}</h2>
        <div className="inner-container-4ads">
            <Link to={"/productPage/" + propss.item[0].itemLabel}><img src={propss.item[0].imgUrl}/><p>{propss.item[0].itemLabel}</p></Link>
            <Link to={"/productPage/" + propss.item[1].itemLabel}><img src={propss.item[1].imgUrl}/><p>{propss.item[1].itemLabel}</p></Link>
            <Link to={"/productPage/" + propss.item[2].itemLabel}><img src={propss.item[2].imgUrl}/><p>{propss.item[2].itemLabel}</p></Link>
            <Link to={"/productPage/" + propss.item[3].itemLabel}><img src={propss.item[3].imgUrl}/><p>{propss.item[3].itemLabel}</p></Link>
        </div>
        <a href="#####" className="item-offers-4ads">See all offers</a>
    </div>
  )
}

export default Card4Advertisment
