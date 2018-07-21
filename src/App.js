import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Components/Timer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Timer/>
      </div>
    );
  }
}

export default App;
