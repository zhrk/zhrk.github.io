import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../../containers/Home/Home';
import NotFound from '../NotFound/NotFound';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;