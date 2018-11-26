import React from 'react';
import './Button.css';
import arrow from '../../images/Button/arrow.svg';

const Button = () => {
  return (
    <button className="button">
      Далее
      <img
        src={arrow}
        alt="arrow"
        className="button__arrow"
        aria-hidden="true"
      />
    </button>
  );
}

export default Button;