import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Exercises</h1>

    <ul>
      <li><a routerLink="/template">0-Template-Driven Forms</a></li>
      <li><a routerLink="/basic">1-Basics</a></li>
      <li><a routerLink="/form-builder">2-Form Builder</a></li>
      <li><a routerLink="/form-array-easy">3-Form Array : Easy</a></li>
      <li><a routerLink="/form-array-complex">3-Form Array : Complex</a></li>
      <li><a routerLink="/form-testing/new-user">4-Form Testing</a></li>
      <li>5-ControlValueAccessor: See LanguegSelect</li>
    </ul>
  `,
})
export class HomeComponent {}
