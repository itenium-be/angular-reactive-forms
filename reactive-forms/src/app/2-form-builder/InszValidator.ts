import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
const validateInss = require('validate-insz');

export function isValidInss(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const inss = control.value;
    if (!inss)
      return null;

    if (validateInss(inss))
      return null;

    return { inss: true };
  };
}
