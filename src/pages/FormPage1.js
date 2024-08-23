import React, { useContext, useState } from 'react';
import { FormContext } from '../FormContext';
import FormNavigation from '../components/FormNavigation';
import ProgressBar from '../components/ProgressBar';

const FormPage1 = ({ currentStep, totalSteps }) => {
  const { formData, updateFormData } = useContext(FormContext);
  const [errors, setErrors] = useState({});

  const handleFirstNameChange = (e) => {
    updateFormData('firstName', e.target.value);
    if (e.target.value.trim() !== '') {
      setErrors(prevErrors => ({ ...prevErrors, firstName: '' }));
    }
  };

  const handleLastNameChange = (e) => {
    updateFormData('lastName', e.target.value);
    if (e.target.value.trim() !== '') {
      setErrors(prevErrors => ({ ...prevErrors, lastName: '' }));
    }
  };

  const validateFields = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
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
      <h1>Basic Information</h1>
      <form>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={handleFirstNameChange}
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={handleLastNameChange}
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>
      </form>
      <FormNavigation 
        nextPath="/step2" 
        onNext={handleNext} 
      />
    </div>
  );
};

export default FormPage1;
