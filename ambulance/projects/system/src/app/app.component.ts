import { Component, Inject } from '@angular/core';

import { LIST_TASKS } from './app.module';
import { ITask } from './interfaces/task.interface';
import { LayoutService } from './services/layout.service';
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
    obj: TaskService,
    //@Inject('DATA_MODAL') data: string
    @Inject(LIST_TASKS) data: [],
    @Inject('API_URL') apiUrl: string,
    layout: LayoutService
  ) {
    console.log('layout options', layout.options);
    console.log('apiUrl', apiUrl);
    console.log('data', data);
    console.log(obj);
    this.tasks = obj.tasks;
  }

  addTask(task: ITask) {
    console.log('Task added: ', task);
    this.tasks.push(task);
  }
}
