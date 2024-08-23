import React, { useContext } from 'react';
import { FormContext } from '../FormContext';
import './FormCompletionPage.css'; // Import a custom CSS file for styling

const FormCompletionPage = () => {
  const { calculateFinalQuote, formData } = useContext(FormContext);

  const finalQuote = calculateFinalQuote();

  const handlePaymentRedirect = () => {
    // Redirect to the Stripe payment page
    window.location.href = 'https://buy.stripe.com/9AQ3eq5z34Hb8Ss8ww';
  };

  return (
    <div className="completion-page">
      <h1 className="completion-title">Here is your offer!</h1>
      <div className="summary-card">
        <div className="summary-header">Summary</div>
        <div className="summary-content">
          <div className="summary-item">
            <span className="summary-value">${finalQuote}</span>
            <span className="summary-label">Total Cost</span>
          </div>
          <div className="date-summary">
            <div className="date-item">
              <span className="date-label">Preferred Installation Date 1:</span>
              <span className="date-value">{formData.installationDate1.toLocaleDateString()}</span>
            </div>
            <div className="date-item">
              <span className="date-label">Preferred Installation Date 2:</span>
              <span className="date-value">{formData.installationDate2.toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        <button className="payment-button" onClick={handlePaymentRedirect}>
          Proceed to Down Payment
        </button>
      </div>
    </div>
  );
};

export default FormCompletionPage;
