import { ErrorStatus } from './error-status';
import { SectionName } from './section-error';

export enum ERROR_COLOR {
  INACTIVE = 'grey',
  WARNING = 'yellow',
  INVALID = 'red',
  VALID = 'green',
}

export type BaseSectionColor = Record<
  Exclude<ErrorStatus, 'medium' | 'easy'>,
  ERROR_COLOR
>;

export type SectionColor = Record<ErrorStatus, ERROR_COLOR>;

export type SectionsColors = Record<SectionName, SectionColor>;
