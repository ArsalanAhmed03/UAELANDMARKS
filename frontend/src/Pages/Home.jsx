import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main-content'
import Backtotop from '../components/backtotop'


export default function Home() {


  return (
    <>
      <Header Hstyles='full' />
      <Main />
      <Backtotop />
      <Footer />
    </>
  )
}
