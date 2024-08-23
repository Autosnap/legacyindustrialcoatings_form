import React, { useContext, useState } from 'react';
import { FormContext } from '../FormContext';
import FormNavigation from '../components/FormNavigation';
import ProgressBar from '../components/ProgressBar';

const FormPage6 = ({ currentStep, totalSteps }) => {
  const { formData, updateFormData } = useContext(FormContext);
  const [error, setError] = useState('');

  const options = [
    { value: 'No Damage', title: 'No Damage', image: 'https://autosnap.github.io/legacyindustrialcoatings_form/images/no_damage.jpg' },
    { value: 'Medium Damage', title: 'Medium Damage', image: 'https://autosnap.github.io/legacyindustrialcoatings_form/images/medium_damage.jpg' },
    { value: 'Heavy Damage', title: 'Heavy Damage', image: 'https://autosnap.github.io/legacyindustrialcoatings_form/images/heavy_damage.jpg' },
  ];

  const handleOptionChange = (value) => {
    updateFormData('floorCondition', value);
    setError(''); // Clear any previous error when an option is selected
  };

  const validateSelection = () => {
    if (!formData.floorCondition) {
      setError('Please select the condition of your current floor.');
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateSelection()) {
      return true; // Validation passed, proceed to the next page
    } else {
      return false; // Validation failed, stay on the current page
    }
  };

  const selectedImage = options.find(option => option.value === formData.floorCondition)?.image;

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
                className={`option ${option.value === formData.floorCondition ? 'selected' : ''}`}
                onClick={() => handleOptionChange(option.value)}
              >
                <img src={option.image} alt={option.title} />
                <span>{option.title}</span>
              </div>
            ))}
          </div>
          {error && <span className="error-message">{error}</span>}
        </div>
        {selectedImage && (
          <div className="image-preview">
            <img src={selectedImage} alt="Preview" />
          </div>
        )}
      </form>
      <FormNavigation 
        prevPath="/step5" 
        nextPath="/step7" 
        onNext={handleNext} 
      />
    </div>
  );
};

export default FormPage6;
