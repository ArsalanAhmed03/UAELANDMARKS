import React from 'react'
import '../styles/listingsection-styles.css'
import MiniListing from './minilisting'

export default function ListingSection() {
  const count = 7;
  return (
    <div className="Listing_Section">
      {
        Array.from({ length: count }, (_, i) => <MiniListing key={i}/>)
      }
    </div>
  )
}
