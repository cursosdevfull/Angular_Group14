import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { ITask } from '../interfaces/task.interface';

@Component({
  selector: 'amb-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent implements OnInit {
  @Input() tasks: ITask[] = [];

  constructor() {
    console.log('constructor of ListTask executed');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['newTask']?.currentValue) {
      //this.tasks.push(changes['newTask'].currentValue);
    }

    console.log('changes', changes);
    console.log('ngOnChanges executed');
  }
  ngOnInit(): void {
    console.log('ngOnInit executed');
  }
}
