import React, { useState } from 'react';
import FormNavigation from '../components/FormNavigation';
import ProgressBar from '../components/ProgressBar';

const FormPage7 = ({ currentStep, totalSteps }) => {
  const [switchValue, setSwitchValue] = useState(false);

  const handleSwitchChange = (e) => {
    setSwitchValue(e.target.checked);
  };

  return (
    <div className="form-page">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <h1>Would you like to include garage floor step coating?</h1>
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
          <img src="/images/steps.jpg" alt="Static" />
        </div>
      </form>
      <FormNavigation prevPath="/step6" nextPath="/step8" />
    </div>
  );
};

export default FormPage7;
