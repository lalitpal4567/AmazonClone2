import React from 'react'
import "./Filter.css";

const BudsShapeFilter = () => {
    {/* Headphones Earpiece Shape */ }
    return (
        <div className='shape-wise-filter'>
            <h4 className='filter-heading'>Headphones Earpiece Shape</h4>
            <input type="checkbox" className='input-checkbox' id="buds-shape" /><label className='checkbox-label' htmlFor="buds-shape">Bud</label><br />
            <input type="checkbox" className='input-checkbox' id="stick-shape" /><label className='checkbox-label' htmlFor="stick-shape">Stick</label>
        </div>
    )
}

export default BudsShapeFilter
