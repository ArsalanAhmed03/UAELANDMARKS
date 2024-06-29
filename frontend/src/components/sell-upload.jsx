import React, { useState } from 'react';
import '../styles/SellUpload-styles.css';
import Inputdivs from './input-divs';
import PreviewSection from './livepreview';

export default function SellUpload() {
  const [formValues, setFormValues] = useState({
    Property_Type: '',
    Area: '',
    City: '',
    Size: '',
    Price: '',
    No_of_bedrooms: '',
    No_of_bathrooms: '',
    description: '',
    Condition: '',
    action: 'Sell'
  });
  
  const [selectedButton, setSelectedButton] = useState('');

  const handleInputChange = (name, value) => {
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleButtonClick = (name, value) => {
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
    setSelectedButton(prevValue => (prevValue === value ? '' : value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/Add_Sell_listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const result = await response.json();

      if (result.ListingAdded) {
        alert('Listing has been successfully saved to the database.');
      } else {
        alert('Listing creation failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving the listing.');
    }
  };

  const isFormValid = Object.values(formValues).every(value => value.trim() !== '');

  return (
    <>
      <div className="PropertyUpload">
        <div className="UploadMain">
          <h1>Tell Us About Your Property</h1>
          <h4>Remember To Double Check All Details</h4>
        </div>
        <div className="Upload_div">
          <form onSubmit={handleSubmit}>
            <div className="upload_labels">Property Type?</div>
            <div className="select_options">
              <button
                type="button"
                style={{
                  backgroundColor: selectedButton === 'Residential' ? 'darkgray' : '',
                  color: selectedButton === 'Residential' ? 'white' : '',
                  fontWeight: selectedButton === 'Residential' ? 'bold' : '',
                }}
                onClick={() => handleButtonClick('Property_Type', 'Residential')}
              >
                Residential
              </button>
              <button
                type="button"
                style={{
                  backgroundColor: selectedButton === 'Commercial' ? 'darkgray' : '',
                  color: selectedButton === 'Commercial' ? 'white' : '',
                  fontWeight: selectedButton === 'Commercial' ? 'bold' : '',
                }}
                onClick={() => handleButtonClick('Property_Type', 'Commercial')}
              >
                Commercial
              </button>
              <button
                type="button"
                style={{
                  backgroundColor: selectedButton === 'Plot' ? 'darkgray' : '',
                  color: selectedButton === 'Plot' ? 'white' : '',
                  fontWeight: selectedButton === 'Plot' ? 'bold' : '',
                }}
                onClick={() => handleButtonClick('Property_Type', 'Plot')}
              >
                Plot
              </button>
            </div>
            <Inputdivs
              labelText="In which area is the Property located?"
              inputPlaceholder="Select Your Area"
              inputType="text"
              name="Area"
              onChange={value => handleInputChange('Area', value)}
            />
            <Inputdivs
              labelText="In which city is the Property located?"
              inputPlaceholder="Select Your City"
              inputType="text"
              name="City"
              onChange={value => handleInputChange('City', value)}
            />
            <Inputdivs
              labelText="What is the size of the Property(sq.ft)?"
              inputPlaceholder="0"
              inputType="number"
              min={0}
              name="Size"
              onChange={value => handleInputChange('Size', value)}
            />
            <br />
            <Inputdivs
              labelText="What is the asking Price?"
              inputPlaceholder="0"
              inputType="number"
              min={0}
              name="Price"
              onChange={value => handleInputChange('Price', value)}
            />
            <Inputdivs
              labelText="Number of bedrooms?"
              inputPlaceholder="1"
              inputType="number"
              min={1}
              name="No_of_bedrooms"
              onChange={value => handleInputChange('No_of_bedrooms', value)}
            />
            <Inputdivs
              labelText="Number of bathrooms?"
              inputPlaceholder="1"
              inputType="number"
              min={1}
              name="No_of_bathrooms"
              onChange={value => handleInputChange('No_of_bathrooms', value)}
            />
            <Inputdivs
              labelText="Tell us more about your property"
              inputPlaceholder=" "
              inputType="textarea"
              name="description"
              onChange={value => handleInputChange('description', value)}
            />
            <Inputdivs
              labelText="Describe your properties condition"
              inputPlaceholder=" "
              inputType="text"
              name="Condition"
              onChange={value => handleInputChange('Condition', value)}
            />
            <button type="submit" disabled={!isFormValid}>Sell Now</button>
          </form>

          <PreviewSection
            labelText="Preview"
            currency="AED"
            amount={formValues.Price || ""}
            propertyType={formValues.Property_Type}
            sizeNumber={formValues.Size || ""}
            sizeUnit="sq.ft"
            shortDescriptionText={`${formValues.Property_Type} for ${formValues.action.toLowerCase()} in ${formValues.Area}, ${formValues.City}`}
            description={`Description: ${formValues.description}`}
            condition={`Condition: ${formValues.Condition}`}
          />
        </div>
      </div>
    </>
  );
}
