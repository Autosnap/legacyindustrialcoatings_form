import React from 'react';

const FormCompletionPage = () => {
  return (
    <div className="completion-page">
      <h1>Here is your offer!</h1>
      <div className="summary-card">
        <div className="summary-header">Summary</div>
        <div className="summary-content">
          <div className="summary-item">
            <span className="summary-value">$3,399</span>
            <span className="summary-label">Total Cost</span>
          </div>
          <div className="summary-item">
            <span className="summary-value">$199</span>
            <span className="summary-label">Down payment</span>
          </div>
        </div>
        <div className="summary-dates">
          <div className="date-item">
            <span className="date-label">Installation Date (1st Preference)</span>
            <span className="date-value">09/12/2024</span>
          </div>
          <div className="date-item">
            <span className="date-label">Installation Date (2nd Preference)</span>
            <span className="date-value">09/15/2024</span>
          </div>
        </div>
        <button className="payment-button">Proceed to down Payment</button>
      </div>
    </div>
  );
};

export default FormCompletionPage;
