import React, { useContext } from 'react';
import { FormContext } from '../FormContext';
import FormNavigation from '../components/FormNavigation';
import ProgressBar from '../components/ProgressBar';
import './FormPage7.css'; // Ensure to add relevant CSS in this file

const FormPage7 = ({ currentStep, totalSteps }) => {
  const { formData, updateFormData } = useContext(FormContext);

  const handleSwitchChange = (e) => {
    updateFormData('garageStepCoating', e.target.checked);
  };

  return (
    <div className="form-page">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <h1>Would you like to include garage floor step coating?</h1>
      <form>
        <div className="form-group">
          <div className="switch-container">
            <span className="toggle-label">No</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={formData.garageStepCoating || false} // Ensure checked is always boolean
                onChange={handleSwitchChange}
              />
              <span className="slider"></span>
            </label>
            <span className="toggle-label">Yes</span>
          </div>
        </div>
        <div className="image-field">
          <img
            src="https://autosnap.github.io/legacyindustrialcoatings_form/images/steps.jpg"
            alt="Garage Floor Step Coating"
          />
        </div>
      </form>
      <FormNavigation prevPath="/step6" nextPath="/step8" />
    </div>
  );
};

export default FormPage7;
