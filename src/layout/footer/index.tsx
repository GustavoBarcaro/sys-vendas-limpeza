import React from 'react';
import styles from './footer.module.scss';

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.helper} />
    </footer>
  );
}
