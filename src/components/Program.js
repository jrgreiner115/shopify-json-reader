import React, { Component } from "react";
import Input from "./Input"
import Results from "./Results"
let parsed;
let runtime

class Program extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      jsonFile: "",
    }
  }
  
  getDataPoints = (input) => {
    parsed = JSON.parse(input.jsonInput)
    this.setState({
      jsonFile: parsed,
    })
  }
  
  render = () => {
    return (
      <div className="program">
        <Input handleProgram={this.getDataPoints}/>
        {this.state.jsonFile !== "" ? <Results json={this.state.jsonFile}/> : ""}
      </div>
      
    )
  }
}

export default Program