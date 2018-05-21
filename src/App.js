import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import YearControls from './controls/YearControls';
import Usmap from './controls/Usmap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the United States of Avocados</h1>
        </header>
        <p className="App-intro">
          Comparing wages with expenses in various years
        </p>
        <YearControls />
        <Usmap />
      </div>
    );
  }
}

export default App;
