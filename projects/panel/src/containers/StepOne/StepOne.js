import React, { Component } from 'react';
import { connect } from 'react-redux';
import './StepOne.css';
import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { setName } from '../../actions/userActions';
import { setEmail } from '../../actions/userActions';
import { setCurrentStep } from '../../actions/progressActions';

class StepOne extends Component {

  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let fields = [
      'name',
      'email'
    ];

    let response = [];
    let errors = [];

    fields.forEach(element => {
      response.push(this[element + 'Input'].current.validate());
    });

    response.forEach(element => {
      errors.push(element.error);
    });

    if (errors.indexOf(true) === -1) {
      let data = {};

      response.forEach(element => {
        data[element['id']] = {
          value: element['value']
        }
      });

      this.props.setName(data.name.value);
      this.props.setEmail(data.email.value);
      this.props.setCurrentStep(2);


    } else {
      for (let index = 0; index < response.length; index++) {
        if (response[index].error === true) {
          let inputComponent = this[response[index].id + 'Input'].current;
          let inputField = inputComponent.inputField.current;
          inputField.focus(); //if error === focus
          break;
        }
      }
    }

  }
  
  render() {
    return (
      <div className="step-one">
        <Title text="Регистрация" />
        <SubTitle text="Пройдите быструю регистрацию для оформления покупки франшизы" />
        <form onSubmit={this.handleSubmit} className="step-one__form">
          <Input
            id="name"
            label="Имя"
            placeholder="Афина"
            validate="min:2|max:20"
            errorMessages={{
              min: 'Имя слишком короткое',
              max: 'Имя слишком длинное'
            }}
            ref={this.nameInput}
          />
          <Input
            id="email"
            label="Почта"
            placeholder="example@mail.com"
            validate="email"
            errorMessages={{
              email: 'Неверный формат почты'
            }}
            ref={this.emailInput}
          />
          <Button />
        </form>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  setName: name => dispatch(setName(name)),
  setEmail: email => dispatch(setEmail(email)),
  setCurrentStep: step => dispatch(setCurrentStep(step))
});

export default connect(null, mapDispatchToProps)(StepOne);