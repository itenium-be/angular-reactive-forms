import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Language } from './LanguageService';

@Component({
  selector: 'app-language-select',
  template: `
    <select class="form-select" [(ngModel)]="value">
      <option value="">Language</option>
      <option *ngFor="let lang of Languages" [value]="lang">{{ lang }}</option>
    </select>
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LanguageSelectComponent),
    multi: true,
  }],
})
export class LanguageSelectComponent implements ControlValueAccessor {
  Languages = Object.values(Language);

  onChange: any = () => {};
  onTouch: any = () => {};
  val = '';

  get value() {
    return this.val;
  }
  set value(val: any) {
    if (val !== undefined && this.val !== val) {
      this.val = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
