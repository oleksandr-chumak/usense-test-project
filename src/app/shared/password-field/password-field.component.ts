import { Component } from '@angular/core';
import {
  SectionValue,
  ErrorStatus,
  ERROR_COLOR,
  INITIAL_SECTIONS_VALUE,
  HtmlElementEvent, PASSWORD_SECTION_COLORS,
} from '../../core';
import {PasswordValidator} from "../../services/password-validator/password-validator";
@Component({
  selector: 'app-password-field',
  templateUrl: 'password-field.component.html',
  styleUrls: ['password-field.component.css'],
})
export class PasswordFieldComponent {
  errorSections: SectionValue[] = INITIAL_SECTIONS_VALUE;

  constructor(private passwordValidator:PasswordValidator) {}

  onKeyUp(event: Event): void {
    const inputEvent: HtmlElementEvent<HTMLInputElement> =
      event as HtmlElementEvent<HTMLInputElement>;
    const password: string = inputEvent.target.value;
    const status: ErrorStatus = this.passwordValidator.validate(password);

    this.errorSections = this.generateErrorSections(status);
  }

  generateErrorSections(status: ErrorStatus): SectionValue[] {
    const sectionsValue: SectionValue[] = [...INITIAL_SECTIONS_VALUE];

    for (const section of sectionsValue) {
      const color: ERROR_COLOR = PASSWORD_SECTION_COLORS[section.name][status];
      section.color = color;
    }

    return sectionsValue;
  }
}
