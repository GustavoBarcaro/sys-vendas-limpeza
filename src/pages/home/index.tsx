import React from 'react';
import Table from '../../layout/table';
import TableOptions from '../../layout/tableOptions';

import styles from './home.module.scss';

function Home(): JSX.Element {
  return (
    <main className={styles.home}>
      <section className={styles.content}>
        <TableOptions />
        <Table />
      </section>
    </main>
  );
}

export default Home;
