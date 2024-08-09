import React, { useState } from 'react';
import FormNavigation from '../components/FormNavigation';
import ProgressBar from '../components/ProgressBar';

const FormPage3 = ({ currentStep, totalSteps }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const options = [
    { value: 'Bambi', label: 'Bambi', image: '/images/Bambi.png', preview: '/images/Bambi_preview.jpg' },
    { value: 'Cabin Fever', label: 'Cabin Fever', image: '/images/Cabin Fever.png', preview: '/images/CabinFever_preview.jpg' },
    { value: 'Coyote', label: 'Coyote', image: '/images/Coyote.png', preview: '/images/Coyote_preview.jpg' },
    { value: 'Domino', label: 'Domino', image: '/images/Domino.png', preview: '/images/Domino_preview.jpg' },
    { value: 'Gravel', label: 'Gravel', image: '/images/Gravel.png', preview: '/images/Gravel_preview.jpg' },
    { value: 'Raven', label: 'Raven', image: '/images/Raven.png', preview: '/images/Raven_preview.jpg' },
    { value: 'Safari', label: 'Safari', image: '/images/Safari.png', preview: '/images/Safari_preview.jpg' },
    { value: 'Tidal Wave', label: 'Tidal Wave', image: '/images/Tidal Wave.png', preview: '/images/TidalWave_preview.jpg' },
    { value: 'Wombat', label: 'Wombat', image: '/images/Wombat.png', preview: '/images/Wombat_preview.jpg' },
  ];

  const handleOptionChange = (value) => {
    const selected = options.find(option => option.value === value);
    setSelectedOption(value);
    setImagePreview(selected ? selected.preview : '');
  };

  return (
    <div className="form-page">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <h1>Choose your style...</h1>
      <form>
        <div className="form-group">
          <label>Select a floor flake style:</label>
          <div className="custom-select-grid">
            {options.map(option => (
              <div
                key={option.value}
                className={`custom-select-option ${option.value === selectedOption ? 'selected' : ''}`}
                onClick={() => handleOptionChange(option.value)}
              >
                <img src={option.image} alt={option.label} />
                <span>{option.label}</span>
              </div>
            ))}
          </div>
        </div>
        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" />
          </div>
        )}
      </form>
      <FormNavigation prevPath="/step2" nextPath="/step4" />
    </div>
  );
};

export default FormPage3;