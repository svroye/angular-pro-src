import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import { Product, Item } from '../models/product.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class StockInventoryService {
  
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<Item[]> {
    console.log("getCartItems");
    return this.http
      .get<Item[]>('api/cart')
      .pipe(catchError(this.handleError));
  }

  getProducts(): Observable<Product[]> {
    console.log("getProducts");
    return this.http
      .get<Product[]>('api/products')
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error('Backend returned code ', error.status, ', body was ', error.error );
    }
    return throwError("Something bad happened, please try again later");
  }

}