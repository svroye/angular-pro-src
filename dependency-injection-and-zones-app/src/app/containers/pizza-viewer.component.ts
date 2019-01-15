import { FoodUseExistingService } from './../food-useExisting.service';
import { FoodFactoryService } from './../food-factory.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

interface Pizza {
  name: string,
  price: number
}

export function PizzaFactory(http) {
  return new FoodFactoryService(http, '/api/pizzas');
}

export abstract class PizzaService {
  getPizzas: () => Observable<Pizza[]>;
}

@Component({
  selector: 'pizza-viewer',
  providers: [
    FoodUseExistingService,
    { provide: PizzaService, useExisting: FoodUseExistingService }
  ],
  template: `
    <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency:'USD' }}
      </div>
    </div>
  `
})
export class PizzaViewerComponent implements OnInit {
  
  items$: Observable<Pizza[]>;
  
  constructor(private foodService: PizzaService) {}
  
  ngOnInit() {
    this.items$ = this.foodService.getPizzas();
  }
}
