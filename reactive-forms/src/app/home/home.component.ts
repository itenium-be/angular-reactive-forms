import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Exercises</h1>

    <ul>
      <li><a routerLink="/template">0-Template-Driven Forms</a></li>
      <li><a routerLink="/basic">1-Basics</a></li>
      <li><a routerLink="/form-builder">2-Form Builder</a></li>
    </ul>
  `,
})
export class HomeComponent {}
