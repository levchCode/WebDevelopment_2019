import React from 'react';
import './App.css';
import ProfileComponent from './ProfileComponent';
import HomeComponent from './HomeComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomeComponent}/>
          <Route path='/profile' component={ProfileComponent}/>
        </Switch>
      </Router>
    ) 
  }
}

export default App;
