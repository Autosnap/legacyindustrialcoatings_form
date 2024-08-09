import React, { useState } from 'react';
import FormNavigation from '../components/FormNavigation';
import ProgressBar from '../components/ProgressBar';

const FormPage8 = ({ currentStep, totalSteps }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { value: 'none', title: 'No Stem Treatment', image: '/images/stem.jpg' },
    { value: 'standard', title: 'Standard 2-4" Treatment', image: '/images/stem.jpg' },
    { value: 'tall', title: 'Tall stem Treatment', image: '/images/stem.jpg' },
  ];


  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const selectedImage = options.find(option => option.value === selectedOption)?.image;

  return (
    <div className="form-page">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <h1>What kind of vertical wall stem treatment would you like?</h1>
      <form>
        <div className="form-group">
          <label>Select an Option:</label>
          <div className="options-row">
            {options.map(option => (
              <div
                key={option.value}
                className={`option ${option.value === selectedOption ? 'selected' : ''}`}
                onClick={() => handleOptionChange(option.value)}
              >
                <img src={option.image} alt={option.title} />
                <span>{option.title}</span>
              </div>
            ))}
          </div>
        </div>
        {selectedImage && (
          <div className="image-preview">
            <img src={selectedImage} alt="Preview" />
          </div>
        )}
      </form>
      <FormNavigation prevPath="/step7" nextPath="/step9" />
    </div>
  );
};

export default FormPage8;