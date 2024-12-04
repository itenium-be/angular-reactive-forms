import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  standalone: false
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
