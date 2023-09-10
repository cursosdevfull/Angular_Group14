import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[ambHover]',
  standalone: true,
})
export class HoverDirective {
  constructor() {}

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseenter');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouseleave');
  }
}
