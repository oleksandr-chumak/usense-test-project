export class PasswordValidatorMethods{
  static isEmpty(password: string): boolean {
    return password.length === 0;
  }

  static isLessThanEightSymbols(password: string): boolean {
    return password.length <= 8 && password.length !== 0;
  }

  static isEasy(password: string): boolean {
    const regExp: RegExp = /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\|-]*$/;
    return regExp.test(password) && password.length >= 8;
  }

  static isMedium(password: string): boolean {
    const regExp: RegExp =
      /^(?=.*[a-zA-Z!@#$%^&*()_+{}[\]:;<>,.?~\\|-])(?=.*[0-9!@#$%^&*()_+{}[\]:;<>,.?~\\|-])[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\|-]*$/;
    return regExp.test(password) && password.length >= 8;
  }

  static isStrong(password: string): boolean {
    const regExp: RegExp =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\|-])[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\|-]*$/;
    return regExp.test(password) && password.length >= 8;
  }
}
