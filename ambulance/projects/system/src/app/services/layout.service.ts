import { Injectable } from '@angular/core';

import { TareaModule } from '../modules/tarea/tarea.module';

@Injectable({
  providedIn: TareaModule,
})
export class LayoutService {
  options: Record<string, boolean> = {
    showHeader: true,
    showFooter: true,
    showSidebar: true,
  };

  constructor() {}
}
