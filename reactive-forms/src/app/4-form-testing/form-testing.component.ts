import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { getFormValidationErrors, ValidationResult } from 'src/models/helpers';
import { Countries } from '../../models/data';
import { createForm } from './form-factory';


@Component({
  selector: 'app-form-testing',
  templateUrl: './form-testing.component.html',
})
export class FormTestingComponent implements OnDestroy {
  Countries = Countries;

  frm: FormGroup;
  subs: Subscription[] = [];

  constructor(fb: FormBuilder) {
    const context = { fb, subs: this.subs };
    this.frm = createForm(context);
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
