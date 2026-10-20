'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

export const GoatCounter = () => {
  const pathname = usePathname();
  const params = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const counter = (window as any).goatcounter;

    if (counter) {
      counter.count({
        path: pathname + params,
      });
    }
  }, [pathname, params]);

  return (
    <Script
      data-goatcounter="https://olivvybee.goatcounter.com/count"
      src="//gc.zgo.at/count.js"
      async={true}
    />
  );
};
