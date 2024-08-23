import React, { useContext, useState } from 'react';
import { FormContext } from '../FormContext';
import FormNavigation from '../components/FormNavigation';
import ProgressBar from '../components/ProgressBar';

const FormPage8 = ({ currentStep, totalSteps }) => {
  const { formData, updateFormData } = useContext(FormContext);
  const [error, setError] = useState('');

  const options = [
    { value: 'none', title: 'No Stem Treatment', image: '/images/no_vertical.jpeg' },
    { value: 'standard', title: 'Standard 2-4" Treatment', image: '/images/base.jpg' },
    { value: 'tall', title: 'Tall Stem Treatment', image: '/images/stem.jpg' },
  ];

  const handleOptionChange = (value) => {
    updateFormData('stemTreatment', value);
    setError(''); // Clear any previous error when an option is selected
  };

  const validateSelection = () => {
    if (!formData.stemTreatment) {
      setError('Please select a stem treatment option.');
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

  const selectedImage = options.find(option => option.value === formData.stemTreatment)?.image;

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
                className={`option ${option.value === formData.stemTreatment ? 'selected' : ''}`}
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
        prevPath="/step7" 
        nextPath="/step8-5" 
        onNext={handleNext} 
      />
    </div>
  );
};

export default FormPage8;
