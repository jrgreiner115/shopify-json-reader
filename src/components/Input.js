import React, { Component } from "react";
import {Typography, TextField, Button, Card, Select, MenuItem, InputLabel} from '@material-ui/core';

class Input extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      jsonInput: "",
    }
  }
  
  handleChange = (event) => {
    this.setState({
      jsonInput: event.target.value,
    })
  } 
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleProgram(this.state)
  }
  
  render = () => {
    return (
      <div className='input-container'>
        <Card className="input-form">
          <TextField
            className="form-elements"
            label="input JSON here"
            multiline
            fullWidth
            rowsMax="4"
            value={this.state.jsonInput}
            onChange={this.handleChange}
          />
          <br />
          <Button
            onClick={this.handleSubmit}
            color='primary'
            className="form-elements"
            variant='contained'>
            Run
          </Button>
        </Card>
        
      </div>
    )
  }
}

export default Input