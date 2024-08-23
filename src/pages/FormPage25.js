import React, { useState, useContext } from 'react';
import { FormContext } from '../FormContext';
import FormNavigation from '../components/FormNavigation';
import ProgressBar from '../components/ProgressBar';

const FormPage2_5 = ({ currentStep, totalSteps }) => {
  const { updateFormData } = useContext(FormContext);
  const [garageSize, setgarageSize] = useState('');
  const [error, setError] = useState('');

  const handleOptionChange = (value) => {
    setgarageSize(value);
    updateFormData('garageSize', value);
    setError(''); // Clear any previous error when an option is selected
  };

  const validateSelection = () => {
    if (!garageSize) {
      setError('Please select a garage size.');
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

  return (
    <div className="form-page">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <h1>Select Your Garage Size</h1>
      <form>
        <div className="form-group">
          <label>Select the size of your garage:</label>
          <div className="custom-select-grid">
            <div
              className={`custom-select-option ${garageSize === '2 Car Garage' ? 'selected' : ''}`}
              onClick={() => handleOptionChange('2 Car Garage')}
            >
              2 Car Garage
            </div>
            <div
              className={`custom-select-option ${garageSize === '3 Car Garage' ? 'selected' : ''}`}
              onClick={() => handleOptionChange('3 Car Garage')}
            >
              3 Car Garage
            </div>
            <div
              className={`custom-select-option ${garageSize === '4 Car Garage' ? 'selected' : ''}`}
              onClick={() => handleOptionChange('4 Car Garage')}
            >
              4 Car Garage
            </div>
          </div>
          {error && <span className="error-message">{error}</span>}
        </div>
      </form>
      <FormNavigation 
        prevPath="/step2" 
        nextPath="/step3" 
        onNext={handleNext} 
      />
    </div>
  );
};

export default FormPage2_5;
