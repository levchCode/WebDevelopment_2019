import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProfileComponent from './ProfileComponent';
import HomeComponent from './HomeComponent';

const MainComponent = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomeComponent}></Route>
      <Route exact path='/profile' component={ProfileComponent}></Route>
    </Switch>
  );
}

export default MainComponent;