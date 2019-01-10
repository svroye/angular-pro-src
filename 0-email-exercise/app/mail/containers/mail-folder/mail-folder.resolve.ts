import { MailService } from '../../mail.service';
import { Injectable } from '@angular/core';
import { Mail } from '../../models/mail.interface';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class MailFolderResolve implements Resolve<Mail[]> {
    
    constructor(private mailService: MailService){
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.mailService.getFolder(route.params.name);
    }
}