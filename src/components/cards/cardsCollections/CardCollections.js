import React from 'react'
import "./CardCollections.css";
import Card4Advertisement from '../cardWith4products/Card4Advertisement';
import Card1Advertisement from '../cardWith1ItemWithoutInfo/Card1Advertisement';
import advertisement from 'src/product_data/HomePageData';
import database from 'src/product_data/database';

const CardCollections = () => {
    return (
        <div className='cards-collection'>
            { advertisement.map((obj) =>{
                return <Card4Advertisement propss={obj}/>
            })}

            {
                database.map((item) =>{
                    if(item.offer === 30){
                       return <Card1Advertisement key={item.id} offer={item}/>
                    }
                    return null;
                })
            }
        </div>
    )
}

export default CardCollections
