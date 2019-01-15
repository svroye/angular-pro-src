import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FoodUseExistingService {
  
  // Use this service by adding it in the providers array of the component.
  // Then, create an abstract class, with method name(s) the ones from this
  // service class that are only used for that component.
  // export abstract class PizzaService {
  //      getPizzas: () => Observable<Pizza[]>;
  //  }
  // In the providers array of the component, specify this service, as well as
  // the abstract class as followed: providers: [ FoodUseExistingService,
  //  { provide: PizzaService, useExisting: FoodUseExistingService }]
  // In the constructor, you specify the type of the service as the name of 
  // the abstract class. This will restrict you to only use the methods
  // from the abstract class.


  constructor(private http: HttpClient){}

  getPizzas(): Observable<any[]> {
    return this.http.get<any[]>('/api/pizzas');
  }

  getSides(): Observable<any[]> {
    return this.http.get<any[]>('/api/sides');
  }

  getDrinks(): Observable<any[]> {
    return this.http.get<any[]>('/api/drinks');
  }

 
}