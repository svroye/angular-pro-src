import { FoodUseExistingService } from './../food-useExisting.service';
import { FoodFactoryService } from './../food-factory.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Side {
  name: string,
  price: number
}

export function SideFactory(http) {
  return new FoodFactoryService(http, '/api/sides');
}

export abstract class SideService {
  getSides: () => Observable<Side[]>;
}

@Component({
  selector: 'side-viewer',
  providers: [
    FoodUseExistingService,
    { provide: SideService, 
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
export class SideViewerComponent implements OnInit {
  
  items$: Observable<Side[]>;
  constructor(private foodService: SideService) {}
  
  ngOnInit() {
    this.items$ = this.foodService.getSides();
  }
}
