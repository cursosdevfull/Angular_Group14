import { Component } from '@angular/core';

import { HoverDirective } from '../hover/hover.directive';

@Component({
  standalone: true,
  selector: 'app-comp06',
  template: `<div ambHover>Comp06Component</div>`,
  imports: [HoverDirective],
})
export class Comp06Component {}
