import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormNavigation = ({ nextPath, prevPath, isLastStep, onNext }) => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (onNext) {
      const canProceed = onNext();
      if (canProceed) {
        navigate(nextPath);
      }
    } else {
      navigate(nextPath);
    }
  };

  return (
    <div className="form-navigation">
      {prevPath && <button onClick={() => navigate(prevPath)}>Back</button>}
      {nextPath && (
        <button onClick={handleNextClick}>
          {isLastStep ? 'Get Quote Now!' : 'Continue'}
        </button>
      )}
    </div>
  );
};

export default FormNavigation;
