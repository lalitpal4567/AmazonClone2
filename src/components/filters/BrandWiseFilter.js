import React from 'react'
import "./Filter.css";


const BrandWiseFilter = ({ handleChange, availableBrands }) => {
    return (
      <div className='brand-wise-filter'>
        <h4 className='filter-heading'>Brand</h4>
        <label>
          <input
            type="radio"
            name="brandFilter"
            value="All"
            onChange={handleChange}
          />
          All
        </label>
        <br />
  
        {availableBrands.map((brand) => (
            <>
          <label key={brand}>
            <input
              type="radio"
              name="brandFilter"
              value={brand}
              onChange={handleChange}
            />
            {brand}
          </label>
          <br/>
          </>
        ))}
      </div>
    );
  };
  



export default BrandWiseFilter;
