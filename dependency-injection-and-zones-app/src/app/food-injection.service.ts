import { API_TOKEN } from './token';
import { Injectable, Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FoodInjectionService {
  
  // Use this as any other service, no special configuration needed.
  // Just add it as a provider, inject it into the constructor of
  // a component and call the needed methods 

  constructor( private http: HttpClient, @Inject(API_TOKEN) private api: string) {
  }

  getFood(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

}