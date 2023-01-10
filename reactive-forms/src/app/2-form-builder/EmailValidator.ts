import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { map, of } from 'rxjs';

export function userExistsValidator(): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return of(control.value).pipe(map(user => user ? { userExists: true } : null));
  };
}
