export interface Operator {
  id: string;
  name: string;
  colour: string;
}

export interface GroupedOperators {
  name: string;
  operators: Operator[];
}

export const GROUPED_OPERATORS: GroupedOperators[] = [
  {
    name: 'UK',
    operators: [
      {
        id: 'bluebell',
        name: 'Bluebell Railway',
        colour: 'rgb(155, 177, 235)',
      },
      { id: 'edi-trams', name: 'Edinburgh Trams', colour: 'rgb(128, 35, 27)' },
      { id: 'lner', name: 'LNER', colour: 'rgb(189, 44, 52)' },
      { id: 'northern', name: 'Northern', colour: 'rgb(64, 59, 163)' },
      { id: 'rhdr', name: 'RH&DR', colour: 'rgb(91, 130, 62)' },
      { id: 'southern', name: 'Southern', colour: 'rgb(56, 120, 95)' },
      { id: 'thameslink', name: 'Thameslink', colour: 'rgb(207, 49, 131)' },
    ],
  },
  {
    name: 'London',
    operators: [
      { id: 'dlr', name: 'DLR', colour: 'rgb(77, 169, 167)' },

      { id: 'elizabeth', name: 'Elizabeth Line', colour: 'rgb(105, 80, 161)' },

      {
        id: 'overground',
        name: 'London Overground',
        colour: 'rgb(246, 128, 39)',
      },
    ],
  },
  {
    name: 'Spain',
    operators: [
      { id: 'renfe', name: 'Renfe', colour: 'rgb(118, 21, 91)' },
      { id: 'portaventura', name: 'Portaventura', colour: 'rgb(225, 111, 61)' },
      { id: 'tmb', name: 'TMB', colour: 'rgb(187, 39, 37)' },
    ],
  },
];

export const ALL_OPERATORS = GROUPED_OPERATORS.flatMap(
  (group) => group.operators
).toSorted((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

export const OTHER_OPERATOR: Operator = {
  id: 'xxx',
  name: 'Other',
  colour: 'rgb(255, 255, 255)',
};
