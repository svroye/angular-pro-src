import { Component } from '@angular/core';

@Component({
  selector: 'mail-app',
  styleUrls: ['mail-app.component.scss'],
  template: `
    <div class="mail">
    <!--<h1>Activated parent</h1> -->
      <router-outlet (activate)="onActivate($event)" (deactivate)="onDeactivate($event)"></router-outlet>
    </div>
    <div class="mail">
      <router-outlet name="pane"></router-outlet>
    </div>
  `
})
export class MailAppComponent {

  onActivate(event) {
    console.log("Activate: ", event);
  }

  onDeactivate(event) {
    console.log("Deactivate: ", event);
  }
}