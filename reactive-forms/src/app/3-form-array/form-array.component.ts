import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Colors } from './stock.service';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
})
export class FormArrayComponent {
  Colors = Colors;

  frm: FormGroup;
  easyArray: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frm = fb.group({
      socksId: 15,
      items: fb.array([fb.group({ amount: 5, color: 'Red' })]),
    });


    this.easyArray = fb.group({
      socksId: 15,
      colors: fb.array(['Red', 'Green', 'Blue']),
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


  get colorsArray(): FormArray {
    return this.easyArray.get('colors') as FormArray;
  }
}
