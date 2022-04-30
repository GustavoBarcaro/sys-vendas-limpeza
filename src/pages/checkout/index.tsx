import React from 'react';
import styles from './checkout.module.scss';
import CheckoutOptions from '../../layout/checkoutOptions';

function Checkout(): JSX.Element {
  return (
    <main className={styles.checkout}>
      <CheckoutOptions />
    </main>
  );
}

export default Checkout;
