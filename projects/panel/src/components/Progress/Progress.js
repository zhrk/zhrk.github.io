import React from 'react';
import './Progress.css';
import PropTypes from 'prop-types';

const Progress = props => {
  return (
    <div className="progress">
      <div className="progress__step">Шаг {props.currentStep} из {props.totalSteps}</div>
      <div className="progress__bar">
        <div
          className="progress__bar-indicator"
          style={{
            width: 100 / props.totalSteps * props.currentStep + '%'
          }}
        ></div>
      </div>
    </div>
  );
}

Progress.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired
};

export default Progress;