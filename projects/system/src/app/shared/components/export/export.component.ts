import { Component, Inject } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

import { Metadata } from '../../interfaces/metadata.interface';
import { OPTIONS_EXPORT_PDF, UtilsService } from '../../services/utils.service';

@Component({
  selector: 'amb-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css'],
})
export class ExportComponent<TYPE_INFO> {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    private readonly info: {
      data: any;
      metaData: Metadata[];
      filename: string;
      sheetName: string;
    },
    private readonly utilsService: UtilsService,
    private readonly reference: MatBottomSheetRef<ExportComponent<TYPE_INFO>>
  ) {}

  exportToExcel() {
    this.reference.dismiss();
    this.utilsService.exportToExcel(
      this.info.data,
      this.info.metaData,
      this.info.filename,
      this.info.sheetName
    );
  }

  exportToPDF(option: OPTIONS_EXPORT_PDF) {
    this.reference.dismiss();
    this.utilsService.exportToPDF(
      this.info.data,
      this.info.metaData,
      this.info.filename,
      this.info.sheetName,
      option
    );
  }
}
