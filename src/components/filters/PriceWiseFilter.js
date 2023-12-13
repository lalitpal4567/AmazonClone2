import React from 'react'
import "./Filter.css";

const PriceWiseFilter = ({handleChange}) => {
    return (
        <div className='price-wise-categories'>
            <h4 className='filter-heading'>Price</h4>
            <ul>
                <li><input type="checkbox" value="0 - 1000" onChange={handleChange}/>Under ₹ 1,000</li>
                <li><input type="checkbox" value="1000 - 5000" onChange={handleChange}/>₹ 1,000 - ₹ 5,000</li>
                <li><input type="checkbox" value="5000 - 10000" onChange={handleChange}/>₹ 5,000 - ₹ 10,000</li>
                <li><input type="checkbox" value="10000 - 20000" onChange={handleChange}/>₹ 10,000 - ₹ 20,000</li>
                <li><input type="checkbox" value="20000 - 50000" onChange={handleChange}/>₹ 20,000 - ₹ 50,000</li>
                <li><input type="checkbox" value="50000 - 100000" onChange={handleChange}/>Above ₹ 50,000</li>
            </ul>
        </div>
    )
}

export default PriceWiseFilter
