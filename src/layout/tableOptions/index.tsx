import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { AddIcon, SearchIcon } from '../../assets';
import { SalesItems } from '../../domains/sales';

import './tableOptions.scss';

interface TableOptionsProps {
  sales: SalesItems[];
  // eslint-disable-next-line no-unused-vars
  setSearchedSales: (args: SalesItems[]) => void;
}

function TableOptions({
  sales,
  setSearchedSales,
}: TableOptionsProps): JSX.Element {
  const navigate = useNavigate();

  const handleSearchForSale = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined,
  ) => {
    const event = e as React.ChangeEvent<HTMLInputElement>;
    const searchedSales = sales.filter((each) =>
      each.id
        .split('-')[0]
        .toLowerCase()
        .includes(event.target.value.toLowerCase()),
    );
    setSearchedSales(event.target.value !== '' ? searchedSales : sales);
  };

  const handleGoToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <section className="options">
      <Button
        className="registerButton"
        startIcon={<AddIcon />}
        onClick={handleGoToCheckout}
      >
        Cadastrar
      </Button>
      <TextField
        id="search-sale-button"
        placeholder="Pesquisar venda"
        onChange={(e) => handleSearchForSale(e)}
        InputProps={{
          style: {
            fontSize: 23,
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </section>
  );
}

export default TableOptions;
