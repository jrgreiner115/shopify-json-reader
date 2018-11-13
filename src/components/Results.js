import React, { Component } from "react";
import { Card, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Button, Toolbar, Snackbar } from '@material-ui/core';
import { Close } from '@material-ui/icons';


class Results extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      open: false,
    }
  }
  
  handleCopy = () => {
    let applesauce = document.getElementById('results-div');
  
            var selection = window.getSelection ();
            var rangeToSelect = document.createRange ();
            rangeToSelect.selectNodeContents(applesauce);

            selection.removeAllRanges();
            selection.addRange(rangeToSelect);
            document.execCommand('copy');
    this.setState({
      open: true,
    })
  }
  
  handleClose = () => {
    this.setState({
      open: false,
    })
  }
  
  componentDidMount = () => {
    this.setState({
      tableVal: document.getElementById('table')
    })
  }
  
  render() {
      let results = this.props.json.product.variants
      return (
        <div>
        <Card className="paper-table">
          <Toolbar className='toolbar'>
           <Button 
            onClick={() => {this.handleCopy()}}
            variant='contained'
            color='primary'
            >
            Copy Table
           </Button>
          </Toolbar>
          <div id='results-div'>
          <Table 
            id='results-table' 
            className='table'
            ref={(textarea) => this.textArea = textarea}>
            <TableHead>
              <TableRow>
                <TableCell>Product Title</TableCell>
                <TableCell>Variant Title</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Product ID</TableCell>
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
                    <TableCell>{row.product_id}</TableCell>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.sku}</TableCell>
                    <TableCell>{row.barcode}</TableCell>
                    <TableCell>{row.inventory_quantity}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          </div>
        </Card>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Copied Succesfully</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <Close />
            </IconButton>,
          ]}
          ></Snackbar>
        </div>
      );
    }

}

export default Results