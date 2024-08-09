import React, { useState } from 'react';
import FormNavigation from '../components/FormNavigation';
import ProgressBar from '../components/ProgressBar';

const FormPage4 = ({ currentStep, totalSteps }) => {
  const [switchValue, setSwitchValue] = useState(false);

  const handleSwitchChange = (e) => {
    setSwitchValue(e.target.checked);
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
              checked={switchValue}
              onChange={handleSwitchChange}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="image-field">
          <img src="/images/existing_coating.jpg" alt="Static" />
        </div>
      </form>
      <FormNavigation prevPath="/step3" nextPath="/step5" />
    </div>
  );
};

export default FormPage4;
