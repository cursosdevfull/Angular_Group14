import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'amb-form-medic',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent {
  readonly title: string;
  fg: FormGroup;
  photoToShow: string

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
      secondname: new FormControl(this.data?.secondname, [Validators.required]),
      lastname: new FormControl(this.data?.lastname, [Validators.required]),
      dni: new FormControl(this.data?.dni, [Validators.required]),
      cmp: new FormControl(this.data?.cmp, [Validators.required]),
      email: new FormControl(this.data?.email, [
        Validators.required,
        Validators.email,
      ]),
    });

    if (this.data) {
      this.fg.addControl('photo', new FormControl());
      this.photoToShow = this.data.photo;
    } else {
      this.fg.addControl('photo', new FormControl(null, [Validators.required]));
    }
  }

  save() {
    const values = this.fg.value;
    const id = values.id;
    delete values.id;

    this.reference.close({ id, values });
  }
}
