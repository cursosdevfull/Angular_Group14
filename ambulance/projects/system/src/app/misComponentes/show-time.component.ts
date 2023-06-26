import { Component, Input } from '@angular/core';

@Component({
  selector: 'amb-show-time',
  templateUrl: `./show-time.component.html`,
  styleUrls: ['./show-time.component.css'],
})
export class ShowTime {
  @Input() startDate: Date = new Date();
  currentTime = new Date().toISOString();
}
