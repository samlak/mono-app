import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './App.css'
import Account from './containers/Account/Account';
import Authenticate from './containers/Authenticate/Authenticate';


function App() {
  return (
    <Switch>
      <Route path="/account"  component={Account}/>
      <Route path="/auth" component={Authenticate}/>
      <Redirect to="/auth" />
    </Switch>
  );
}

export default App;
