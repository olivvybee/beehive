'use client';

import { createContext, PropsWithChildren, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { MapProvider } from 'react-map-gl/maplibre';

import { Operator, ALL_OPERATORS } from './constants/operators';

interface TrainsMapContext {
  selectedOperator?: Operator;
  setSelectedOperator: (operator: Operator | undefined) => void;
}

export const trainsMapContext = createContext<TrainsMapContext>({
  selectedOperator: undefined,
  setSelectedOperator: () => {},
});

export const TrainsMapContextProvider = ({ children }: PropsWithChildren) => {
  const queryParams = useSearchParams();

  const initialOperatorId = queryParams.get('operator');
  const initialOperator = ALL_OPERATORS.find(
    (operator) => operator.id === initialOperatorId
  );

  const [selectedOperator, setSelectedOperator] = useState<
    Operator | undefined
  >(initialOperator);

  return (
    <trainsMapContext.Provider
      value={{ selectedOperator, setSelectedOperator }}>
      <MapProvider>{children}</MapProvider>
    </trainsMapContext.Provider>
  );
};
