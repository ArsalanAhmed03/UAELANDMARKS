import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ProductListing from '../components/productlisting'

export default function ProductPage() {
    return (
        <>
            <Header Hstyles='full' />
            <ProductListing />
            <Footer />
        </>
    )
}
