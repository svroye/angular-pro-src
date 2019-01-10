import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-item',
  styleUrls: ['mail-item.component.scss'],
  template: `
  <!-- routing from the the template -->
  <!-- <a class="mail-item"
      [routerLink]="['', { outlets: { pane: ['message', message.id] } } ]" routerLinkActive="active"> -->
    <a class="mail-item" (click)="navigateToMessage()">
      <h3>
        {{ message.from }}
        <span>{{ message.timestamp | date:'shortTime' }}</span>
      </h3>
      <p>{{ message.summary }}</p>
    </a>
  `
})
export class MailItemComponent {
  @Input()
  message: Mail;

  constructor(private router: Router){}

  navigateToMessage(){
    this.router.navigate( ['', { outlets: { pane: ['message', this.message.id] } } ])
  }

}
