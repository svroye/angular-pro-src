import { Input, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {
  tooltipElement = document.createElement('div');
  visible = false;

  @Input()
  anotherInput: string;

  @Input()
  set tooltip(value: {text, secondtext}) {
    console.log(value);
    console.log(value.secondtext);
    this.tooltipElement.textContent = value.text;
  }

  hide() {
    this.tooltipElement.classList.remove('tooltip--active');
    console.log(this.anotherInput);
  }

  show() {
    this.tooltipElement.classList.add('tooltip--active');
    console.log(this.anotherInput);
  }

  constructor(
    private element: ElementRef
  ) {}

  ngOnInit() {
    this.tooltipElement.className = 'tooltip';
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add('tooltip-container');
  }
}
