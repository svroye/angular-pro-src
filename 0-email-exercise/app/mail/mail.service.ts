import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Mail } from './models/mail.interface';


@Injectable()
export class MailService {

    constructor(private http: HttpClient){}

    getFolder(folder: string): Observable<Mail[]> {
        let searchParams = {
            folder: folder 
        };
        return this.http.get<Mail[]>('/api/messages', { params: searchParams });
    }

    getMessage(id: string): Observable<Mail> {
        return this.http.get<Mail>(`api/messages/${id}`);
    }

}