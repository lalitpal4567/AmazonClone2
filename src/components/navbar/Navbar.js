import React, { useEffect, useState } from 'react'
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useCart } from '../productPages/CartContext';
import SideNavbar from './sidebar/SideNavbar';

const Navbar = ({onSearchChange, searchTerm}) => {
    const [isOverlayActive, setOverlayActive] = useState(false);
    const [isSignInOptionsVisible, setSignInOptionsVisible] = useState(false);
    const [searchIconClicked, setSearchIconClicked] = useState(false);
    const [currentState, setCurrentState] = useState(false);

    const { totalProduct } = useCart();


    const handleMouseOver = () => {
        setOverlayActive(true);
        setSignInOptionsVisible(true);
    }
    const handleMouseOut = () => {
        setOverlayActive(false);
        setSignInOptionsVisible(false);
    }

    const setSearchIcon = (event) =>{
        setSearchIconClicked(true);
    }

    const handleSearchChange = (event) => {
        // Call the onSearchChange prop with the updated search term
        onSearchChange(event.target.value);
      };

      
    const displaySidebar = ()=>{
        if(currentState){
            setCurrentState(false);
        }else {
            setCurrentState(true);
        }
    }

    return (
        <>
            <header className='zxvls3-navbar-main-container'>
                <nav className="zxvls3-navbar-sec">
                    <section className="zxvls3-address-logo-sec">
                        <div className="zxvls3-logo-sec zxvls3-link">
                            <Link to="/" className="zxvls3-logo-container">
                                <img src="/images/amazon-logo.png" className='zxvls3-amazon-logo' />
                                <span className="zxvls3-amazon-in">.in</span>
                            </Link>
                        </div>
                        <div className='zxvls3-link zxvls3-address-link'>
                            <Link to="" className="zxvls3-user-address">
                                <i class="fa-solid fa-location-dot"></i>
                                <div>
                                    <p className="zxvls3-nav-line1">Hello</p>
                                    <p className="zxvls3-nav-line2">Select your address</p>
                                </div>
                            </Link>
                        </div>
                    </section>

                    <section className="zxvls3-search-sec">
                        <div className="zxvls3-dropdown-menu">
                            <p>All</p>
                            <img src="/images/caret-down-solid.svg" />
                        </div>
                        <input type="text" placeholder="Search Amazon.in" className="zxvls3-search-input" onChange={handleSearchChange}></input>
                        <div className="zxvls3-search-icon-box">
                            <img src="/images/magnifying-glass-solid.svg" className="zxvls3-search-icon" onClick={setSearchIcon} />
                        </div>
                    </section>

                    <section className="zxvls3-signcard-sec">
                        <Link to="" className="zxvls3-language zxvls3-link">
                            <span><img src="/images/Flag_of_India.svg.webp"></img></span>
                            <span><p className="zxvls3-nav-line2">EN</p></span>
                            <span><RiArrowDropDownFill className='selection-dropdown' /></span>
                        </Link>
                        <Link to="" className="zxvls3-account-signin zxvls3-link" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            <div >
                                <p className="zxvls3-nav-line1 zxvls3-check-user-account" style={{ color: "white" }}>Hello, amazon</p>
                                <p className="zxvls3-nav-line2 zxvls3-check-user-account">Account & Lists</p>
                                <div className='zxvls3-user-account-sec'>
                                    <p className="zxvls3-nav-line2 ">amazon</p>
                                    <FaRegUser />
                                </div>
                            </div>
                            <RiArrowDropDownFill className='zxvls3-selection-dropdown' />
                            {isSignInOptionsVisible && (
                                <div className="zxvls3-hover-message">
                                    <h3>Amazon</h3>
                                    <ul>
                                        <li>
                                            <Link to="/signIn" className="zxvls3-hover-message-link" style={{ color: 'black'}}>
                                                Sign In
                                            </Link>
                                        </li>
                                            
                                        <li>
                                            <Link to="/signUp" className="zxvls3-hover-message-link" style={{ color: 'black'}}>
                                                Sign Out
                                            </Link>
                                        </li>
                                    </ul>   
                                </div>
                            )}
                        </Link>
                        <Link to="/productCart" className="zxvls3-shopping-cart zxvls3-link">
                            <img src="/images/shopping-cart.png" />
                            <p className="zxvls3-nav-line2">Cart</p>
                            <h3>{totalProduct}</h3>
                        </Link>
                    </section>
                </nav>

                <nav>
                    <div className="zxvls3-navbar-sec2">
                        <div id="zxvls3-side-bar" onClick={displaySidebar}>
                            <GiHamburgerMenu className='zxvls3-hamburger-icon' />
                            <span className="zxvls3-nav-line2">All</span>
                        </div>
                        <Link to={"/productPage/phone"} className='zxvls3-amazon-services' href="##">Mobiles</Link>
                    </div>
                </nav>
            </header>
            {currentState ? <SideNavbar/> : null}
            <div className={isOverlayActive ? "zxvls3-active-overlay" : "zxvls3-overlay-on-hover"}></div>
        </>

    )
}

export default Navbar
