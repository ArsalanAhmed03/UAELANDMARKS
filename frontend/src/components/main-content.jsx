import React from 'react';
import '../styles/main-content-styles.css'
import ListingSection from './listing_section';

export default function Main() {
    return (
        <>
            <main>
                <div className="backdrop-images">
                    {/* <p>Let Us <a href="/"> Find </a> Your Next Home</p> */}
                    <p>Let Us Find Your Next Home</p>
                </div>
                    <ListingSection />
            </main>
        </>
    )
}