import React, { useContext, useState } from 'react';
import { FormContext } from '../FormContext';
import FormNavigation from '../components/FormNavigation';
import ProgressBar from '../components/ProgressBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const FormPage85 = ({ currentStep, totalSteps }) => {
  const { formData, updateFormData } = useContext(FormContext);
  const [openCalendar1, setOpenCalendar1] = useState(false);
  const [openCalendar2, setOpenCalendar2] = useState(false);
  const [error, setError] = useState('');

  // Calculate the minimum selectable date (7 days from now)
  const minSelectableDate = new Date();
  minSelectableDate.setDate(minSelectableDate.getDate() + 7);

  const handleDateChange1 = (date) => {
    updateFormData('installationDate1', date);
    setOpenCalendar1(false);
    setError(''); // Clear any previous error
  };

  const handleDateChange2 = (date) => {
    updateFormData('installationDate2', date);
    setOpenCalendar2(false);
    setError(''); // Clear any previous error
  };

  const formatDate = (date) => {
    if (!date) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const validateDates = () => {
    if (!formData.installationDate1 || !formData.installationDate2) {
      setError('Please select both installation date preferences.');
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateDates()) {
      return true; // Validation passed, proceed to the next page
    } else {
      return false; // Validation failed, stay on the current page
    }
  };

  return (
    <div className="form-page">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <h1>Select Your Installation Date Preferences</h1>
      <form>
        <div className="form-group">
          <label>Installation Date Preference 1:</label>
          <input
            type="text"
            value={formatDate(formData.installationDate1)}
            onClick={() => setOpenCalendar1(!openCalendar1)}
            readOnly
            placeholder="Click to select a date"
          />
          {openCalendar1 && (
            <div className="calendar-popup">
              <Calendar
                onChange={handleDateChange1}
                value={formData.installationDate1 || null}
                minDate={minSelectableDate}
              />
            </div>
          )}
        </div>
        <div className="form-group">
          <label>Installation Date Preference 2:</label>
          <input
            type="text"
            value={formatDate(formData.installationDate2)}
            onClick={() => setOpenCalendar2(!openCalendar2)}
            readOnly
            placeholder="Click to select a date"
          />
          {openCalendar2 && (
            <div className="calendar-popup">
              <Calendar
                onChange={handleDateChange2}
                value={formData.installationDate2 || null}
                minDate={minSelectableDate}
              />
            </div>
          )}
        </div>
        {error && <span className="error-message">{error}</span>}
      </form>
      <FormNavigation 
        prevPath="/step8" 
        nextPath="/step9" 
        onNext={handleNext} 
      />
    </div>
  );
};

export default FormPage85;
