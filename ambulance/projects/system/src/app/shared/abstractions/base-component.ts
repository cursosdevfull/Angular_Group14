import { LayoutService } from '../../config/modules/layout/layout.service';
import { ExportComponent } from '../components/export/export.component';
import { Metadata } from '../interfaces/metadata.interface';
import { UtilsService } from '../services/utils.service';

export interface Modal {
  component: any;
  panelClass: string;
}

export abstract class BaseComponent<Entity> {
  abstract readonly title: string;
  abstract readonly icon: string;
  abstract dataOriginal: Entity[];
  abstract data: Entity[];
  abstract metaData: Metadata[];
  abstract modalNewUpdate: Modal;

  abstract filename: string;
  abstract sheetName: string;

  constructor(
    protected layoutService: LayoutService,
    protected utilsService: UtilsService
  ) {
    this.layoutService.configuration = { menu: true, toolbar: true };
  }

  pageChanged(pageNumber: number) {
    this.data = this.dataOriginal.slice(pageNumber * 20, pageNumber * 20 + 20);
  }

  showOptionsExport() {
    this.utilsService.showOptions<Entity>({
      classComponent: ExportComponent,
      data: this.dataOriginal,
      metaData: this.metaData,
      filename: 'Conductores',
      sheetName: 'Lista de conductores',
    });
  }

  openForm(record?: Entity) {
    this.utilsService.showModal<Entity>({
      classComponent: this.modalNewUpdate.component,
      panelClass: this.modalNewUpdate.panelClass,
      data: record,
    });
  }
}
