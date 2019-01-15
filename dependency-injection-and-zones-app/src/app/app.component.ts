import { Component, OnInit } from '@angular/core';
import { FoodStoreService } from './food-store/food-store.service';

@Component({
  selector: 'app-root',
  styles: [`
    pizza-viewer,
    side-viewer,
    drink-viewer {
      display: block;
      border-bottom: 2px solid #eee;
      padding: 20px 0;
    }
  `],
  template: `
    <div>
      <pizza-viewer></pizza-viewer>
      <side-viewer></side-viewer>
      <drink-viewer></drink-viewer>
      <div>
        Food Store : {{ (store | async)?.name }}
      </div>
    </div>
  `
})
export class AppComponent {

  store = this.foodService.getStore();

  constructor(private foodService: FoodStoreService) {}

}
