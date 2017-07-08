import { Component, Input } from '@angular/core';
import { UserCardModel } from './user-card.model';

@Component({
  selector: 'sample-component',
  template: `
  <h1>Sample component</h1>
  <div>{{userCard.title1}}</div>
  <div>{{userCard.title2}}</div>
  `
})
export class SampleComponent {
  @Input() userCard: UserCardModel;

  constructor() {
  }

}
