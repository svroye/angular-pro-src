import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StockCounterComponent } from './stock-counter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('StockCounterComponent', () => {

    let component: StockCounterComponent;
    let fixture: ComponentFixture<StockCounterComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ StockCounterComponent]
        });

        fixture = TestBed.createComponent(StockCounterComponent);
        component = fixture.componentInstance;

        component.value = 0;
    });

    it('should increment correctly', () => {
        component.increment();
        expect(component.value).toBe(10);
    });

    it('should decrement correctly', () => {
        component.increment();
        expect(component.value).toBe(10);
        component.decrement();
        expect(component.value).toBe(0);
    });

    it('should not decrement below the minimum value', () => {
        component.increment();
        expect(component.value).toBe(10);
        component.decrement();
        expect(component.value).toBe(0);
        component.decrement();
        expect(component.value).toBe(0);
    });

    it('should not increment above the maximum value', () => {
        for(let i = 0; i < 200; i++) {
            component.increment();
        }
        expect(component.value).toBe(100);
    });

    it('should not increment above the maximum value', () => {
        component.step = 20;
        component.max = 20;
        component.min = 0 ;
        component.increment();
        expect(component.value).toBe(20);
    });

    it('should call the output on a value change', () => {
        spyOn(component.changed, 'emit').and.callThrough();
        component.step = 100;
        component.increment();
        expect(component.changed.emit).toHaveBeenCalledWith(100);
    });

});

describe('StockCounterComponent UI', () => {

    let component: StockCounterComponent;
    let fixture: ComponentFixture<StockCounterComponent>;
    let el: DebugElement;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ StockCounterComponent]
        });

        fixture = TestBed.createComponent(StockCounterComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        component.value = 0;
    });

    it('should increment when the + button is clicked', () => {
        el.query(By.css('button:first-child')).triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(component.value).toBe(10);
        expect(el.query(By.css('p')).nativeElement.textContent).toBe('10');
    });

    it('should increment when the up arrow is clicked', () => {
        const event = new Event('KeyboardEvent') as any;
        event.code = 'ArrowUp';
        el.query(By.css('.stock-counter > div')).triggerEventHandler('keydown', event);
        fixture.detectChanges();
        expect(component.value).toBe(10);
    });


});;