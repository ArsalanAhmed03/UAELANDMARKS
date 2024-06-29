import React from 'react';
import '../styles/inputdiv-styles.css'


export default function Inputdivs({ name, labelText, inputPlaceholder, inputType, min, onChange }){
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  
  return (
    <div>
      <div className="upload_labels">{labelText}</div>
      <div className="select_options">
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          min={inputType === 'number' ? min : undefined}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};


