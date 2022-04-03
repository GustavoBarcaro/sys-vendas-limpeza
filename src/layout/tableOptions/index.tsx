import React from 'react';
import Button from '@mui/material/Button';
import { AddIcon } from '../../assets';
import './tableOptions.scss';

function TableOptions(): JSX.Element {
  return (
    <section className="options">
      <Button className="registerButton" startIcon={<AddIcon />}>
        Cadastrar
      </Button>
    </section>
  );
}

export default TableOptions;
