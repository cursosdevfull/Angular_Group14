import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ICanDeactivate } from '../../guards/deactivate.guard';

@Component({
  selector: 'amb-comp02',
  templateUrl: './comp02.component.html',
  styleUrls: ['./comp02.component.css'],
})
export class Comp02Component implements ICanDeactivate {
  fg: FormGroup;
  dataOriginal = {
    name: 'Juan',
    lastname: 'Perez',
  };

  dataSaved = false;

  constructor() {
    this.builtForm();
  }

  builtForm() {
    this.fg = new FormGroup({
      name: new FormControl(this.dataOriginal.name),
      lastname: new FormControl(this.dataOriginal.lastname),
    });
  }

  save() {
    this.dataSaved = true;
  }

  isSaved(): boolean {
    return this.dataSaved;
  }
}
