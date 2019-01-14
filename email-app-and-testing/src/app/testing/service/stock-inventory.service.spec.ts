import { TestBed } from "@angular/core/testing";
import { StockInventoryService } from "./stock-inventory.service";

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const cartItems = [ {product_id: 1, quantity: 10}, {product_id: 2, quantity: 5} ];
const productItems = [ {id: 1, price: 10, name: 'Test'}, {id: 2, price: 100, name: 'Another Test'} ];

describe('StockInventoryService', () => {

    let service: StockInventoryService;    
    let httpMock: HttpTestingController;

    beforeEach( () => {
        const bed = TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ StockInventoryService]
        });

        httpMock = bed.get(HttpTestingController);
        service = bed.get(StockInventoryService);
    });

    it('should get cart items', () => {
        service.getCartItems().subscribe( items => {
            expect(items.length).toBe(2);
            expect(items).toEqual(cartItems);
        });
        const req = httpMock.expectOne('api/cart');
        req.flush(cartItems);
    });

    it('should get product items', () => {
        service.getProducts().subscribe( items => {
            expect(items.length).toBe(2);
            expect(items).toEqual(productItems);
        });
        const req = httpMock.expectOne('api/products');
        req.flush(productItems);
    });
});