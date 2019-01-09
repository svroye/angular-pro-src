import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, Input, forwardRef } from "@angular/core";

const COUNTER_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef( () => StockCounterComponent),
    multi: true
};

@Component({
    selector: 'stock-counter',
    styleUrls: ['stock-counter.component.scss'],
    providers: [COUNTER_CONTROL_ACCESSOR],
    template: `
        <div class="stock-counter">
            <div>
                <div>
                    <p> {{ value }}</p>
                    <div>
                        <button type="button" (click)="increment()" [disabled]="value === max">+</button>
                        <button type="button" (click)="decrement()" [disabled]="value === min">-</button>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class StockCounterComponent implements ControlValueAccessor {

    @Input()
    step : number = 10;

    @Input()
    min : number = 10;

    @Input()
    max : number = 1000;

    value: number = 10;

    increment() {
        if (this.value < this.max){
            this.value += this.step;
            this.onModelChange(this.value);
        }
        this.onTouch();
    }

    decrement(){
        if (this.value > this.min){
            this.value -= this.step;
            this.onModelChange(this.value);
        }
        this.onTouch();
    }

    private onTouch: Function;
    private onModelChange: Function;

    writeValue(value: any): void {
        this.value = value || 0;
    }

    registerOnChange(fn: any): void {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
    }
}