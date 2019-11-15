import React from 'react';
import './App.css';
import ProfileComponent from './ProfileComponent';
import HomeComponent from './HomeComponent';
import RecordComponent from './RecordComponent';
import PlayComponent from './PlayComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomeComponent}/>
          <Route path='/profile/:user' component={ProfileComponent}/>
          <Route path='/record' component={RecordComponent}/>
          <Route path='/watch/:id' component={PlayComponent}/>
        </Switch>
      </Router>
    ) 
  }
}

export default App;
