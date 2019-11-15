import React, { Component } from 'react';
import PopularComponent from './PopularComponent'
import BarComponent from './BarComponent'
import { Link } from 'react-router-dom';


export default class HomeComponent extends Component {
  
  render() {
    return (
      <div className="App">
        <BarComponent title="Animatr"/>
        <h1>Популярное</h1>
        <PopularComponent />
        <Link to="/record">Записать видео</Link>
      </div>
    );
  }
}
