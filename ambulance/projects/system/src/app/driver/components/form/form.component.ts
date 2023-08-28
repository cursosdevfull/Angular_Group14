import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'amb-form-driver',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent {
  readonly title: string;
  fg: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: any,
    private reference: MatDialogRef<FormComponent>
  ) {
    this.title = data ? 'EDIT' : 'NEW';
    this.createForm();
  }

  createForm() {
    this.fg = new FormGroup({
      id: new FormControl(this.data?.id),
      name: new FormControl(this.data?.name, [Validators.required]),
    });
  }

  save() {
    const values = this.fg.value;
    const id = values.id;
    delete values.id;

    this.reference.close({ id, values });
  }
}
