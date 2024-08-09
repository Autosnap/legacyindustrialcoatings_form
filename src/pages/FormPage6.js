import React, { useState } from 'react';
import FormNavigation from '../components/FormNavigation';
import ProgressBar from '../components/ProgressBar';

const FormPage6 = ({ currentStep, totalSteps }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { value: 'No Damage', title: 'No Damage', image: '/images/no_damage.jpg' },
    { value: 'Medium Damage', title: 'Medium Damage', image: '/images/medium_damage.jpg' },
    { value: 'Heavy Damage', title: 'Heavy Damage', image: '/images/heavy_damage.jpg' },
  ];


  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const selectedImage = options.find(option => option.value === selectedOption)?.image;

  return (
    <div className="form-page">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <h1>Choose the condition of your current floor...</h1>
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
      <FormNavigation prevPath="/step5" nextPath="/step7" />
    </div>
  );
};

export default FormPage6;