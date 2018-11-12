import React, { Component } from "react";
import Input from "./Input"
import Results from "./Results"
let parsed;

class Program extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      jsonFile: "",
    }
  }
  
  getDataPoints = (input) => {
    // parsed = JSON.parse(input.jsonInput)
    let notparse = input.jsonInput
    
    try {
      let parsed = JSON.parse(notparse)
      this.setState({
        jsonFile: parsed,
      })
    }
    catch (e) {
      alert("This element can't be parsed. Maybe you pasted the wrong thing?")
    }
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