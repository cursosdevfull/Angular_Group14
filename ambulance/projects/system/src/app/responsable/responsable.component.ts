import { Component, Input } from '@angular/core';

@Component({
  selector: 'amb-responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.css'],
})
export class ResponsableComponent {
  @Input() responsableName = '';
  @Input() points = 0;
}
