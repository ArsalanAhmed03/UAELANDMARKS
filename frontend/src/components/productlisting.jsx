import React from 'react'
import '../styles/productlisting-styles.css'


export default function ProductListing() {
    return (
        <>
            <div className="product_box">
                <div className="images_area">
                    
                </div>
                <div className="info_area">
                    <div className="r1_info">
                        <h2>House Name, Street Address, City</h2>
                        <div className="contact_buttons">
                            <a href="/"><button className='btn1'>CALL</button></a>
                            <a href="/"><button className='btn2'>ENQUIRE</button></a>
                        </div>
                    </div>
                    <div className="price_tag">
                        <div className="currency">AED</div>
                        <div className="amount">2000</div>
                    </div>
                    <hr />
                    <div className="description">
                        <h3>Description</h3>
                        <div className="des_content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum debitis blanditiis iure porro ipsa dignissimos accusamus ut sed, deserunt tenetur modi hic dicta omnis corporis. Veniam nobis neque sed id.
                        </div>
                        <h3>Condition</h3>
                        <div className="des_content">
                            Any
                        </div>
                    </div>
                    <div className="owner_area">
                        <h3>Published by</h3>
                        <div className="owner_box">
                            <div className="owner_picture"></div>
                            <div className="owner_details">
                                <h4>Owner Name</h4>
                                <h5>Owner Email: owner_email@gmail.com</h5>
                                <a href="/"><button>View Profile</button></a>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>

            </div>
        </>
    )
}
