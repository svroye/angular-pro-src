import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CreditCardDirective } from "./credit-card.directive";
import { By } from "@angular/platform-browser";


@Component({
    template: `
        <input type="text" [value]="value" credit-card>
    `
})
class TestComponent {
    value = 123456;

}

describe('CreditCardDirective', () => {

    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let el: DebugElement;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [
                CreditCardDirective,
                TestComponent]
        });
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
    });

    it('should format the string with spaces', () => {
        const directive = el.query(By.directive(CreditCardDirective)).nativeElement;
        directive.value = '475123';
        directive.dispatchEvent(new Event('input'));
        expect(directive.value).toBe('4751 23');
        directive.value = "4751239812019210";
        directive.dispatchEvent(new Event('input'));
        expect(directive.value).toBe('4751 2398 1201 9210');

    }); 

    it('should have a max length of 16 characters', () => {
        const directive = el.query(By.directive(CreditCardDirective)).nativeElement;
        directive.value = '475121458965478965412365214855223';
        directive.dispatchEvent(new Event('input'));
        expect(directive.value).toBe('4751 2145 8965 4789');
        

    }); 


});