import React from 'react';
import './PDF.css';
import PropTypes from 'prop-types';
import green from '../../images/PDF/weaves-green.svg';
import orange from '../../images/PDF/weaves-orange.svg';
import download from '../../images/PDF/download.svg';

const PDF = props => {

  const imgSrc = color => {
    switch (color) {
      case 'green':
        return (
          <div className="pdf__img" aria-hidden="true">
            <img src={ green } alt="background"  />
          </div>
        )
        
      case 'orange':
        return (
          <div className="pdf__img" aria-hidden="true">
            <img src={ orange } alt="background"  />
          </div>
        )

      default:
        break;
    }
  }

  return (
    <div className="pdf">
      <div className="pdf__container">
        { imgSrc(props.background) }
        <div className="pdf__badge">PDF</div>
        <div className="pdf__title">{props.title}</div>
      </div>
      <a href={props.link} className="pdf__link" target="_blank" rel="noopener noreferrer">
        <img src={download} alt="download" aria-hidden="true" className="pdf__link-img" />
        Скачать
      </a>
    </div>
  );

}

PDF.defaultProps = {
  background: ''
};

PDF.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default PDF;