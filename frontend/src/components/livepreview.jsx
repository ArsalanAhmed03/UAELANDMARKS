import React from 'react';
import '../styles/livepreview-styles.css'

const PreviewSection = ({
    labelText,
    currency,
    amount,
    propertyType,
    sizeNumber,
    sizeUnit,
    shortDescriptionText,
    description,
    condition
}) => {
    return (
        <div className="preview_section">
            <div className="upload_labels">{labelText}</div>
            <div className="live_preview">
                <div className="preview_picture"></div>
                <div className="price_type">
                    <div className="mini_price_tag">
                        <div className="currency">{currency}</div>
                        <div className="amount">{amount}</div>
                    </div>
                    <div className="property_type">Type: {propertyType}</div>
                </div>
                <div className="size">
                    Size: {sizeNumber} {sizeUnit}
                </div>
                <div className="short_description">
                    {shortDescriptionText}
                </div>
                <hr />
                <div className="description">{description}</div>
                <br />
                <div className="condition">{condition}</div>
                <hr />
            </div>
        </div>
    );
};

export default PreviewSection;
