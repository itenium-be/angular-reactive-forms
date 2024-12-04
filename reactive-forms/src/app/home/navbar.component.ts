import { Language, LanguageService } from '../5-ControlValueAccessor/LanguageService';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: false
})
export class NavbarComponent {
  langFrm = new FormGroup({
    language: new FormControl(''),
  });

  constructor(langService: LanguageService, translate: TranslateService) {
    this.langFrm.get('language')!.valueChanges.subscribe(lang => {
      translate.use(lang as string);
      langService.lang$.next(lang as Language);
    });
  }
}
