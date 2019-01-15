import { FoodService } from './food.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { PizzaViewerComponent } from './containers/pizza-viewer.component';
import { DrinkViewerComponent } from './containers/drink-viewer.component';
import { SideViewerComponent } from './containers/side-viewer.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaViewerComponent,
    DrinkViewerComponent,
    SideViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    FoodService
  ]
})
export class AppModule {}
