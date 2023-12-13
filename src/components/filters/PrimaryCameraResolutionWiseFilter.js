import React from 'react'
import "./Filter.css";

const PrimaryCameraResolutionWiseFilter = () => {
    return (
        <div className='brand-wise-filter'>
            <h4 className='filter-heading'>Mobile Phone Primary Camera Resolution</h4>
            <input type="checkbox" className='input-checkbox' id="mp1" /><label className='checkbox-label' htmlFor="mp1">Up to 3.9 GB</label><br />
            <input type="checkbox" className='input-checkbox' id="mp2" /><label className='checkbox-label' htmlFor="mp2">4 GB</label><br />
            <input type="checkbox" className='input-checkbox' id="mp3" /><label className='checkbox-label' htmlFor="mp3">8 GB</label><br />
            <input type="checkbox" className='input-checkbox' id="mp4" /><label className='checkbox-label' htmlFor="mp4">16 GB</label><br/>
            <input type="checkbox" className='input-checkbox' id="mp5" /><label className='checkbox-label' htmlFor="mp5">32 GB</label>
        </div>
    )
}

export default PrimaryCameraResolutionWiseFilter
