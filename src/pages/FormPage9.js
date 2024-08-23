import React, { useContext, useState } from 'react';
import { FormContext } from '../FormContext';
import FormNavigation from '../components/FormNavigation';
import ProgressBar from '../components/ProgressBar';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const FormPage9 = ({ currentStep, totalSteps }) => {
  const { formData, updateFormData, calculateFinalQuote } = useContext(FormContext);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook

  const handleEmailChange = (e) => {
    updateFormData('email', e.target.value);
    if (e.target.value) {
      setError(''); // Clear any previous error when an email is entered
    }
  };

  const handlePhoneChange = (e) => {
    updateFormData('phone', e.target.value);
  };

  const validateEmail = () => {
    if (!formData.email) {
      setError('Email is required.');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateEmail()) {
      return; // Stop submission if validation fails
    }

    const finalQuote = calculateFinalQuote(); // Calculate the final quote

    const templateParams = {
      firstName: formData.firstName || 'N/A',
      lastName: formData.lastName || 'N/A',
      email: formData.email || 'N/A',
      phone: formData.phone || 'N/A',
      streetAddress: formData.streetAddress || 'N/A',
      city: formData.city || 'N/A',
      state: formData.state || 'N/A',
      zipCode: formData.zipCode || 'N/A',
      garageSize: formData.garageSize || 'N/A',
      existingCoating: formData.existingCoating || false,
      floorStyle: formData.floorStyle || 'N/A',
      silicaSand: formData.silicaSand || false,
      stemTreatment: formData.stemTreatment || 'N/A',
      floorCondition: formData.floorCondition || 'N/A',
      garageStepCoating: formData.garageStepCoating || false,
      installationDate1: formData.installationDate1 || 'N/A',
      installationDate2: formData.installationDate2 || 'N/A',
      finalQuote: finalQuote, // Include the final quote in the email
    };

    // Log the templateParams to verify data before sending
    console.log('Template Params:', templateParams);

    emailjs.send('service_tnhfzqo', 'template_4sme2px', templateParams, 'iYRtAfT5N99Oi_ETl')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your quote has been sent to your email!');
        navigate('/completion'); // Use navigate to redirect to the final page
      })
      .catch(error => {
        console.log('FAILED...', error);
        alert('Failed to send quote. Please try again.');
      });
  };

  return (
    <div className="form-page">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <h1>Last step to get your quote!</h1>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={handleEmailChange}
            required
          />
          {error && <span className="error-message">{error}</span>}
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={handlePhoneChange}
          />
        </div>
      </form>
      <FormNavigation 
        prevPath="/step8" 
        nextPath="/completion" 
        isLastStep 
        onNext={handleSubmit} 
      />
    </div>
  );
};

export default FormPage9;
