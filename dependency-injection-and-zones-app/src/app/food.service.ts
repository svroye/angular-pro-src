import { API_TOKEN } from './token';
import { Injectable, Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FoodService {
  
  // used when injecting the API string with a Token
  // constructor( private http: HttpClient, @Inject(API_TOKEN) private api: string) {
  // }

  // used when using the useFactory option
  constructor( private http: HttpClient, private api: string) {
    console.log(this.api);
  }
  
  getFood(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

}