import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Colors } from '../3b-complex-form-array/stock.service';

@Component({
  selector: 'app-form-array-easy',
  templateUrl: './form-array-easy.component.html',
  standalone: false
})
export class FormArrayEasyComponent {
  Colors = Colors;

  frm: FormGroup<{
    socksId: FormControl<number>;
    colors: FormArray<FormControl<string>>;
  }>;

  constructor(fb: FormBuilder) {
    this.frm = fb.nonNullable.group({
      socksId: 15,
      colors: fb.nonNullable.array(['Red', 'Green', 'Blue']),
    });
  }
}
