import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormNavigation = ({ nextPath, prevPath, isLastStep }) => {
  const navigate = useNavigate();

  return (
    <div className="form-navigation">
      {prevPath && <button onClick={() => navigate(prevPath)}>Back</button>}
      {nextPath && (
        <button onClick={() => navigate(nextPath)}>
          {isLastStep ? 'Get Quote Now!' : 'Continue'}
        </button>
      )}
    </div>
  );
};

export default FormNavigation;
