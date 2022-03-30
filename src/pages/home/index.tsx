import React from 'react';
import Table from '../../layout/table';

function Home(): JSX.Element {
  return (
    <main
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <section style={{ width: '80%', marginTop: '110px' }}>
        <Table />
      </section>
    </main>
  );
}

export default Home;
