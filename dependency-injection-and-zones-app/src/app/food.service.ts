import { Injectable, Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FoodService {
  
  api = '/api/pizzas'
  constructor( private http: HttpClient) {}
  
  getFood(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }
}