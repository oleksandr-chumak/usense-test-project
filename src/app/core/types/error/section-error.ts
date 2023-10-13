import { ERROR_COLOR } from './error-color';
import {ErrorStatus, ErrorStatusWithoutInvalid} from "./error-status";

export interface SectionValue {
  name: SectionName;
  text: string;
  color: ERROR_COLOR;
}

export interface ErrorValidator {
  type: ErrorStatusWithoutInvalid,
  validator: (value:string) => boolean
}

export type SectionName = 'easy' | 'medium' | 'strong';
