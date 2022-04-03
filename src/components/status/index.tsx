import React from 'react';
import classNames from 'classnames';
import styles from './status.module.scss';

interface StatusProps {
  type: string;
}

const STATUS_VALUES = new Map([
  ['1', 'Finalizada'],
  ['2', 'Em aberto'],
]);

function Status({ type }: StatusProps): JSX.Element {
  return (
    <div
      className={classNames(styles.status, { [styles.finished]: type === '1' })}
    >
      {STATUS_VALUES.get(type)}
    </div>
  );
}

export default Status;
