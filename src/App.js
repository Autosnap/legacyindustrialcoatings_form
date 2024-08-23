import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FormProvider } from './FormContext';
import FormPage1 from './pages/FormPage1';
import FormPage2 from './pages/FormPage2';
import FormPage25 from './pages/FormPage25';
import FormPage3 from './pages/FormPage3';
import FormPage4 from './pages/FormPage4';
import FormPage5 from './pages/FormPage5';
import FormPage6 from './pages/FormPage6';
import FormPage7 from './pages/FormPage7';
import FormPage8 from './pages/FormPage8';
import FormPage85 from './pages/FormPage85';
import FormPage9 from './pages/FormPage9';
import FormCompletionPage from './pages/FormCompletionPage';

const App = () => {
  const totalSteps = 11; // Total number of form pages

  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FormPage1 currentStep={1} totalSteps={totalSteps} />} />
          <Route path="/step2" element={<FormPage2 currentStep={2} totalSteps={totalSteps} />} />
          <Route path="/step2-5" element={<FormPage25 currentStep={3} totalSteps={totalSteps} />} />
          <Route path="/step3" element={<FormPage3 currentStep={4} totalSteps={totalSteps} />} />
          <Route path="/step4" element={<FormPage4 currentStep={5} totalSteps={totalSteps} />} />
          <Route path="/step5" element={<FormPage5 currentStep={6} totalSteps={totalSteps} />} />
          <Route path="/step6" element={<FormPage6 currentStep={7} totalSteps={totalSteps} />} />
          <Route path="/step7" element={<FormPage7 currentStep={8} totalSteps={totalSteps} />} />
          <Route path="/step8" element={<FormPage8 currentStep={9} totalSteps={totalSteps} />} />
          <Route path="/step8-5" element={<FormPage85 currentStep={10} totalSteps={totalSteps} />} />
          <Route path="/step9" element={<FormPage9 currentStep={11} totalSteps={totalSteps} />} />
          <Route path="/completion" element={<FormCompletionPage />} />
          <Route path="*" element={<FormPage1 currentStep={1} totalSteps={totalSteps} />} /> {/* Fallback route */}
        </Routes>
      </Router>
    </FormProvider>
  );
};

export default App;
