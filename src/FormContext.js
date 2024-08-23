import React, { createContext, useState } from 'react';

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    unitNumber: '',
    city: '',
    state: '',
    zipCode: '',
    garageSize:'',
    floorStyle: '',
    existingCoating: false,
    silicaSand: false,
    floorCondition: '',
    garageStepCoating: false,
    installationDate1: '',
    installationDate2: '',
    stemTreatment: '',
    email: '',
    phone: '',
  });

  const updateFormData = (key, value) => {
    setFormData(prevState => ({ ...prevState, [key]: value }));
  };

  const calculateFinalQuote = () => {
    let baseAmount = 0;

    // Determine the base amount based on garageSize selection
    if (formData.garageSize === '2 Car Garage') {
      baseAmount = 2200;
    } else if (formData.garageSize === '3 Car Garage') {
      baseAmount = 3200;
    } else if (formData.garageSize === '4 Car Garage') {
      baseAmount = 4200;
    }

    // Apply additional charges based on form selections
    if (formData.existingCoating) {
      if (formData.garageSize === '2 Car Garage') {
        baseAmount += 300;
      } else if (formData.garageSize === '3 Car Garage') {
        baseAmount += 450;
      } else if (formData.garageSize === '4 Car Garage') {
        baseAmount += 600;
      }
    }

    if (formData.silicaSand) {
      if (formData.garageSize === '2 Car Garage') {
        baseAmount += 50;
      } else if (formData.garageSize === '3 Car Garage') {
        baseAmount += 100;
      } else if (formData.garageSize === '4 Car Garage') {
        baseAmount += 150;
      }
    }

    if (formData.stemTreatment && formData.stemTreatment !== 'none') {
      if (formData.garageSize === '2 Car Garage') {
        baseAmount += 120;
      } else if (formData.garageSize === '3 Car Garage') {
        baseAmount += 280;
      } else if (formData.garageSize === '4 Car Garage') {
        baseAmount += 440;
      }
    }

    if (formData.floorCondition === 'Medium Damage') {
      if (formData.garageSize === '2 Car Garage') {
        baseAmount += 50;
      } else if (formData.garageSize === '3 Car Garage') {
        baseAmount += 100;
      } else if (formData.garageSize === '4 Car Garage') {
        baseAmount += 150;
      }
    } else if (formData.floorCondition === 'Heavy Damage') {
      if (formData.garageSize === '2 Car Garage') {
        baseAmount += 120;
      } else if (formData.garageSize === '3 Car Garage') {
        baseAmount += 180;
      } else if (formData.garageSize === '4 Car Garage') {
        baseAmount += 240;
      }
    }

    // Apply garageStepCoating charge if true
    if (formData.garageStepCoating) {
      baseAmount += 175;
    }

    return baseAmount;
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, calculateFinalQuote }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
