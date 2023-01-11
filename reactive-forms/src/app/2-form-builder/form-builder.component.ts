import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Subscription } from 'rxjs';
import { getFormValidationErrors, ValidationResult } from 'src/models/helpers';
import { Countries } from '../../models/data';
import { isValidInss } from './InssValidator';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
})
export class FormBuilderComponent implements OnInit, OnDestroy {
  Countries = Countries;

  frm: FormGroup;
  subs: Subscription[] = [];

  constructor(fb: FormBuilder) {
    // Validators.email, min/max, pattern
    this.frm = fb.group({
      name: ['', Validators.required],
      inss: ['', {
        validators: [Validators.minLength(11), Validators.maxLength(15), isValidInss()],
        asyncValidators: null,
        updateOn: 'change' // change / blur / submit
      }],
      eula: [false, Validators.requiredTrue],
      birthDate: [{ value: null, disabled: true }, Validators.required, /* AsyncValidators */],
      country: '',
      address: fb.group({
        street: '',
        city: ''
      }/*, {validators, asyncValidators, updateOn}*/),
      business: fb.group({
        active: false,
        name: '',
        tax: '',
        correspondence: 'Email'
      }),
    });

    // Entire non-nullable group:
    // const login = fb.nonNullable.group({ email: '', password: '', });

    // Validator example: InssValidator
    // AsyncValidator example: EmailValidator
    // Methods: addValidator, addAsyncValidator, removeValidator, setValidators, hasValidator, clearValidators, ...
    // Error: hasError, setErrors, getError --> To avoid: use validators instead!
  }

  ngOnInit(): void {
    const sub = this.frm.get('inss')!.valueChanges.pipe(
      map(inss => (inss ?? '').trim().replace(/-|\./g, ''))
    )
    .subscribe((inss: string) => {
      const year = 1900 + parseInt(inss.substring(0, 2), 10);
      const month = parseInt(inss.substring(2, 4), 10) - 1;
      const day = parseInt(inss.substring(4, 6), 10);
      const birthDate = `${year}-${month}-${day}`;

      this.frm.get('birthDate')?.setValue(birthDate, { emitEvent: true });
    });

    this.subs.push(sub);
  }

  submit(): void {
    console.log('frm.value', this.frm.value);
    console.log('frm.getRawValue()', this.frm.getRawValue());
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  getFormValidationErrors(): ValidationResult[] {
    return getFormValidationErrors(this.frm);
  }
}
