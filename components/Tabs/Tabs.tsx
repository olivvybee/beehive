'use client';

import { useMemo, useState } from 'react';

import styles from './Tabs.module.css';
import classNames from 'classnames';

interface TabItem {
  id: string;
  name: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
}

export const Tabs = ({ tabs: items }: TabsProps) => {
  if (!items.length) {
    return null;
  }

  const [selectedTabId, setSelectedTabId] = useState(items[0].id);
  const selectedTab = items.find((item) => item.id === selectedTabId);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabBar}>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedTabId(item.id)}
            role="tab"
            aria-controls={`${item.id}-tab-panel`}
            aria-selected={item.id === selectedTabId}
            id={`${item.id}-tab-button`}
            className={classNames(styles.tab, {
              [styles.active]: item.id === selectedTabId,
            })}>
            {item.name}
          </button>
        ))}
      </div>

      <div
        className={styles.tabPanel}
        id={`${selectedTabId}-tab-panel`}
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={`${selectedTabId}-tab-button`}>
        {selectedTab?.content}
      </div>
    </div>
  );
};
