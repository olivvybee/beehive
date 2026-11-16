'use client';

import { useContext } from 'react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { FaLink } from 'react-icons/fa';

import { ALL_OPERATORS, Operator } from '../constants/operators';
import { trainsMapContext } from '../TrainsMapContext';

import styles from './Key.module.css';

interface KeyProps {
  visibleOperators: Operator[];
}

export const Key = ({ visibleOperators }: KeyProps) => {
  const {
    selectedOperatorIds,
    setSelectedOperatorIds,
    clearSelectedOperators,
    showOperatorColours,
    setShowOperatorColours,
  } = useContext(trainsMapContext);

  const onClickOperator = (operator: Operator) => {
    const isSelected = selectedOperatorIds.includes(operator.id);

    // If the operator is currently the only one selected, clear the selection.
    // Otherwise make it the only selection.
    if (selectedOperatorIds.length === 1 && isSelected) {
      clearSelectedOperators();
    } else {
      setSelectedOperatorIds([operator.id]);
    }
  };

  return (
    <div className={styles.key}>
      <h3 className={styles.heading}>Operators & lines</h3>

      <div className={styles.controls}>
        <button
          onClick={clearSelectedOperators}
          className={classNames(styles.button, styles.resetButton)}>
          Reset filters
        </button>

        <div
          className={classNames(styles.operatorsCheckbox, styles.checkboxItem)}>
          <input
            id="show-operators"
            type="checkbox"
            checked={showOperatorColours}
            onChange={(e) => setShowOperatorColours(e.target.checked)}
          />
          <label htmlFor="show-operators">Show colours on map</label>
        </div>
      </div>

      <ul className={styles.grid}>
        {visibleOperators.map((operator) => (
          <OperatorsKeyItem
            key={operator.id}
            operator={operator}
            isDimmed={!selectedOperatorIds.includes(operator.id)}
            onClick={() => onClickOperator(operator)}
          />
        ))}
      </ul>

      <p className={styles.helperText}>
        Click an operator to select, and click again to deselect. Only selected
        operators will appear on the map. Copy the permalink url (
        <span className={styles.permalink}>
          <FaLink />
        </span>
        ) to link to a filter for the specific operator.
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
