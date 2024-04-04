'use client';

import { createContext, PropsWithChildren, useState } from 'react';
import { MapProvider } from 'react-map-gl/maplibre';

import { Operator } from './operators';

interface TrainsMapContext {
  selectedOperator?: Operator;
  setSelectedOperator: (operator: Operator | undefined) => void;
}

export const trainsMapContext = createContext<TrainsMapContext>({
  selectedOperator: undefined,
  setSelectedOperator: () => {},
});

export const TrainsMapContextProvider = ({ children }: PropsWithChildren) => {
  const [selectedOperator, setSelectedOperator] = useState<Operator>();

  return (
    <trainsMapContext.Provider
      value={{ selectedOperator, setSelectedOperator }}>
      <MapProvider>{children}</MapProvider>
    </trainsMapContext.Provider>
  );
};
