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
        <div class="mail-reply">
        <textarea
            (change)="updateReply($event.target.value)"
            placeholder="Type your reply..."
            [value]="reply">
        </textarea>
        <button type="button" (click)="sendReply()">
            Send
        </button>
    </div>
    `
})
export class MailViewComponent {

    reply: string = '';
    message: Observable<Mail> = this.route.data.pipe(pluck('message'));

    constructor(private route: ActivatedRoute){}

    updateReply(reply: string){
        this.reply = reply;
    }

    sendReply(){
        console.log("Message sent!");
        console.log(this.reply);
    }
}