'use client';

import { useContext } from 'react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { FaLink } from 'react-icons/fa';

import { OPERATORS, Operator } from '../constants/operators';
import { trainsMapContext } from '../TrainsMapContext';

import styles from './OperatorKey.module.css';

export const OperatorsKey = () => {
  const { selectedOperator, setSelectedOperator } =
    useContext(trainsMapContext);

  const onClickOperator = (operator: Operator) => {
    if (selectedOperator?.id === operator.id) {
      setSelectedOperator(undefined);
    } else {
      setSelectedOperator(operator);
    }
  };

  return (
    <div className={styles.operatorsKey}>
      <h3 className={styles.heading}>Key</h3>

      <ul className={styles.grid}>
        {OPERATORS.map((operator) => (
          <OperatorsKeyItem
            key={operator.id}
            operator={operator}
            isDimmed={!!selectedOperator && operator.id !== selectedOperator.id}
            onClick={() => onClickOperator(operator)}
          />
        ))}
      </ul>

      <p className={styles.helperText}>
        Click an operator to show just that operator's routes. Click again to
        show all routes. Copy the permalink url (
        <span className={styles.permalink}>
          <FaLink />
        </span>
        ) to link to a specific operator map.
      </p>
    </div>
  );
};

interface OperatorsKeyItemProps {
  operator: Operator;
  isDimmed: boolean;
  onClick: () => void;
}

const OperatorsKeyItem = ({
  operator,
  isDimmed,
  onClick,
}: OperatorsKeyItemProps) => {
  const pathname = usePathname();

  const permalinkUrl = `${pathname}?operator=${operator.id}`;

  return (
    <li className={classNames(styles.item, { [styles.dimmed]: isDimmed })}>
      <div
        className={styles.swatch}
        style={{ backgroundColor: operator.colour }}
      />

      <button className={styles.button} onClick={onClick}>
        {operator.name}
      </button>

      <a href={permalinkUrl} className={styles.permalink}>
        <FaLink />
      </a>
    </li>
  );
};