import React, { useContext } from 'react';
import { FormContext } from '../FormContext';
import FormNavigation from '../components/FormNavigation';
import ProgressBar from '../components/ProgressBar';

const FormPage5 = ({ currentStep, totalSteps }) => {
  const { formData, updateFormData } = useContext(FormContext);

  const handleSwitchChange = (e) => {
    updateFormData('silicaSand', e.target.checked);
  };

  return (
    <div className="form-page">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <h1>Would you like to add our Silica Sand coating for better floor grip and safety?</h1>
      <form>
        <div className="form-group">
          <label className="switch">
            <input
              type="checkbox"
              checked={formData.silicaSand || false} // Ensure checked is always a boolean
              onChange={handleSwitchChange}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="image-field">
          <img src="https://autosnap.github.io/legacyindustrialcoatings_form/images/silicasand.jpg" alt="Silica Sand Coating" />
        </div>
      </form>
      <FormNavigation prevPath="/step4" nextPath="/step6" />
    </div>
  );
};

export default FormPage5;
