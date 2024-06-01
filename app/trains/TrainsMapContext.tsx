'use client';

import { createContext, PropsWithChildren, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { MapProvider } from 'react-map-gl/maplibre';

import { Operator, ALL_OPERATORS } from './constants/operators';
import { StationStatus } from './Station';

interface TrainsMapContext {
  selectedOperator?: Operator;
  setSelectedOperator: (operator: Operator | undefined) => void;
  stationsFilter?: StationStatus;
  setStationsFilter: (filter: StationStatus | undefined) => void;
}

export const trainsMapContext = createContext<TrainsMapContext>({
  selectedOperator: undefined,
  setSelectedOperator: () => {},
  stationsFilter: undefined,
  setStationsFilter: () => {},
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

  const [stationsFilter, setStationsFilter] = useState<
    StationStatus | undefined
  >(undefined);

  return (
    <trainsMapContext.Provider
      value={{
        selectedOperator,
        setSelectedOperator,
        stationsFilter,
        setStationsFilter,
      }}>
      <MapProvider>{children}</MapProvider>
    </trainsMapContext.Provider>
  );
};
