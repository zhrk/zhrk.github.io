import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Home.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const Home = props => {
  return (
    <div className="home">
      <RegistrationForm progress={props.progress} />
    </div>
  );
}

const mapStateToProps = store => ({
  user: store.user,
  progress: store.progress
});

export default withRouter(connect(mapStateToProps)(Home));