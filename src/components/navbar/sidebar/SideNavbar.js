import React, { useState } from 'react'
import "./SideNavbar.css";
import { FaCircleUser } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";


const SideNavbar = () => {
   const [active, setActive] = useState(true);

   const toggleSideProp = (status) => {
        setActive(status);
   }

    return (
        active ? <div className='overlay'>
            <div className='main-navbar-container4'>
                <nav className='side-nav-bar'>
                    <a className='user-signin-container'>
                        <div className='sign-in-box'>
                            <FaCircleUser className='user-icon0' />
                            <p>Hello, sign in</p>
                        </div>
                    </a>
                    <div className='services-links'>
                        <h2 className='category-title'>Shop By Category</h2>
                        <ul>
                            <li className='category-lists'><a href='#'>Mobiles</a></li>
                            <li className='category-lists'><a href='#'>Women Fashion</a></li>
                        </ul>
                        <hr className='line-break2' />
                        <h2 className='category-title'>Help & Settings</h2>
                        <ul>
                            <li className='category-lists'><a href='#'>Sign In</a></li>
                        </ul>
                    </div>
                </nav>
                <RxCross1 className='exit-button' onClick={() => { toggleSideProp(false) }} />
            </div>
        </div> : null
    )
}

export default SideNavbar
