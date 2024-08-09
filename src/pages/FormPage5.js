import React, { useState } from 'react';
import FormNavigation from '../components/FormNavigation';
import ProgressBar from '../components/ProgressBar';

const FormPage5 = ({ currentStep, totalSteps }) => {
  const [switchValue, setSwitchValue] = useState(false);

  const handleSwitchChange = (e) => {
    setSwitchValue(e.target.checked);
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
              checked={switchValue}
              onChange={handleSwitchChange}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="image-field">
          <img src="/images/silicasand.jpg" alt="Static" />
        </div>
      </form>
      <FormNavigation prevPath="/step4" nextPath="/step6" />
    </div>
  );
};

export default FormPage5;
