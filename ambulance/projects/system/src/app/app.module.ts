import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormTaskComponent } from './form-task/form-task.component';
import { ListTaskComponent } from './misComponentes/list-task.component';
import { ShowTime } from './misComponentes/show-time.component';
import { TaskModule } from './modules/task.module';
import { RecortarPipe } from './pipes/recortar.pipe';
import { ResponsableComponent } from './responsable/responsable.component';
import { LogService } from './services/log.service';
import { TareaService } from './services/tarea.service';
import { TaskService } from './services/task.service';

//export class MyTokenTaskService {}
//export class MyTokenTareaService {}

export const MyTokenTaskService = new InjectionToken<TaskService>(
  'TaskService'
);
export const MyTokenTareaService = new InjectionToken<TareaService>(
  'TareaService'
);

export const LIST_TASKS = new InjectionToken<[]>('LIST_TASKS');

@NgModule({
  declarations: [
    AppComponent,
    ShowTime,
    ListTaskComponent,
    ResponsableComponent,
    FormTaskComponent,
    RecortarPipe,
  ],
  imports: [BrowserModule, TaskModule],
  providers: [
    /*{ provide: MyTokenTaskService, useClass: TaskService },
    { provide: MyTokenTareaService, useClass: TareaService },*/
    /*{ provide: TaskService, useClass: TaskService },
    { provide: TareaService, useClass: TareaService },*/
    TaskService,
    TareaService,
    {
      //provide: 'DATA_MODAL',
      provide: LIST_TASKS,
      useValue: [
        { id: 1, title: 'Task01' },
        { id: 2, title: 'Task02' },
      ],
    },
    {
      provide: 'ENVIRONMENT_DEV',
      useValue: 'dev',
    },
    {
      provide: 'API_URL',
      useFactory: (env: string) => {
        return `http://localhost:3000/${env}`;
      },
      deps: ['ENVIRONMENT_DEV'],
    },
    LogService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
