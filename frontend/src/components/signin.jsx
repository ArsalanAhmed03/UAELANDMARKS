import React from 'react';
import '../styles/signin-styles.css'


export default function LogInDiv({ onClose }) {
  return (
    <>
      <div className="signinbody" >
        <div className="signin-box">

          <button className="cross" onClick={onClose}>
    
          </button>
          <h2>Sign In Into Your Account</h2>
          <h3>Welcome Back!</h3>
          <form method="post" action="/login">
            <input type="email" name="email" placeholder="Enter Your Email" />
            <input type="password" name="password" placeholder="Enter Your Password" />
            <button type='submit'>LOG IN</button>
          </form>
          <a href="/">Forgot Password?</a>
          <div className="break">
            <div className="breakline"></div>
            <p>OR</p>
            <div className="breakline"></div>
          </div>
        </div>
      </div>
    </>
  )
}
