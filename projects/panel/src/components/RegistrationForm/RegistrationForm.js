import React from 'react';
import './RegistrationForm.css';
import Logo from '../Logo/Logo';
import Progress from '../Progress/Progress';
import StepOne from '../../containers/StepOne/StepOne';
import StepTwo from '../../containers/StepTwo/StepTwo';
import StepThree from '../../containers/StepThree/StepThree';

const RegistrationForm = props => {

  const step = currentStep => {
    switch (currentStep) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      default:
        break;
    }

  }

  return (
    <div className="registration-form">
      <Logo />
      <Progress
        currentStep={props.progress.currentStep}
        totalSteps={props.progress.totalSteps}
      />
      <div className="registration-form__steps">
        { step(props.progress.currentStep) }
      </div>
    </div>
  );

}

export default RegistrationForm;