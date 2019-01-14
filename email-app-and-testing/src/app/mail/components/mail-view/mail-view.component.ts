import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from "@angular/core";
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
export class MailViewComponent implements OnInit {

    reply: string = '';
    hasUnsavedChanges = false;
    message: Observable<Mail> = this.route.data.pipe(pluck('message'));

    constructor(private route: ActivatedRoute){}

    ngOnInit() {
        // reset the reply parameter when we navigate away
        this.route.params.subscribe( () => {
            this.reply = '';
            this.hasUnsavedChanges = false;
        });
    }

    updateReply(reply: string){
        this.reply = reply;
        this.hasUnsavedChanges = true;
    }

    sendReply(){
        console.log("Message sent!");
        this.hasUnsavedChanges = false;
    }
}