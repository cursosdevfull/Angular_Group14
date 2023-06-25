import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListTaskComponent } from './misComponentes/list-task.component';
import { ShowTime } from './misComponentes/show-time.component';
import { ResponsableComponent } from './responsable/responsable.component';

@NgModule({
  declarations: [AppComponent, ShowTime, ListTaskComponent, ResponsableComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [ListTaskComponent],
})
export class AppModule {}
