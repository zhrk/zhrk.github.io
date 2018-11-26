import React, { Component } from 'react';
import { connect } from 'react-redux';
import './StepTwo.css';
import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';
import PDF from '../../components/PDF/PDF';
import Button from '../../components/Button/Button';
import { setCurrentStep } from '../../actions/progressActions';

class StepTwo extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.setCurrentStep(3);
  }

  render() {
    return (
      <form className="step-two" onSubmit={this.handleSubmit}>
        <Title text="Промо Материалы" />
        <SubTitle text="Ознакомьтесь с нашими промо-материалами и внимательно изучите презентацию франшизы и все дополнительные материалы и инструкции, опубликованные на этой странице" />
        <div className="step-two__pdf-list">
          <PDF
            background="green"
            title="Презентация франшизы"
            link="https://google.com"
          />
          <PDF
            background="orange"
            title="План запуска франшизы"
            link="https://youtube.com"
          />
        </div>
        <Button />
      </form>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  setCurrentStep: step => dispatch(setCurrentStep(step))
});

export default connect(null, mapDispatchToProps)(StepTwo);