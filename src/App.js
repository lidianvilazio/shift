import React, { Component } from 'react';
import Timer from './Components/Timer'

class App extends Component {
  render() {
    return (
      <div className="main">
        <header className="main-header">
          <img src="https://mms.businesswire.com/media/20180604005362/en/661106/5/Shift_Logo.jpg" alt='Header'/>
        </header>
          <Timer/>
      </div>
    );
  }
}

export default App;
