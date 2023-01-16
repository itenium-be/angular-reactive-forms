import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Colors } from './stock.service';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array-complex.component.html',
})
export class FormArrayComplexComponent {
  Colors = Colors;

  frm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frm = fb.group({
      socksId: 15,
      items: fb.array([
        fb.group({ amount: 5, color: 'Red' })
      ]),
    });
  }

  get items(): FormArray {
    return this.frm.get('items') as FormArray;
  }

  getControls(): FormGroup[] {
    return this.items.controls.map(ctl => ctl as FormGroup);
  }

  add(): void {
    this.items.push(this.fb.group({ amount: null, color: '' }));
  }

  deleteItem(index: number): void {
    this.items.removeAt(index);
  }
}
