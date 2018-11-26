import React from 'react';
import './Title.css';

const Title = props => {
  return (
    <div className="title">{props.text}</div>
  );
}

export default Title;