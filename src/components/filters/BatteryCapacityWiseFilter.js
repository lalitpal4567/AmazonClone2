import React from 'react'
import "./Filter.css";

const BatteryCapacityWiseFilter = () => {
    return (
        <div className='brand-wise-filter'>
            <h4 className='filter-heading'>Battery Capacity</h4>
            <input type="checkbox" className='input-checkbox' id="mhz1" /><label className='checkbox-label' htmlFor="mhz1">Up to 3.9 GB</label><br />
            <input type="checkbox" className='input-checkbox' id="mhz2" /><label className='checkbox-label' htmlFor="mhz2">4 GB</label><br />
            <input type="checkbox" className='input-checkbox' id="mhz3" /><label className='checkbox-label' htmlFor="mhz3">8 GB</label><br />
            <input type="checkbox" className='input-checkbox' id="mhz4" /><label className='checkbox-label' htmlFor="mhz4">16 GB</label><br/>
            <input type="checkbox" className='input-checkbox' id="mhz5" /><label className='checkbox-label' htmlFor="mhz5">32 GB</label>
        </div>
    )
}
export default BatteryCapacityWiseFilter