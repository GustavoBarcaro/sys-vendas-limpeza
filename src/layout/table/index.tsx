import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { InfoIcon, TrashIcon } from '../../assets';

import './table.scss';

const value = {
  idVenda: 1,
  datetime: '19/02/2022 14:43',
  status: 1,
  valor: 4500,
  history: [
    {
      date: '2020-01-05',
      customerId: '11091700',
      amount: 3,
    },
    {
      date: '2020-01-02',
      customerId: 'Anonymous',
      amount: 1,
    },
  ],
};

function Row(props: { row: typeof value }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} className="lines">
        <TableCell align="center">{row.idVenda}</TableCell>
        <TableCell align="center">{row.datetime}</TableCell>
        <TableCell align="center">{row.status}</TableCell>
        <TableCell align="center">{row.valor}</TableCell>
        <TableCell align="center" className="options">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            <InfoIcon />
          </IconButton>
          <IconButton
            aria-label="expand row"
            size="small"
            className="delete-btn"
            onClick={() => {
              // this is intentional
            }}
          >
            <TrashIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            style={{ backgroundColor: '#d8d6d6' }}
          >
            <Box sx={{ margin: 1 }} style={{ padding: '20px' }}>
              <Table
                size="small"
                aria-label="purchases"
                className="insideTable"
              >
                <TableHead className="insideTableHead">
                  <TableRow>
                    <TableCell>Produto</TableCell>
                    <TableCell align="center">Quantidade</TableCell>
                    <TableCell align="center">Valor Unitário</TableCell>
                    <TableCell align="center">Valor Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="insideTableBody">
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell align="center">
                        {historyRow.customerId}
                      </TableCell>
                      <TableCell align="center">{historyRow.amount}</TableCell>
                      <TableCell align="center">
                        {Math.round(historyRow.amount * row.valor * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = [value, value, value, value];

export default function CollapsibleTable() {
  return (
    <TableContainer>
      <Table aria-label="collapsible table">
        <TableHead className="tableHead">
          <TableRow>
            <TableCell align="center">ID Venda</TableCell>
            <TableCell align="center">Data / Hora</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Valor</TableCell>
            <TableCell align="center">Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.idVenda} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
