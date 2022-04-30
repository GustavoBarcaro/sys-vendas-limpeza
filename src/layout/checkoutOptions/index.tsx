import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { LeftArrowIcon } from '../../assets';
import './checkoutOptions.scss';

function CheckoutOptions(): JSX.Element {
  const navigate = useNavigate();

  const handleGoToSales = () => {
    navigate('/');
  };

  return (
    <section className="checkoutOptions">
      <Button
        className="goBackButton"
        startIcon={<LeftArrowIcon />}
        onClick={handleGoToSales}
      >
        Voltar
      </Button>
      <Button
        className="confirmButton"
        onClick={() => {
          // this is intentional
        }}
      >
        Confirmar
      </Button>
    </section>
  );
}

export default CheckoutOptions;
