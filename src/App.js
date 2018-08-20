import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Hand from './Hand';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Hand />
      <Card />
      </div>
    );
  }
}

export default App;
