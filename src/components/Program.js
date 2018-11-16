import React, { Component } from "react";
import Input from "./Input"
import Results from "./Results"

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
  
  handleSort = (filter) => {
    let json = this.state.jsonFile
    let newVariants = this.state.jsonFile.product.variants
    if (filter === 'inventory_quantity' || filter === 'id' ||filter === 'product_id') {
      newVariants.sort((a,b) => {
        return b[filter] - a[filter] 
      })
    }
    else {
      newVariants.sort((a,b) => {
        return a[filter].localeCompare(b[filter])
      })
    } 
    json.product.variants = newVariants
    this.setState({
      jsonFile: json,
    })
      
  }
  
  
  
  render = () => {
    return (
      <div className="program">
        <Input handleProgram={this.getDataPoints}/>
        {this.state.jsonFile !== "" ? <Results sortJSON={this.handleSort} json={this.state.jsonFile}/> : ""}
      </div>
      
    )
  }
}

export default Program