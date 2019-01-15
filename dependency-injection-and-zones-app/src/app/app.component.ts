import { Component, OnInit, DoCheck, NgZone } from '@angular/core';
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
    <!--
      <pizza-viewer></pizza-viewer>
      <side-viewer></side-viewer>
      <drink-viewer></drink-viewer>        
      <div>
        Food Store : {{ (store | async)?.name }}
      </div>-->
      <div>
        Counter: {{ counter }}
      </div>
    </div>
  `
})
export class AppComponent implements OnInit, DoCheck{

  store = this.foodService.getStore();

  constructor(private foodService: FoodStoreService, private zone: NgZone) {}

  counter = 0;

  ngOnInit() {
    this.zone.runOutsideAngular( () => {
      for (let i = 0; i < 100; i++){
        setTimeout( () => this.counter++);
      }
      this.zone.run( () => {
        setTimeout( () => this.counter = this.counter, 1000);
      });
    });
  }

  ngDoCheck(){
    console.log('Change detection');
  }
}
