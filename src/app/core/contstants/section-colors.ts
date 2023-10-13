import {
  BaseSectionColor,
  ERROR_COLOR,
  SectionColor,
  SectionsColors,
} from '../types';

const baseColors: BaseSectionColor = {
  empty: ERROR_COLOR.INACTIVE,
  lessThanEightSymbols: ERROR_COLOR.INVALID,
  strong: ERROR_COLOR.VALID,
  invalid: ERROR_COLOR.INVALID,
};

const easyPasswordSectionColor: SectionColor = {
  ...baseColors,
  easy: ERROR_COLOR.INVALID,
  medium: ERROR_COLOR.WARNING,
};

const mediumPasswordSectionColor: SectionColor = {
  ...baseColors,
  easy: ERROR_COLOR.INACTIVE,
  medium: ERROR_COLOR.WARNING,
};

const strongPasswordSectionColor: SectionColor = {
  ...baseColors,
  easy: ERROR_COLOR.INACTIVE,
  medium: ERROR_COLOR.INACTIVE,
};

export const PASSWORD_SECTION_COLORS: SectionsColors = {
  easy: easyPasswordSectionColor,
  medium: mediumPasswordSectionColor,
  strong: strongPasswordSectionColor,
};
