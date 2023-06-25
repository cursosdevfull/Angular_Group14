import { Component } from '@angular/core';

@Component({
  selector: 'amb-show-time',
  templateUrl: `./show-time.component.html`,
  styleUrls: ['./show-time.component.css'],
})
export class ShowTime {
  currentTime = new Date().toISOString();
}
