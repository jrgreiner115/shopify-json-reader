import React, { Component } from 'react';
import './App.css';
import Program from './components/Program'
import {AppBar, Toolbar, Typography} from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar 
          position="static" 
          color="primary">
          <Toolbar>
            <Typography 
              color='inherit'
              variant='title'>
              PMG Helper
            </Typography>
          </Toolbar>
        </AppBar>
        <Program>
        </Program>
      </React.Fragment>
    );
  }
}

export default App;
