export enum StationStatus {
  NotVisited = 0,
  PassedThrough = 1,
  Visited = 2,
}

export interface Station {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  status: StationStatus;
}
