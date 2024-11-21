'use client';

import { PropsWithChildren, createContext, useState } from 'react';
import { MapProvider } from 'react-map-gl/maplibre';
import { useSearchParams } from 'next/navigation';

interface RollerCoastersMapContext {
  selectedParkId?: string;
  setSelectedParkId: (parkId: string | undefined) => void;
}

export const rollerCoastersMapContext = createContext<RollerCoastersMapContext>(
  {
    selectedParkId: undefined,
    setSelectedParkId: () => {},
  }
);

export const RollerCoastersMapContextProvider = ({
  children,
}: PropsWithChildren) => {
  const queryParams = useSearchParams();

  const initialParkId = queryParams.get('park') || undefined;

  const [selectedParkId, setSelectedParkId] = useState(initialParkId);

  return (
    <rollerCoastersMapContext.Provider
      value={{ selectedParkId, setSelectedParkId }}>
      <MapProvider>{children}</MapProvider>
    </rollerCoastersMapContext.Provider>
  );
};
