import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Subscription } from 'rxjs';
import { getFormValidationErrors, ValidationResult } from 'src/models/helpers';
import { Languages } from '../../models/data';
import { isValidInss } from './InszValidator';


type AddressModel = {
  street: string;
  city: string;
}

type BusinessModel = {
  name: string;
  tax: string;
}

type PersonModel = {
  name: string;
  inss: string;
  birthDate: Date;
  language: string;
  address: AddressModel;
  business: BusinessModel;
};


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
})
export class FormBuilderComponent implements OnInit, OnDestroy {
  Languages = Languages;

  frm: FormGroup;
  subs: Subscription[] = [];

  constructor(private fb: FormBuilder) {
    // Validators.email, min/max, pattern, requiredTrue
    this.frm = fb.group({
      name: ['', Validators.required],
      inss: ['', {
        validators: [Validators.minLength(11), Validators.maxLength(15), isValidInss()],
        updateOn: 'change' // change / blur / submit
      }],
      birthDate: [{ value: null, disabled: true }, Validators.required],
      language: '',
      address: fb.group({
        street: '',
        city: ''
      }),
      business: fb.group({
        active: false,
        name: '',
        tax: '',
      }),
    });

    // Records:
    // const addresses = new FormRecord<FormControl<string | null>>({});
    // addresses.addControl('Andrew', new FormControl('2340 Folsom St'));
    // const addresses = fb.record({'Andrew': '2340 Folsom St'});

    // Entire non-nullable group:
    // const login = fb.nonNullable.group({ email: '', password: '', });
  }

  ngOnInit(): void {
    const sub = this.frm.get('inss')!.valueChanges.pipe(
      map((inss) => (inss ?? '').trim().replace(/-|\./g, ''))
    )
    .subscribe((inss: string) => {
      const year = 1900 + parseInt(inss.substring(0, 2), 10);
      const month = parseInt(inss.substring(2, 4), 10) - 1;
      const day = parseInt(inss.substring(4, 6), 10) - 1;
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
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  getFormValidationErrors(): ValidationResult[] {
    return getFormValidationErrors(this.frm);
  }
}
