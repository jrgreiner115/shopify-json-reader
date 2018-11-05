import React, { Component } from "react";
import {Card, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';


class Results extends Component {
  
  render() {
      let results = this.props.json.product.variants
      return (
        <Card className="paper-table">
           <Table className='table'>
             <TableHead>
               <TableRow>
                 <TableCell>Product Title</TableCell>
                 <TableCell>Variant Title</TableCell>
                 <TableCell>Price</TableCell>
                 <TableCell>Variant ID</TableCell>
                 <TableCell>SKU</TableCell>
                 <TableCell>UPC</TableCell>
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