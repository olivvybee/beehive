export interface Operator {
  id: string;
  name: string;
  colour: string;
}

export const OPERATORS: Operator[] = [
  { id: 'bluebell', name: 'Bluebell Railway', colour: 'rgb(155, 177, 235)' },
  { id: 'dlr', name: 'DLR', colour: 'rgb(77, 169, 167)' },
  { id: 'edi-trams', name: 'Edinburgh Trams', colour: 'rgb(128, 35, 27)' },
  { id: 'elizabeth', name: 'Elizabeth Line', colour: 'rgb(105, 80, 161)' },
  { id: 'lner', name: 'LNER', colour: 'rgb(189, 44, 52)' },
  { id: 'northern', name: 'Northern', colour: 'rgb(64, 59, 163)' },
  { id: 'overground', name: 'London Overground', colour: 'rgb(246, 128, 39)' },
  { id: 'renfe', name: 'Renfe', colour: 'rgb(118, 21, 91)' },
  { id: 'rhdr', name: 'RH&DR', colour: 'rgb(91, 130, 62)' },
  { id: 'southern', name: 'Southern', colour: 'rgb(56, 120, 95)' },
  { id: 'thameslink', name: 'Thameslink', colour: 'rgb(207, 49, 131)' },
];

export const OTHER_OPERATOR: Operator = {
  id: 'xxx',
  name: 'Other',
  colour: 'rgb(255, 255, 255)',
};