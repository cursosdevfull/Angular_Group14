import { Component } from '@angular/core';

import { ITask } from './interfaces/task.interface';
import { TaskService } from './services/task.service';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: ITask[] = [];

  constructor(
    /*@Inject('LIST_TASKS')*/ /*@Inject(MyTokenTaskService)*/
    //@Inject(TaskService) obj: TaskService
    obj: TaskService
  ) {
    console.log(obj);
    this.tasks = obj.tasks;
  }

  addTask(task: ITask) {
    console.log('Task added: ', task);
    this.tasks.push(task);
  }
}
