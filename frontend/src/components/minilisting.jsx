import React from 'react'
import '../styles/minilisting-style.css'
import { useNavigate } from 'react-router-dom';

export default function MiniListing() {

  const navigate = useNavigate();
  
  const ShowFullProduct = () =>{
    navigate('/Product');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  return (
    <div className='Listing' onClick={ShowFullProduct}>
      <div className="Typelabel">For Sale</div>
      <div className="picture"></div>
      <div className="info"></div>
    </div>
  )
}
