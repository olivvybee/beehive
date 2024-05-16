'use client';

import { PropsWithChildren, createContext, useState } from 'react';
import { MapProvider } from 'react-map-gl/maplibre';
import { Park, ParkCoasters } from './types';
import { useSearchParams } from 'next/navigation';
import { GROUPED_PARKS } from './constants/parks';

interface RollerCoastersMapContext {
  selectedPark?: Park;
  setSelectedPark: (park: Park | undefined) => void;
}

export const rollerCoastersMapContext = createContext<RollerCoastersMapContext>(
  {
    selectedPark: undefined,
    setSelectedPark: () => {},
  }
);

export const RollerCoastersMapContextProvider = ({
  children,
}: PropsWithChildren) => {
  const queryParams = useSearchParams();

  const initialParkId = queryParams.get('park');
  const initialPark = GROUPED_PARKS.find((park) => park.id === initialParkId);

  const [selectedPark, setSelectedPark] = useState<Park | undefined>(
    initialPark
  );

  return (
    <rollerCoastersMapContext.Provider
      value={{ selectedPark, setSelectedPark }}>
      <MapProvider>{children}</MapProvider>
    </rollerCoastersMapContext.Provider>
  );
};
