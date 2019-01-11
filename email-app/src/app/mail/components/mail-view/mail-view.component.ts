import { ActivatedRoute } from '@angular/router';
import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { Mail } from '../../models/mail.interface';
import { pluck } from 'rxjs/operators';


@Component({
    selector: 'mail-view',
    styleUrls: ['mail-view.component.scss'],
    template: `
        <div class="mail-view">
        <h2></h2>
        <p> {{ (message | async).from }}</p>
            {{ (message | async).summary }}
        </div>
    `
})
export class MailViewComponent {

    message: Observable<Mail> = this.route.data.pipe(pluck('message'));

    constructor(private route: ActivatedRoute){}
}