import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hover]',
})
export class HoverDirective {
  el: ElementRef;

  constructor(elementRef: ElementRef) {
    this.el = elementRef;
    elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseover')
  over() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseout')
  out() {
    this.el.nativeElement.style.backgroundColor = 'orange';
  }
}
