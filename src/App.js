import React, { Component } from 'react';
import Timer from './Components/Timer'

class App extends Component {
  render() {
    return (
      <div className="main">
        <header className="main-header">
          <img src="https://gravitywerks.com/wp-content/uploads/2009/10/header.jpg" alt='Header'/>
        </header>
          <Timer/>
      </div>
    );
  }
}

export default App;
