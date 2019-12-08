import React, { Component } from 'react';
import VideoSetComponent from './VideoSetComponent'
import BarComponent from './BarComponent'


export default class HomeComponent extends Component {
  
  state: any;

  constructor(props:any){
    super(props);
    this.state = { vids: []}
  } 


  componentDidMount()
  {

    fetch("/api/popular")
    .then((resp) => resp.json())
    .then((data) => {
      this.setState({vids: data});
      console.log(data)
    })
    .catch((error) => {
      console.log('Request failed', error);
    });
  
  }

  render() {
    return (
      <div className="App">
        <BarComponent title="Animatr"/>
        <h1>Популярное</h1>
        <VideoSetComponent vids={this.state.vids}/>
      </div>
    );
  }
}
