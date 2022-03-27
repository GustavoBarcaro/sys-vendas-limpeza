import React from 'react';
import { format } from 'date-fns';
import Button from '@mui/material/Button';
import { LogoutIcon } from '../../assets';
import styles from './navbar.module.scss';

export default function NavBar(): JSX.Element {
  const onClose = () => {
    window.opener = null;
    window.open('', '_self');
    window.close();
  };
  return (
    <header className={styles.header}>
      <section className={styles.container}>
        <time className={styles.date}>{format(new Date(), 'dd/MM/yyyy')}</time>
        <h2 className={styles.systemName}>Coisa de Faxina</h2>
        <div className={styles.actions}>
          <div className={styles.logout}>
            <Button color="inherit" endIcon={<LogoutIcon />} onClick={onClose}>
              Sair
            </Button>
          </div>
        </div>
      </section>
    </header>
  );
}
