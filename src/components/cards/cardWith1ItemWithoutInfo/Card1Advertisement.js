import React from 'react'
import "./Card1Advertisement.css";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Card1Advertisement = ({ offer }) => {
    const id = useParams();
    return (
        <Link className='main-container-link' to={`/cartPage/${offer.id}`}>
            <div className='main-container-1ads'>
                <div className='inner-container-1ads'>
                    <div className="message-1ads">
                        <h2>Best deals on Electronic products <br />30% off</h2>
                    </div>
                    <a href="#####">
                        <div className='img-container-1ads'>
                            <img className='img-1ads' src={offer.images.imgUrl1} />
                        </div>
                    </a>
                </div>
            </div>
        </Link>
    )
}
{/* <Link to={`/cartPage/${productProp.id}`}> */}
export default Card1Advertisement
