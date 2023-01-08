import { Component } from '@angular/core';

type Hero = {
  name: string;
  alterEgo: string;
  power: string;
};


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
})
export class TemplateComponent {
  model: Hero = { name: '', alterEgo: '', power: '' };

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
}
