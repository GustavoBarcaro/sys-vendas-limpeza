import React from 'react';
import styles from './navbar.modules.css';

export default function NavBar() {
  return (
    <header className={styles.header}>
      <section>
        <time>19/02/2022 10:24</time>
        <h2>Nome do sistema</h2>
        <div>
          <div>button</div>
          <div>sair</div>
        </div>
      </section>
    </header>
  );
}
