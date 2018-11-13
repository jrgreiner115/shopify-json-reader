import React, { Component } from "react";
import { Card, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Button, Toolbar, Snackbar, ButtonBase } from '@material-ui/core';
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
  
  handleSort = (filter) => {
    this.props.sortJSON(filter)
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
                <TableCell>
                  <ButtonBase
                    className='column-header'
                    onClick={() => this.handleSort('title')}>
                    Variant Title
                  </ButtonBase>
                </TableCell>
                <TableCell>
                  <ButtonBase
                    className='column-header'
                    onClick={() => this.handleSort('price')}>
                    Price
                  </ButtonBase>
                </TableCell>
                <TableCell>
                  <ButtonBase
                    className='column-header'
                    onClick={() => this.handleSort('product_id')}>
                    Product ID
                  </ButtonBase>
                </TableCell>
                <TableCell>
                  <ButtonBase
                    className='column-header'
                    onClick={() => this.handleSort('id')}>
                    Variant ID
                  </ButtonBase>
                </TableCell>
                <TableCell id='sku-header'>
                  <ButtonBase
                    className='column-header'
                    onClick={() => this.handleSort('sku')}>
                    SKU
                  </ButtonBase>
                </TableCell>
                <TableCell>
                  <ButtonBase
                    className='column-header'
                    onClick={() => this.handleSort('barcode')}>
                    UPC
                  </ButtonBase>
                </TableCell>
                <TableCell>
                  <ButtonBase
                    className='column-header'
                    onClick={() => this.handleSort('inventory_quantity')}>
                    Inventory
                  </ButtonBase>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody id='table-body'>
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