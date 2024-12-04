import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Subscription } from 'rxjs';
import { isValidInss } from '../2-form-builder/InssValidator';
import { CountryType } from '../../models/data';

export type FormContext = {
  fb: FormBuilder;
  subs: Subscription[];
}

type Correspondence = 'Email' | 'Post';

export type PersonInfo = {
  name: FormControl<string>;
  inss: FormControl<string>;
  eula: FormControl<boolean>;
  birthDate: FormControl<Date | null>;
  country: FormControl<CountryType>;
  address: FormGroup<{
    street: FormControl<string>;
    city: FormControl<string>;
  }>;
  business: FormGroup<{
    active: FormControl<boolean>;
    name: FormControl<string>;
    tax: FormControl<string>;
    correspondence: FormControl<Correspondence>;
  }>;
}

export function createForm(context: FormContext, userId: string | 'new-user'): FormGroup<PersonInfo> {
  // Create form
  const frm: FormGroup<PersonInfo> = context.fb.nonNullable.group({
    name: ['', Validators.required],
    inss: ['', {
      validators: [Validators.minLength(11), Validators.maxLength(15), isValidInss()],
      updateOn: 'change'
    }],
    eula: [false, Validators.requiredTrue],
    birthDate: new FormControl<Date | null>({ value: null, disabled: true }, Validators.required),
    country: '' as CountryType,
    address: context.fb.nonNullable.group({
      street: '',
      city: ''
    }),
    business: context.fb.nonNullable.group({
      active: false,
      name: '',
      tax: '',
      correspondence: 'Email' as Correspondence
    }),
  });


  // Add all behavior
  const sub = frm.get('inss')!.valueChanges.pipe(
    map(inss => (inss ?? '').trim().replace(/-|\./g, ''))
  )
  .subscribe(inss => {
    const year = 1900 + parseInt(inss.substring(0, 2), 10);
    const month = parseInt(inss.substring(2, 4), 10);
    const day = parseInt(inss.substring(4, 6), 10);
    const birthDate = new Date(`${year}-${month}-${day}`);

    frm.get('birthDate')?.setValue(birthDate, { emitEvent: true });
  });

  context.subs.push(sub);

  return frm;
}
