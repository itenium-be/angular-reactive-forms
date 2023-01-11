import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { map, Observable, of } from 'rxjs';

export function userExistsValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return of(control.value).pipe(map(user => user ? { userExists: true } : null));
  };
}
