import React from 'react';
import { format } from 'date-fns';
import styles from './navbar.module.scss';

export default function NavBar(): JSX.Element {
  return (
    <header className={styles.header}>
      <section className={styles.container}>
        <time className={styles.date}>{format(new Date(), 'dd/MM/yyyy')}</time>
        <h2 className={styles.systemName}>Coisa de Faxina</h2>
        <div className={styles.actions}>
          <div>button</div>
          <div>sair</div>
        </div>
      </section>
    </header>
  );
}
