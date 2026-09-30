'use client';

import { createContext, PropsWithChildren, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { MapProvider } from 'react-map-gl/maplibre';
import { GROUPED_OPERATORS } from './constants/operators';

interface TrainsMapContext {
  selectedOperatorIds: string[];
  setSelectedOperatorIds: (operatorIds: string[]) => void;
  clearSelectedOperators: () => void;
  showOperatorColours: boolean;
  setShowOperatorColours: (value: boolean) => void;
}

export const trainsMapContext = createContext<TrainsMapContext>({
  selectedOperatorIds: [],
  setSelectedOperatorIds: () => {},
  clearSelectedOperators: () => {},
  showOperatorColours: false,
  setShowOperatorColours: () => {},
});

const ALL_OPERATOR_IDS = GROUPED_OPERATORS.flatMap(
  (group) => group.operators,
).map((operator) => operator.id);

export const TrainsMapContextProvider = ({ children }: PropsWithChildren) => {
  const queryParams = useSearchParams();

  const initialOperatorId = queryParams.get('operator');

  const [selectedOperatorIds, setSelectedOperatorIds] = useState<string[]>(
    initialOperatorId ? [initialOperatorId] : ALL_OPERATOR_IDS,
  );

  const clearSelectedOperators = () => {
    setSelectedOperatorIds(ALL_OPERATOR_IDS);
  };

  const [showOperatorColours, setShowOperatorColours] = useState(
    selectedOperatorIds.length > 0,
  );

  return (
    <trainsMapContext.Provider
      value={{
        selectedOperatorIds,
        setSelectedOperatorIds,
        clearSelectedOperators,
        showOperatorColours,
        setShowOperatorColours,
      }}>
      <MapProvider>{children}</MapProvider>
    </trainsMapContext.Provider>
  );
};
