import React, { useState } from 'react'
import '../styles/SellUpload-styles.css'

export default function SellUpload() {
    const [] = useState();
    return (
        <>
            <div className="PropertyUpload">
                <div className="UploadMain">
                    <h1>Tell Us About Your Property</h1>
                    <h4>Remember To Double Check All Details</h4>
                </div>
                <div className="Upload_div">
                    <form action="">
                        <div className="upload_labels">What do want to do?</div>
                        <div className="select_options">
                            <button>Sell</button>
                            <button>Rent</button>
                        </div>
                        <div className="upload_labels">Property Type?</div>
                        <div className="select_options">
                            <button>Residentail</button>
                            <button>Commercial</button>
                            <button>Plot</button>
                        </div>
                        <div className="upload_labels">In which city is the Property located?</div>
                        <div className="select_options">
                            <input type="text" placeholder='Select Your City' />
                        </div>
                        <div className="upload_labels">In which area is the Property located?</div>
                        <div className="select_options">
                            <input type="text" placeholder='Select Your Area' />
                        </div>

                    </form>
                    <div className="preview_section">
                        <div className="upload_labels">Preview</div>
                        <div className="live_preview">
                            <div className="preview_picture"></div>
                            <div className="price_type">
                                <div className="mini_price_tag">
                                    <div className="currency">AED</div>
                                    <div className="amount">2000</div>
                                </div>
                                <div className="property_type">Type: Hostel</div>
                            </div>
                            <div className="size">Size: 1 Marla</div>
                            <div className="short_description">1 Marla Hostel for sale in DHA Phase 1</div>
                            <hr />
                            {/* <div className="live_preview_labels">Description</div> */}
                            <div className="description">description comes here.</div>
                            <div className="condition"></div>
                            <hr />
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
