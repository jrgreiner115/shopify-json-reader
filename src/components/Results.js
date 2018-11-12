import React, { Component } from "react";
import { Card, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Toolbar } from '@material-ui/core';
import { FileCopy } from '@material-ui/icons';
import CopyToClipboard from 'react-copy-html-to-clipboard';


class Results extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      tableVal: document.getElementById('table')
    }
  }
  
  handleCopy = () => {
    console.log("hello", "hello", this.state.tableVal);
  }
  
  componentDidMount = () => {
    this.setState({
      tableVal: document.getElementById('table')
    })
  }
  
  render() {
      let results = this.props.json.product.variants
      return (
        <Card className="paper-table">
          <Toolbar className='toolbar'>
           <IconButton onClick={() => {this.handleCopy()}}>
            <FileCopy />
           </IconButton>
          </Toolbar>
          <Table 
            id='results-table' 
            className='table'
            ref={(textarea) => this.textArea = textarea}>
            <TableHead>
              <TableRow>
                <TableCell>Product Title</TableCell>
                <TableCell>Variant Title</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Variant ID</TableCell>
                <TableCell>SKU</TableCell>
                <TableCell>UPC</TableCell>
                <TableCell>Inventory</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {this.props.json.product.title}
                     </TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.sku}</TableCell>
                    <TableCell>{row.barcode}</TableCell>
                    <TableCell>{row.inventory_quantity}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Card>
      );
    }

}

export default Results