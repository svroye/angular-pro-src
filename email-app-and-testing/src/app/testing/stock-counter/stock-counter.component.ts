import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, Input, forwardRef, Output, EventEmitter } from "@angular/core";

const COUNTER_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef( () => StockCounterComponent),
    multi: true
};

@Component({
    selector: 'stock-counter',
    providers: [COUNTER_CONTROL_ACCESSOR],
    template: `
        <div class="stock-counter" [class.focused]="focus">
            <div tabindex="0" (keydown)="onKeyDown($event)" (blur)="onBlur($event)" (focus)="onFocus($event)">
                <div>
                    <p>{{ value }}</p>
                    <div>
                        <button type="button" (click)="increment()" [disabled]="value === max">+</button>
                        <button type="button" (click)="decrement()" [disabled]="value === min">-</button>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class StockCounterComponent {

    @Input()
    step : number = 10;

    @Input()
    min : number = 10;

    @Input()
    max : number = 100;

    @Output()
    changed = new EventEmitter<number>();

    value: number = 10;
    focus: boolean;


    increment() {
        if (this.value < this.max){
            this.value += this.step;
            this.changed.emit(this.value);
        }

    }

    decrement(){
        if (this.value >= this.min){
            this.value -= this.step;
            this.changed.emit(this.value);
        }
    }

    onKeyDown(event: KeyboardEvent) {
        const handlers = {
            ArrowDown: () => this.decrement(),
            ArrowUp: () => this.increment()
        };

        if (handlers[event.code]) {
            handlers[event.code]();
            event.preventDefault();
            event.stopPropagation();
        }
    }

    onBlur(event: FocusEvent) {
        this.focus = false;
        event.preventDefault()
        event.stopPropagation()
    }

    onFocus(event: FocusEvent) {
        this.focus = true;
        event.preventDefault()
        event.stopPropagation()
    }
    
}