'use client';

import { useState } from 'react';

import { Coaster } from '../../types';
import styles from './Editor.module.css';
import {
  IoCheckmarkCircle,
  IoCloseCircle,
  IoRemoveCircle,
} from 'react-icons/io5';
import classNames from 'classnames';
import { Result, saveChanges } from './saveChanges';

interface EditorProps {
  coasters: Coaster[];
}

export const Editor = ({ coasters }: EditorProps) => {
  const previouslyRiddenCoasters = coasters
    .filter((coaster) => coaster.ridden)
    .map((coaster) => coaster.id);

  const [selectedCoasters, setSelectedCoasters] = useState<number[]>(
    previouslyRiddenCoasters
  );

  const toggleSelection = (coasterId: number) => {
    if (selectedCoasters.includes(coasterId)) {
      const newCoasters = selectedCoasters.filter((id) => id !== coasterId);
      setSelectedCoasters(newCoasters);
    } else {
      const newCoasters = [...selectedCoasters, coasterId];
      setSelectedCoasters(newCoasters);
    }
  };

  const [apiKey, setApiKey] = useState<string>('');
  const [includeDate, setIncludeDate] = useState(true);
  const [result, setResult] = useState<Result>();

  const onSave = async () => {
    const newlyRidden = selectedCoasters.filter(
      (id) => !previouslyRiddenCoasters.includes(id)
    );
    const result = await saveChanges(newlyRidden, includeDate, apiKey);
    setResult(result);
  };

  return (
    <div>
      <ul className={styles.coasterList}>
        {coasters.map((coaster) => {
          const selected = selectedCoasters.includes(coaster.id);

          return (
            <li key={coaster.id} className={styles.coasterListItem}>
              <button
                type="button"
                onClick={() => toggleSelection(coaster.id)}
                className={classNames(styles.button, styles.coasterListButton, {
                  [styles.selected]: selected,
                })}>
                <div className={styles.checkmarkContainer}>
                  {selected && (
                    <IoCheckmarkCircle className={styles.checkmark} />
                  )}
                </div>

                {coaster.name}
              </button>
            </li>
          );
        })}
      </ul>

      <hr />

      <div className={styles.inputs}>
        <div
          className={classNames(styles.inputItem, styles.dateCheckboxSection)}>
          <input
            id="dateCheckbox"
            type="checkbox"
            checked={includeDate}
            onChange={(e) => setIncludeDate(e.target.checked)}
          />
          <label htmlFor="dateCheckbox">Save date ridden</label>
        </div>

        <div className={classNames(styles.inputItem, styles.apiKeySection)}>
          <label htmlFor="apiKey">Secret code</label>
          <input
            id="apiKey"
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className={styles.apiKeyField}
          />
        </div>
      </div>

      <hr />

      {result && (
        <div
          className={classNames(styles.result, {
            [styles.success]: !result.error,
            [styles.error]: result.error,
          })}>
          {result.error ? <IoCloseCircle /> : <IoCheckmarkCircle />}
          {result.error ? `Error: ${result.error}` : 'Saved successfully!'}
        </div>
      )}

      <button
        onClick={onSave}
        className={classNames(styles.button, styles.saveButton)}>
        Save
      </button>
    </div>
  );
};
