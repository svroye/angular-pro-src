import { API_TOKEN } from './token';
import { Injectable, Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FoodService {
  
  constructor( private http: HttpClient, @Inject(API_TOKEN) private api: string) {}
  
  getFood(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

}