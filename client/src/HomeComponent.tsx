import React, { Component } from 'react';
import PopularComponent from './PopularComponent'
import { Link } from 'react-router-dom';


export default class HomeComponent extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>Популярное</h1>
        <PopularComponent />
        <Link to="/profile/leVch">Профиль</Link>
      </div>
    );
  }
}
