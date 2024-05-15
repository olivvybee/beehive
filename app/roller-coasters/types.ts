export interface Coaster {
  name: string;
  ridden: boolean;
  previousNames: string[];
  status: string;
  openDate: string;
  closeDate?: string;
  location: {
    lat: number;
    lng: number;
  };
  link: string;
}

export interface Park {
  id: string;
  name: string;
}

export interface ParkCoasters {
  park: Park;
  coasters: Coaster[];
}
