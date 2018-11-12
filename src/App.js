import React, { Component } from 'react';
import './App.css';
import Program from './components/Program';
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Program />
      </React.Fragment>
    );
  }
}

export default App;
