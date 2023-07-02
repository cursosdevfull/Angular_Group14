import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormTaskComponent } from './form-task/form-task.component';
import { ListTaskComponent } from './misComponentes/list-task.component';
import { ShowTime } from './misComponentes/show-time.component';
import { ResponsableComponent } from './responsable/responsable.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ShowTime,
    ListTaskComponent,
    ResponsableComponent,
    FormTaskComponent,
  ],
  imports: [BrowserModule],
  providers: [
    /*{ provide: MyTokenTaskService, useClass: TaskService },
    { provide: MyTokenTareaService, useClass: TareaService },*/
    /*{ provide: TaskService, useClass: TaskService },
    { provide: TareaService, useClass: TareaService },*/
    TaskService,
    TareaService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
