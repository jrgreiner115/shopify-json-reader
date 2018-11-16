import React, { Component } from "react";
import { Card, Table, Typography, TableHead, TableRow, TableCell, TableBody, IconButton, Button, Toolbar, Snackbar, ButtonBase } from '@material-ui/core';
import { Close } from '@material-ui/icons';


class Results extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      open: false,
      collectionString: "",
    }
  }
  
  handleCopy = () => {
    let tableToCopy = document.getElementById('results-div');
  
    let selection = window.getSelection ();
    let rangeToSelect = document.createRange ();
    rangeToSelect.selectNodeContents(tableToCopy);

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
  
  componentDidMount = () => {
    let arr = this.buildArray(this.props.json.product.variants)
    let string = this.variantIterator(this.props.json.product.handle, arr)
    this.setState({
      collectionString: string
    })
  }
  
  variantIterator = (productHandle, variants) => {
    let newString = '';
    if (variants.length === 1) {
      return newString += productHandle
    } else {
    
      variants.map( (variant) => {
        let variantString = variant.toString()
        let partial = productHandle + ':' + variantString + "|"
        return newString += partial
      })
      return newString
    }
  }
  
  buildArray = (json) => {
    console.log('inside build array', json)
    let variants = []
    json.map(variant => { 
      return variants.push(variant.id)
    }) 
    return variants
  }
  
  handleCollectionCopy = () => {
    let collection = document.getElementById('plp-collection-string')
    let selection = window.getSelection ();
    let rangeToSelect = document.createRange ();
    rangeToSelect.selectNodeContents(collection);

    selection.removeAllRanges();
    selection.addRange(rangeToSelect);
    document.execCommand('copy');
    this.setState({
      open: true,
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
        <Card className="paper-table">
          <div>
            <div>
              <Typography variant='body1'>
                  Product Variant String for Collections:
              </Typography>
            </div>
            <div
              id='plp-collection-string' 
              onClick={this.handleCollectionCopy}
            >
              <Typography 
                variant='body1'
                className='plp-collection'
                >
                  {this.state.collectionString}
              </Typography>
            </div>
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