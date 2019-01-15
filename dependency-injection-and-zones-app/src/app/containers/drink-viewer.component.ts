import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FoodService } from '../food.service';
import { Observable } from 'rxjs';

interface Drink {
  name: string,
  price: number
}

export function DrinkFactory(http) {
  return new FoodService(http, '/api/drinks');
}

@Component({
  selector: 'drink-viewer',
  providers: [
    { provide: FoodService, 
      useFactory: DrinkFactory,
      deps: [
        HttpClient
      ]
    }
  ],
  template: `
    <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency:'USD' }}
      </div>
    </div>
  `
})
export class DrinkViewerComponent implements OnInit {
  
  items$: Observable<Drink[]>;

  constructor(private foodService: FoodService) {}
  
  ngOnInit() {
    this.items$ = this.foodService.getDrinks();
  }
}
