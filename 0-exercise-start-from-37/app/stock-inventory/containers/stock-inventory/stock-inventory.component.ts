import { StockValidators } from './stock-inventory.validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { StockInventoryService } from '../../services/stock-inventory.service';

import { Product, Item } from '../../models/product.interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'stock-inventory',
  styleUrls: ['stock-inventory.component.scss'],
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">

        <stock-branch
          [parent]="form">
        </stock-branch>

        <stock-selector
          [parent]="form"
          [products]="products"
          (added)="addStock($event)">
        </stock-selector>

        <stock-products
          [parent]="form"
          [map]="productMap"
          (removed)="removeStock($event)">
        </stock-products>

        <div class="stock-inventory__price">
          Total: {{ total | currency:'USD':true }}
        </div>
        <div class="stock-inventory__buttons">
          <button 
            type="submit"
            [disabled]="form.invalid">
            Order stock
          </button>
        </div>

        <pre>{{ form.value | json }}</pre>

      </form>
    </div>
  `
})
export class StockInventoryComponent implements OnInit {

  products: Product[];

  productMap: Map<number, Product>;

  total: number;

  form = this.fb.group({
    store: this.fb.group({
      branch: ['', [Validators.required, StockValidators.checkBranch]],
      code: ['', Validators.required]
    }),
    selector: this.createStock({}),
    stock: this.fb.array([])
  })

  constructor(private fb: FormBuilder, private stockService: StockInventoryService) {}

  ngOnInit() {
    const cart = this.stockService.getCartItems();
    const products = this.stockService.getProducts();

    // simultaneous call both API observables
    forkJoin(cart, products)
      // destructure the received data, which is an array of the cart and products observables
      // additional type checking was also performed
      .subscribe( ( [cart, products]: [Item[], Product[]]) => {
        // map the products to a Map<id, product>
        const myMap = products.map<[number, Product]>( product => [product.id, product] );
        // new es2016 feature, make sure the lib in tsconfig is set correctly !
        this.productMap = new Map<number, Product>(myMap);
        this.products = products;
        cart.forEach(item => this.addStock(item));

        this.calculateTotal(this.form.get('stock').value);
        this.form.get('stock')
          .valueChanges.subscribe( value => this.calculateTotal(value));
      });
  }

  calculateTotal(value: Item[]) {
    const total = value.reduce( (prev, next) => {
      return prev + next.quantity * this.productMap.get(next.product_id).price
    }, 0);
    this.total = total;
  }

  createStock(stock) {
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || 10
    });
  }

  addStock(stock) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({ group, index }: { group: FormGroup, index: number }) {
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}