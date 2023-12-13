import React from 'react'
import "./Filter.css";

const RamCapacityWiseFilter = () => {
    return (
        <div className='brand-wise-filter'>
            <h4 className='filter-heading'>Mobile Phone Installed RAM Size</h4>
            <input type="checkbox" className='input-checkbox' id="ram1" /><label className='checkbox-label' htmlFor="ram1">Up to 3.9 GB</label><br />
            <input type="checkbox" className='input-checkbox' id="ram2" /><label className='checkbox-label' htmlFor="ram2">4 GB</label><br />
            <input type="checkbox" className='input-checkbox' id="ram3" /><label className='checkbox-label' htmlFor="ram3">8 GB</label><br />
            <input type="checkbox" className='input-checkbox' id="ram4" /><label className='checkbox-label' htmlFor="ram4">16 GB</label><br/>
            <input type="checkbox" className='input-checkbox' id="ram5" /><label className='checkbox-label' htmlFor="ram5">32 GB</label>
        </div>
    )
}

export default RamCapacityWiseFilter
