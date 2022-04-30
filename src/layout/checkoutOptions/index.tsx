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
    <section>
      <Button
        className="goBackButton"
        startIcon={<LeftArrowIcon />}
        onClick={handleGoToSales}
      >
        Voltar
      </Button>
    </section>
  );
}

export default CheckoutOptions;
