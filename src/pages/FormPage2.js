import React, { useContext, useState } from 'react';
import { FormContext } from '../FormContext';
import FormNavigation from '../components/FormNavigation';
import ProgressBar from '../components/ProgressBar';

const FormPage2 = ({ currentStep, totalSteps }) => {
  const { formData, updateFormData } = useContext(FormContext);
  const [errors, setErrors] = useState({});

  const handleStreetAddressChange = (e) => {
    updateFormData('streetAddress', e.target.value);
    if (e.target.value.trim() !== '') {
      setErrors(prevErrors => ({ ...prevErrors, streetAddress: '' }));
    }
  };

  const handleCityChange = (e) => {
    updateFormData('city', e.target.value);
    if (e.target.value.trim() !== '') {
      setErrors(prevErrors => ({ ...prevErrors, city: '' }));
    }
  };

  const handleStateChange = (e) => {
    updateFormData('state', e.target.value);
    if (e.target.value.trim() !== '') {
      setErrors(prevErrors => ({ ...prevErrors, state: '' }));
    }
  };

  const handleZipCodeChange = (e) => {
    updateFormData('zipCode', e.target.value);
    if (e.target.value.trim() !== '') {
      setErrors(prevErrors => ({ ...prevErrors, zipCode: '' }));
    }
  };

  const validateFields = () => {
    const newErrors = {};
    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = 'Street Address is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'ZIP Code is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateFields()) {
      return true; // Validation passed, proceed to the next page
    } else {
      return false; // Validation failed, stay on the current page
    }
  };

  return (
    <div className="form-page">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <h1>Enter your address...</h1>
      <form>
        <div className="form-group">
          <label>Street Address:</label>
          <input
            type="text"
            value={formData.streetAddress}
            onChange={handleStreetAddressChange}
          />
          {errors.streetAddress && <span className="error-message">{errors.streetAddress}</span>}
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            value={formData.city}
            onChange={handleCityChange}
          />
          {errors.city && <span className="error-message">{errors.city}</span>}
        </div>
        <div className="form-group">
          <label>State:</label>
          <input
            type="text"
            value={formData.state}
            onChange={handleStateChange}
          />
          {errors.state && <span className="error-message">{errors.state}</span>}
        </div>
        <div className="form-group">
          <label>ZIP Code:</label>
          <input
            type="text"
            value={formData.zipCode}
            onChange={handleZipCodeChange}
          />
          {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
        </div>
      </form>
      <FormNavigation 
        prevPath="/" 
        nextPath="/step2-5" 
        onNext={handleNext} 
      />
    </div>
  );
};

export default FormPage2;
