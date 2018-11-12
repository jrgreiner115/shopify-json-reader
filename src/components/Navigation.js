import React, { Component } from 'react';
import {AppBar, Toolbar, Typography, Tooltip, IconButton} from '@material-ui/core';
import { Help } from '@material-ui/icons';

class Navigation extends Component {
  render = () => {
    return (
      <AppBar 
        position="static" 
        color="primary">
        <Toolbar>
          <Typography 
            color='inherit'
            variant='title'>
            PMG Helper
          </Typography>
          <IconButton 
            color="inherit"
            className="help-icon"
            size="small">
            <Tooltip
              title="Help"
              placement="bottom">
                <Help/>
            </Tooltip>
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navigation