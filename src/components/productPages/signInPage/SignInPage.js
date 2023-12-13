import React from 'react'
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className='main-container-signin-page'>
      <a className='amazon-logo-signin-page' href="###"><img src="/images/amazon-logo2.webp" /></a>
      <div className='sign-in-page'>
        <p className='signin-title'>Sign in</p>
        <div className='email-mobile-input-signin'>
          <label>Enter mobile phone number or email</label>
          <input className='email-input-signin' type="text"></input>
          <button className='login-btn-signin'>Continue</button>
        </div>
        <span className='terms-conditions-signin'>By continuing, you agree to Amazon's <a href="####">Conditions of Use </a>and<a href="####"> Privacy Notice</a>.</span>
        <details className='login-help-signin'>
          <summary>Need help?</summary>
          <ul>
            <a href="#"><li>Forgot Password</li></a>
            <a href="##"><li>Other issues with Sign-In</li></a>
          </ul>
        </details>
      </div>

      <div className='signup-link-signin'>
        <hr style={{ width: 60 }} />
        <p>New to Amazon?</p>
        <hr style={{ width: 60 }} />
      </div>
      <button id="signup-btn-signin"><a href="#####">Create your Amazon account</a></button>
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

export default SignInPage
