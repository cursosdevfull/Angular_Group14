import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'amb-form-driver',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent {
  readonly title: string;
  
  constructor(@Inject(MAT_DIALOG_DATA) private readonly data: any) {
    this.title = data ? 'EDIT' : 'NEW';
  }
}
