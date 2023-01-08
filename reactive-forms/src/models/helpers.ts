import { FormGroup, ValidationErrors } from "@angular/forms";


export type ValidationResult = {
  prop: string;
  errors: ValidationErrors;
}


export function getFormValidationErrors(form: FormGroup): ValidationResult[] {
  const result: ValidationResult[] = [];
  Object.keys(form.controls).forEach((prop: string) => {
    const errors = form.get(prop)?.errors;

    if (errors) {
      result.push({ prop, errors });
    }

    if (form.get(prop) instanceof FormGroup) {
      const subErrors = getFormValidationErrors(form.get(prop) as FormGroup);
      result.push(...subErrors)
    }
  });

  return result;
}
