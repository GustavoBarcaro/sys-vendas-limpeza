import React from 'react';
import Table from '../../layout/table';

function Home(): JSX.Element {
  return (
    <main
      style={{
        marginTop: '110px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <section style={{ width: '80%' }}>
        <Table />
      </section>
    </main>
  );
}

export default Home;
