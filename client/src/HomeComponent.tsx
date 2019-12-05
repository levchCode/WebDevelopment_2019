import React, { Component } from 'react';
import PopularComponent from './PopularComponent'
import BarComponent from './BarComponent'


export default class HomeComponent extends Component {
    
  render() {
    return (
      <div className="App">
        <BarComponent title="Animatr"/>
        <h1>Популярное</h1>
        <PopularComponent />
      </div>
    );
  }
}
