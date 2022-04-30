import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../layout/table';
import TableOptions from '../../layout/tableOptions';
import styles from './home.module.scss';
import { SalesItems, SalesResponse } from '../../domains/sales';
import { SERVICE_BASE_URI } from '../../config/services';

function Home(): JSX.Element {
  const [searchedSales, setSearchedSales] = useState<Array<SalesItems>>([]);
  const [sales, setSales] = useState<Array<SalesItems>>([]);
  useEffect(() => {
    setSearchedSales(sales);
  }, [sales]);
  useEffect(() => {
    axios
      .get(`${SERVICE_BASE_URI}/api/sales`, {
        withCredentials: false,
      })
      .then(({ data }) => {
        const formattedResponse = (data as Array<SalesResponse>).map(
          (each) => ({
            ...each,
            items: each.items.map((eachItem) => eachItem.product),
          }),
        );
        setSales(formattedResponse);
      });
  }, []);
  return (
    <main className={styles.home}>
      <section className={styles.content}>
        <TableOptions setSearchedSales={setSearchedSales} sales={sales} />
        <Table sales={searchedSales} />
      </section>
    </main>
  );
}

export default Home;
