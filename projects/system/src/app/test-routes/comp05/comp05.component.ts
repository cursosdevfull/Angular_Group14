import { Component } from '@angular/core';

import { Comp06Component } from '../comp06/comp06.component';

@Component({
  standalone: true,
  selector: 'amb-comp05',
  templateUrl: './comp05.component.html',
  styleUrls: ['./comp05.component.css'],
  imports: [Comp06Component],
})
export class Comp05Component {}
