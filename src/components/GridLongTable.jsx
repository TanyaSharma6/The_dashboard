import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import abstract3d from '../images/abstract3d.jpeg';
import theEarth from '../images/tehe-earth.webp';

function createData(image,name, stock, price, sale) {
  return { image,name, stock, price, sale};
}

const rows = [
  createData(abstract3d,'Abstract 3D', '32 In Stock', '$45.99', 20),
  createData(theEarth,'Sarphen Illustration', '32 In Stock', '$45.99', 20),
  
];

export default function GridLongTable() {
  return (
    <div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='table-rows'>
            <TableCell className='thead'>Product Name</TableCell>
            <TableCell className='thead' align="right">Stock</TableCell>
            <TableCell className='thead' align="right">Price</TableCell>
            <TableCell className='thead' align="right">Total Sales</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow className='table-body'
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className='table-cell table-thd'>
               
                <div className='row'>
                    <div className='col-sm-2'>
                        <img src={row.image} alt={row.image} width={'100%'}/>
                    </div>
                    <div className='col-sm-5'>
                       <h5>{row.name}</h5>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                    </div>
                </div>
              </TableCell>
              <TableCell align="right" className='table-cell'>{row.stock}</TableCell>
              <TableCell align="right" className='table-cell cell-price'>{row.price}</TableCell>
              <TableCell align="right" className='table-cell'>{row.sale}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
