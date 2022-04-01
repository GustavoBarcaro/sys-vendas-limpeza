import React from 'react';
import Table from '../../layout/table';
import styles from './home.module.scss';

function Home(): JSX.Element {
  return (
    <main className={styles.home}>
      <section className={styles.content}>
        <Table />
      </section>
    </main>
  );
}

export default Home;
