export type ErrorStatusWithoutInvalid =
  | 'empty'
  | 'lessThanEightSymbols'
  | 'easy'
  | 'medium'
  | 'strong';

export type ErrorStatus = ErrorStatusWithoutInvalid | 'invalid';
