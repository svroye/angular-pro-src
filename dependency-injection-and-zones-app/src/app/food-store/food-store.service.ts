import { map } from 'rxjs/operators';
import { Inject, Injectable } from '@angular/core';

import { FOOD_STORE_CONFIG, FoodStoreConfig } from './config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FoodStoreService {

  constructor(private http: HttpClient, 
    @Inject(FOOD_STORE_CONFIG) private config: FoodStoreConfig) {}

  getStore() {
    console.log("GET");
    return this.http
      .get<any[]>('/api/stores', 
          {
            params: {
              "id":  `${this.config.storeId}`,
              "token": this.config.storeToken
          }})
      .pipe(map( (data) => data[0]));
  }
}
