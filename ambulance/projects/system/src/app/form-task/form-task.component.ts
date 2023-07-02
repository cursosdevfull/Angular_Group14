import { Component, EventEmitter, Output } from '@angular/core';

import { ITask } from '../interfaces/task.interface';

@Component({
  selector: 'amb-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css'],
})
export class FormTaskComponent {
  @Output() onAddTask: EventEmitter<ITask> = new EventEmitter<ITask>();

  descriptionTask = '';
  responsableTask = '';
  durationTask = 0;
  startDateTask;

  constructor() {
    this.startDateTask = new Date();
  }

  /*ngAfterViewInit() {
    const btn = document.getElementById('btnSave') as HTMLButtonElement;
    btn.addEventListener('click', () => {
      console.log('button clicked');
    });
  }*/

  save() {
    const task: ITask = {
      title: this.descriptionTask,
      responsableName: this.responsableTask,
      points: this.durationTask,
      startDate: this.startDateTask,
    };

    this.onAddTask.emit(task);
    console.log(this.descriptionTask);
    console.log(this.responsableTask);
    console.log(this.durationTask);
    console.log(this.startDateTask);
  }

  captureDescription(evt: any) {
    this.descriptionTask = evt.target.value;
  }

  captureResponsable(evt: any) {
    this.responsableTask = evt.target.value;
  }

  captureDuration(evt: any) {
    this.durationTask = evt.target.value;
  }

  captureStartDate(evt: any) {
    this.startDateTask = evt.target.value;
  }
}
