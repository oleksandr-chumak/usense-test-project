import { SectionValue, ERROR_COLOR} from '../types';

export const INITIAL_SECTIONS_VALUE: SectionValue[] = [
  {
    name: 'easy',
    text: 'The password is easy',
    color: ERROR_COLOR.INACTIVE,
  },
  {
    name: 'medium',
    text: 'The password is medium',
    color: ERROR_COLOR.INACTIVE,
  },
  {
    name: 'strong',
    text: 'The password is strong',
    color: ERROR_COLOR.INACTIVE,
  },
];
