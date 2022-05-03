import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TextField } from '@mui/material';
import { TrashIcon } from '../../assets';
import { Cart, ProductCart } from '../../domains/sales';
import { formatNumberBRL } from '../../config/function';

import './checkoutTable.scss';

type handleChangeCartItemQtdType = (
  // eslint-disable-next-line no-unused-vars
  id: number,
  // eslint-disable-next-line no-unused-vars
  e: number,
) => void;

type handleDeleteFromCartType = (
  // eslint-disable-next-line no-unused-vars
  id: number,
) => void;

function Row(props: {
  row: ProductCart;
  handleChangeCartItemQtd: handleChangeCartItemQtdType;
  handleDeleteFromCart: handleDeleteFromCartType;
}) {
  const { row, handleChangeCartItemQtd, handleDeleteFromCart } = props;

  return (
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} className="lines">
      <TableCell align="left">{row.name}</TableCell>
      <TableCell align="center">
        <TextField
          id="number"
          type="number"
          value={row.qtd}
          sx={{
            '& .MuiInputBase-input': {
              textAlign: 'right',
              fontSize: 24,
            },
          }}
          onChange={(e) => {
            handleChangeCartItemQtd(row.id, +e.target.value);
          }}
        />
      </TableCell>
      <TableCell align="center">
        {formatNumberBRL(row.value * row.qtd)}
      </TableCell>
      <TableCell align="center" className="options">
        <IconButton
          aria-label="expand row"
          size="small"
          className="delete-btn"
          onClick={() => {
            handleDeleteFromCart(row.id);
          }}
        >
          <TrashIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

interface CollapsibleTableProps {
  cart: Cart;
  handleChangeCartItemQtd: handleChangeCartItemQtdType;
  handleDeleteFromCart: handleDeleteFromCartType;
}

export default function CheckoutTable({
  cart,
  handleChangeCartItemQtd,
  handleDeleteFromCart,
}: CollapsibleTableProps) {
  return (
    <TableContainer>
      <Table aria-label="collapsible table">
        <TableHead className="tableHead">
          <TableRow>
            <TableCell align="center">Nome produto</TableCell>
            <TableCell align="center">Quantidade</TableCell>
            <TableCell align="center">Valor</TableCell>
            <TableCell align="center" />
          </TableRow>
        </TableHead>
        <TableBody className="tableBodyCheckout">
          {cart.map((row) => (
            <Row
              key={row.id}
              row={row}
              handleChangeCartItemQtd={handleChangeCartItemQtd}
              handleDeleteFromCart={handleDeleteFromCart}
            />
          ))}
          <TableRow
            className="TableTotal"
            style={{
              fontSize: 24,
            }}
          >
            <TableCell align="left">Total: </TableCell>
            <TableCell />
            <TableCell />
            <TableCell align="right">
              {formatNumberBRL(
                cart.reduce((acc, item) => acc + item.value * item.qtd, 0),
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
