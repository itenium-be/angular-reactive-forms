import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Colors } from '../3b-complex-form-array/stock.service';

@Component({
  selector: 'app-form-array-easy',
  templateUrl: './form-array-easy.component.html',
})
export class FormArrayEasyComponent {
  Colors = Colors;

  frm: FormGroup;

  constructor(fb: FormBuilder) {
    this.frm = fb.group({
      socksId: 15,
      colors: fb.array(['Red', 'Green', 'Blue']),
    });
  }

  get colorsArray(): FormArray {
    return this.frm.get('colors') as FormArray;
  }
}
