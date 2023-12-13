import React from 'react'
import "./Filter.css";

const BudsConnectivityFilter = () => {
    {/* connectivity type wired or wireless */ }
    return (
        <div className='connectivity-wise-filter'>
            <h4 className='filter-heading'>Headphones Connectivity Technology</h4>
            <input type="checkbox" className='input-checkbox' id="wired-input" /><label className='checkbox-label' htmlFor="wired-input">Wired</label><br />
            <input type="checkbox" className='input-checkbox' id="wireless-input" /><label className='checkbox-label' htmlFor="wireless-input">Wireless</label>
        </div>
    )
}

export default BudsConnectivityFilter
