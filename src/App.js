import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage1 from './pages/FormPage1';
import FormPage2 from './pages/FormPage2';
import FormPage3 from './pages/FormPage3';
import FormPage4 from './pages/FormPage4';
import FormPage5 from './pages/FormPage5';
import FormPage6 from './pages/FormPage6';
import FormPage7 from './pages/FormPage7';
import FormPage8 from './pages/FormPage8';
import FormPage9 from './pages/FormPage9';
import FormPage10 from './pages/FormPage10';
import FormCompletionPage from './pages/FormCompletionPage';

const App = () => {
  const totalSteps = 10;

  return (
    <Router>
      <Routes>
        <Route path="/step1" element={<FormPage1 currentStep={1} totalSteps={totalSteps} />} />
        <Route path="/step2" element={<FormPage2 currentStep={2} totalSteps={totalSteps} />} />
        <Route path="/step3" element={<FormPage3 currentStep={3} totalSteps={totalSteps} />} />
        <Route path="/step4" element={<FormPage4 currentStep={4} totalSteps={totalSteps} />} />
        <Route path="/step5" element={<FormPage5 currentStep={5} totalSteps={totalSteps} />} />
        <Route path="/step6" element={<FormPage6 currentStep={6} totalSteps={totalSteps} />} />
        <Route path="/step7" element={<FormPage7 currentStep={7} totalSteps={totalSteps} />} />
        <Route path="/step8" element={<FormPage8 currentStep={8} totalSteps={totalSteps} />} />
        <Route path="/step9" element={<FormPage9 currentStep={9} totalSteps={totalSteps} />} />
        <Route path="/step10" element={<FormPage10 currentStep={10} totalSteps={totalSteps} />} />
        <Route path="/completion" element={<FormCompletionPage />} />
        <Route exact path="/" element={<FormPage1 currentStep={1} totalSteps={totalSteps} />} />
      </Routes>
    </Router>
  );
};

export default App;
