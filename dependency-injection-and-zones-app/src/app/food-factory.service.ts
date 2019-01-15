import { API_TOKEN } from './token';
import { Injectable, Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FoodFactoryService {
  
  // To use this service, we need to adapt the component a little bit.
  // First of all, the providers array on the component level will be
  // providers: [ { provide: FoodFactoryService, useFactory: DrinkFactory,
  //              deps: [ HttpClient ] }]
  // where DrinkFactory is: export function DrinkFactory(http) {
  //      return new FoodFactoryService(http, '/api/drinks'); }
  // In the component's constructor, you inject this service 
  // and use it as a any other service. Similar for the other components

  constructor( private http: HttpClient, private api: string) {
    console.log(this.api);
  }

  getFood(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }
 
}