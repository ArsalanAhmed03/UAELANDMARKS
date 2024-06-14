import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Signupbox from '../components/signup-box'
import Backtotop from '../components/backtotop'


export default function SignUp() {
  return (
    <>
      <Header Hstyles='SignUp' />
      <Signupbox />
      <Backtotop />
      <Footer />
    </>
  )
}
