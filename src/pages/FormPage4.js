import React, { useContext } from 'react';
import { FormContext } from '../FormContext';
import FormNavigation from '../components/FormNavigation';
import ProgressBar from '../components/ProgressBar';

const FormPage4 = ({ currentStep, totalSteps }) => {
  const { formData, updateFormData } = useContext(FormContext);

  const handleSwitchChange = (e) => {
    updateFormData('existingCoating', e.target.checked);
  };

  return (
    <div className="form-page">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <h1>Do you have an existing floor coating that needs to be removed?</h1>
      <form>
        <div className="form-group">
          <label className="switch">
            <input
              type="checkbox"
              checked={formData.existingCoating}
              onChange={handleSwitchChange}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="image-field">
          <img src="https://autosnap.github.io/legacyindustrialcoatings_form/images/existing_coating.jpg" alt="Existing Coating" />
        </div>
      </form>
      <FormNavigation prevPath="/step3" nextPath="/step5" />
    </div>
  );
};

export default FormPage4;
