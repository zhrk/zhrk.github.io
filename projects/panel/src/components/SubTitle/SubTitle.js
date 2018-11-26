import React from 'react';
import './SubTitle.css';

const SubTitle = props => {
  return (
    <div className="sub-title">{props.text}</div>
  );
}

export default SubTitle;