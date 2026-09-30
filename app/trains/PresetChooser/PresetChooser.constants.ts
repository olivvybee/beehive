import { GROUPED_OPERATORS } from '../constants/operators';

export const TRAM_OPERATORS = GROUPED_OPERATORS.flatMap(
  (group) => group.operators,
).filter((operator) => operator.isTram);
