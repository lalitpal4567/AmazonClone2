import React from 'react'
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className='main-containerbox'>
      <a className='amazon-logo-signup' href="###"><img src="images/amazon-logo2.webp" /></a>
      <form className='signup-form'>
        <p className='signup-title'>Create Account</p>
        <div className='form-input'>
            <label className='label-title'>Your name</label>
            <input className='input-boxx' placeholder='First and last name'/>
        </div>
        <div className='form-input'>
            <label className='label-title'>Mobile number</label>
            <div className='mobile-input'>
                <select className='dial-code'>
                    <option>IN +91</option>
                    <option>IN +92</option>
                    <option>IN +93</option>
                    <option>IN +94</option>
                </select>
                <input className='input-boxx contact-number-input' placeholder='Mobile number'/>
            </div>
        </div>
        <div className='form-input'>
            <label className='label-title'>Email (Optional)</label>
            <input className='input-boxx' type="email"/>
        </div>
        <div className='form-input'>
            <label className='label-title'>Password</label>
            <input className='input-boxx' type="password" placeholder='At least 6 characters'/>
            <p className='password-warning'>Passwords must be at least 6 characters.</p>
        </div>
        <div>
            <p className='message-info'>To verify your number, we will send you a text message with a temporary code. 
            Message and data rates may apply.</p>
        </div>
        <button className='continue-btn'>Continue</button>
        <hr/>
        <div>
            <p className='message-info'>Already have an account?<a href="#">Sign in</a></p>
        </div>
      </form>
      <div className='navbar-footer-signin'>
        <ul>
          <li><a href="#">Conditions of Use</a></li>
          <li><a href="##">Privacy Notice</a></li>
          <li><a href="###">Help</a></li>
        </ul>
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  )
}

export default SignUpPage
