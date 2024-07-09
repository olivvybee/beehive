'use client';

import { ArrowContainer, Popover } from 'react-tiny-popover';

import styles from './Abbr.module.css';
import { useState } from 'react';

interface AbbrProps {
  children: React.ReactNode;
  title: string;
}

export const Abbr = ({ children, title }: AbbrProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={['bottom', 'top']}
      padding={2}
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={'var(--separator-color)'}
          arrowSize={8}
          className="popover-arrow-container"
          arrowClassName="popover-arrow">
          <div className={styles.popup}>{title}</div>
        </ArrowContainer>
      )}>
      <abbr
        aria-label={`${children} (${title})`}
        className={styles.abbr}
        tabIndex={0}
        onMouseEnter={() => setIsPopoverOpen(true)}
        onMouseLeave={() => setIsPopoverOpen(false)}
        onFocus={() => setIsPopoverOpen(true)}
        onBlur={() => setIsPopoverOpen(false)}>
        {children}
      </abbr>
    </Popover>
  );
};
