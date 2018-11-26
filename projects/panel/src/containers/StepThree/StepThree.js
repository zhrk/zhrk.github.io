import React, { Component } from 'react';
import { connect } from 'react-redux';
import './StepThree.css';
import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';

class StepThree extends Component {
  render() {
    return (
      <div className="step-three">
        <Title text="Тариф Франшизы" />
        <SubTitle text="Выберите подходящий для вас тариф франшизы" />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  user: store.user
});

export default connect(mapStateToProps)(StepThree);