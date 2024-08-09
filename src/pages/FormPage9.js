import React, { useState } from 'react';
import FormNavigation from '../components/FormNavigation';
import ProgressBar from '../components/ProgressBar';

const FormPage9 = ({ currentStep, totalSteps }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="form-page">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <h1>Last step to get your quote!</h1>
      <form>
        <div className="form-group">
          <label>Email (required):</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone (optional):</label>
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
      </form>
      <FormNavigation prevPath="/step8" nextPath="/completion" isLastStep />
    </div>
  );
};

export default FormPage9;
