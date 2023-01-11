import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Subscription } from 'rxjs';
import { isValidInss } from '../2-form-builder/InssValidator';

export type FormContext = {
  fb: FormBuilder;
  subs: Subscription[];
}

export function createForm(context: FormContext, userId: string | 'new-user'): FormGroup {
  // Create form
  const frm = context.fb.group({
    name: ['', Validators.required],
    inss: ['', {
      validators: [Validators.minLength(11), Validators.maxLength(15), isValidInss()],
      updateOn: 'change'
    }],
    eula: [false, Validators.requiredTrue],
    birthDate: [{ value: null, disabled: true }, Validators.required],
    country: '',
    address: context.fb.group({
      street: '',
      city: ''
    }),
    business: context.fb.group({
      active: false,
      name: '',
      tax: '',
      correspondence: 'Email'
    }),
  });


  // Add all behavior
  const sub = frm.get('inss')!.valueChanges.pipe(
    map((inss: any) => (inss ?? '').trim().replace(/-|\./g, ''))
  )
  .subscribe((inss: string) => {
    const year = 1900 + parseInt(inss.substring(0, 2), 10);
    const month = parseInt(inss.substring(2, 4), 10) - 1;
    const day = parseInt(inss.substring(4, 6), 10);
    const birthDate = `${year}-${month}-${day}`;

    const birthDateControl: FormControl = frm.get('birthDate') as FormControl;
    birthDateControl.setValue(birthDate, { emitEvent: true });
  });

  context.subs.push(sub);

  return frm;
}
