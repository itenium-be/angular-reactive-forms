import { Language, LanguageService } from './../5-ControlValueAccessor/LanguageService';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  langFrm = new FormGroup({
    language: new FormControl(''),
  });

  constructor(langService: LanguageService) {
    this.langFrm.get('language')!.valueChanges.subscribe(lang => langService.lang$.next(lang as Language));
  }
}
