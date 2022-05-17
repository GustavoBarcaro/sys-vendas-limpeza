import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { LeftArrowIcon } from '../../assets';
import './checkoutOptions.scss';

interface CheckoutOptionsProps {
  handleSaveSale: () => void;
  disableConfirm: boolean;
}

function CheckoutOptions({
  handleSaveSale,
  disableConfirm,
}: CheckoutOptionsProps): JSX.Element {
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
          handleSaveSale();
        }}
        disabled={disableConfirm}
      >
        Confirmar
      </Button>
    </section>
  );
}

export default CheckoutOptions;
