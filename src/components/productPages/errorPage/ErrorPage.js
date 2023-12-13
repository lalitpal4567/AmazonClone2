import React from 'react'
import "./ErrorPage.css";
import { Link } from 'react-router-dom'
import {BiHelpCircle} from "react-icons/bi";
import {BiSolidRightArrow} from "react-icons/bi";

const ErrorPage = () => {
  return (
    <div className='main-container-error'>
      <div className='inner-container-error'>
        <img src="/images/amazon-logo2.webp"/>
        <div className='help-link'>
            <BiHelpCircle className='help-icon'/>
            <div className='error-message-help'>
                <h3 className='help-ls3z'>Looking for something?</h3>
                <p className='help-ls3y'>We're sorry. The Web address you entered is not a functioning page on our site.</p>
                <h3 className='help-ls3x'><span><BiSolidRightArrow className='right-arrow'/></span>Go to Amazon.in's <Link to="/">Home</Link> Page</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
