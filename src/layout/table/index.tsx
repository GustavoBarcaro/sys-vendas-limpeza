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
import { format } from 'date-fns';
import { InfoIcon, TrashIcon } from '../../assets';
import Status from '../../components/status';
import { SalesItems } from '../../domains/sales';
import { formatNumberBRL } from '../../config/function';

import './table.scss';

type handleDeleteSaleType = (
  // eslint-disable-next-line no-unused-vars
  id: string,
) => void;

function Row(props: {
  row: SalesItems;
  handleDeleteSale: handleDeleteSaleType;
}) {
  const { row, handleDeleteSale } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} className="lines">
        <TableCell align="center">{row.id.split('-')[0]}</TableCell>
        <TableCell align="center">
          {format(Date.parse(row.saleDatetime), 'dd/MM/yyyy yy:mm')}
        </TableCell>
        <TableCell align="center">
          <Status type={row.status} />
        </TableCell>
        <TableCell align="center">{formatNumberBRL(row.value)}</TableCell>
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
              handleDeleteSale(row.id);
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
                  {row.items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell component="th" scope="row">
                        {item.name}
                      </TableCell>
                      <TableCell align="center" component="th">
                        {item.quantity}
                      </TableCell>
                      <TableCell align="center">
                        {formatNumberBRL(item.value)}
                      </TableCell>
                      <TableCell align="center">
                        {formatNumberBRL(item.amount)}
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

interface CollapsibleTableProps {
  sales: SalesItems[];
  handleDeleteSale: handleDeleteSaleType;
}

export default function CollapsibleTable({
  sales,
  handleDeleteSale,
}: CollapsibleTableProps) {
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
        <TableBody className="tableBody">
          {sales.map((row) => (
            <Row key={row.id} row={row} handleDeleteSale={handleDeleteSale} />
          ))}
        </TableBody>
      </Table>
      {sales.length === 0 && (
        <span className="noSalesFound">Nenhuma venda encontrada.</span>
      )}
    </TableContainer>
  );
}
