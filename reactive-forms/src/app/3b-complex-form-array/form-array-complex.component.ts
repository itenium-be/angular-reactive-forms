import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Colors, ColorsType } from './stock.service';

type ItemType = {
  amount: FormControl<number | null>;
  color: FormControl<ColorsType | null>;
}

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array-complex.component.html',
  standalone: false
})
export class FormArrayComplexComponent {
  Colors = Colors;

  frm: FormGroup<{
    socksId: FormControl<number>;
    items: FormArray<FormGroup<ItemType>>;
  }>;

  constructor(private fb: FormBuilder) {
    this.frm = fb.nonNullable.group({
      socksId: 15,
      items: fb.nonNullable.array([
        fb.group({ amount: 5, color: 'Red' as ColorsType }),
        // new FormGroup<ItemType>({
        //   amount: new FormControl(5),
        //   color: new FormControl('Red')
        // })
      ]),
    });
  }

  get items() {
    return this.frm.controls.items;
  }

  add(): void {
    this.items.push(this.fb.group({ amount: null as number | null, color: null as ColorsType | null }));
  }

  deleteItem(index: number): void {
    this.items.removeAt(index);
  }
}
