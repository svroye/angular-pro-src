import { FoodUseExistingService } from './../food-useExisting.service';
import { FoodFactoryService } from './../food-factory.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface Drink {
  name: string,
  price: number
}

export function DrinkFactory(http) {
  return new FoodFactoryService(http, '/api/drinks');
}

export abstract class DrinkService {
  getDrinks: () => Observable<Drink[]>;
}


@Component({
  selector: 'drink-viewer',
  providers: [
    FoodUseExistingService,
  { provide: DrinkService, 
    useExisting: FoodUseExistingService
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

  constructor(private foodService: DrinkService) {}
  
  ngOnInit() {
    this.items$ = this.foodService.getDrinks();
  }
}
