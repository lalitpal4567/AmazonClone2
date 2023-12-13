import React from 'react'
import "./Filter.css";

const MemorySpaceWiseFilter = () => {
    return (
        <div className='brand-wise-filter'>
            <h4 className='filter-heading'>Cellular Phone Memory Storage Capacity</h4>
            <input type="checkbox" className='input-checkbox' id="gb1" /><label className='checkbox-label' htmlFor="gb1">Up to 3.9 GB</label><br />
            <input type="checkbox" className='input-checkbox' id="gb2" /><label className='checkbox-label' htmlFor="gb2">4 GB</label><br />
            <input type="checkbox" className='input-checkbox' id="gb3" /><label className='checkbox-label' htmlFor="gb3">8 GB</label><br />
            <input type="checkbox" className='input-checkbox' id="gb4" /><label className='checkbox-label' htmlFor="gb4">16 GB</label><br/>
            <input type="checkbox" className='input-checkbox' id="gb5" /><label className='checkbox-label' htmlFor="gb5">32 GB</label>
        </div>
    )
}

export default MemorySpaceWiseFilter
