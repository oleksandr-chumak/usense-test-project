import {ErrorStatus, ErrorStatusWithoutInvalid, ErrorValidator} from "../../core";
import {PasswordValidatorMethods} from "./password-validator-methods";
import {Injectable} from "@angular/core";

const passwordValidators:ErrorValidator[] = [
  {
    type: 'empty',
    validator: PasswordValidatorMethods.isEmpty
  },
  {
    type: 'lessThanEightSymbols',
    validator: PasswordValidatorMethods.isLessThanEightSymbols
  },
  {
    type: 'easy',
    validator: PasswordValidatorMethods.isEasy
  },
  {
    type: 'medium',
    validator: PasswordValidatorMethods.isMedium
  },
  {
    type: 'strong',
    validator: PasswordValidatorMethods.isStrong
  },
]

@Injectable({
  providedIn: 'root'
})
export class PasswordValidator {
  validate(password: string): ErrorStatus {
    let lastValidValue: ErrorStatus = 'invalid';

    for (let i = passwordValidators.length - 1; i >= 0; i--){
      const {type,validator} = passwordValidators[i];
      const status: boolean = validator(password);
      if(status){
        lastValidValue = type as ErrorStatusWithoutInvalid;
        break;
      }
    }

    return lastValidValue;
  }
}
