import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";


export type ValidationResult = {
  prop: string;
  errors: ValidationErrors;
}


function appendPath(path: string, prop: string): string {
  if (!path)
    return prop;

  return `${path}.${prop}`;
}


export function getFormValidationErrors(form: FormGroup | FormArray, path = ''): ValidationResult[] {
  const result: ValidationResult[] = [];

  if (form.errors && path === '') {
    result.push({ prop: '', errors: form.errors });
  }

  Object.keys(form.controls).forEach((prop: string) => {
    const errors = form.get(prop)?.errors;

    if (errors) {
      result.push({ prop: appendPath(path, prop), errors });
    }

    if (form.get(prop) instanceof FormGroup) {
      const subErrors = getFormValidationErrors(form.get(prop) as FormGroup, appendPath(path, prop));
      result.push(...subErrors)
    }

    if (form.get(prop) instanceof FormArray) {
      const subErrors = getFormValidationErrors(form.get(prop) as FormArray, appendPath(path, prop));
      result.push(...subErrors);
    }
  });

  return result;
}
