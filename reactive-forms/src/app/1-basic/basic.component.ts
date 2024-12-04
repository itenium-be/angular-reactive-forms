import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, Observable, Subscription } from 'rxjs';
import validateInss from './validate-insz';


type Basic = {
  name: FormControl<string>;
  inss?: FormControl<string | null>;
  birthDate?: FormControl<Date | null>;
};


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  standalone: false
})
export class BasicComponent implements OnInit, OnDestroy {
  search = new FormControl<string>('');
  search$: Observable<string>;

  frm: FormGroup<Basic>;
  sub?: Subscription;

  constructor() {
    // Use the FormControl.valueChanges Observable:
    const format = (dt: Date) => `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}.${dt.getMilliseconds()}`;
    this.search$ = this.search.valueChanges.pipe(
      map(needle => (needle ?? '').trim().toLowerCase()),
      debounceTime(800),
      distinctUntilChanged((prev: any, cur: any) => prev === cur),
      map(needle => `Searching for '${needle}' on ${format(new Date())}`),
    );



    this.frm = new FormGroup<Basic>({
      name: new FormControl('', { nonNullable: true }), // nonNullable for frm.reset()
      inss: new FormControl(''),
      birthDate: new FormControl({ value: null, disabled: true }), // .enable() / disable()
    });

    // Migrating to Angular 14?
    // this.frm = new UntypedFormGroup({});

    // Also see styles.scss
    // onlySelf: true -> do not mark parent component
    // State changes: markAsDirty({ onlySelf?: boolean }), markAsPristine(), markAllAsTouched(), ...
  }


  ngOnInit(): void {
    this.sub = this.frm.get('inss')!.valueChanges.pipe(
      map(inss => (inss ?? '').trim().replace(/-|\./g, '')),
      filter(validateInss),
    ).subscribe((inss: string) => {
      const year = 1900 + parseInt(inss.substring(0, 2), 10);
      const month = parseInt(inss.substring(2, 4), 10);
      const day = parseInt(inss.substring(4, 6), 10);
      const birthDate = new Date(`${year}-${month}-${day}`);

      this.frm.get('birthDate')?.setValue(birthDate, { emitEvent: true });
      // setValue vs patchValue(val, { onlySelf?: boolean; emitEvent?: boolean; })
      // this.frm.updateValueAndValidity({ onlySelf?: boolean; emitEvent?: boolean; });
    });
  }

  submit(): void {
    console.log('frm.value', this.frm.value);
    console.log('frm.getRawValue()', this.frm.getRawValue());
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
