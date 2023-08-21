import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import * as XLSX from 'xlsx';

import { Metadata } from '../interfaces/metadata.interface';

declare var require: any;

const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export type OPTIONS_EXPORT_PDF = 'SHOW' | 'LIST' | 'DOWNLOAD';
@Injectable()
export class UtilsService {
  constructor(
    private readonly options: MatBottomSheet,
    private readonly dialog: MatDialog
  ) {}

  private fromDataToExport<Entity>(data: Entity[], metaData: Metadata[]) {
    return data.map((item: Entity) => {
      const newRow: any = {};
      for (const prop in item) {
        const md = metaData.find((el: Metadata) => el.field === prop); // {name: 'sergio', lastname: 'hidalgo'} -> {Nombre: 'sergio', 'Apellido del piloto': 'hidalgo'}
        if (md) newRow[md.title] = item[prop];
      }

      return newRow;
    });
  }
  showOptions<Entity>(params: {
    classComponent: any;
    data: Entity[];
    metaData: Metadata[];
    filename: string;
    sheetName: string;
  }) {
    this.options.open(params.classComponent, {
      data: {
        data: params.data,
        metaData: params.metaData,
        filename: params.filename,
        sheetName: params.sheetName,
      },
    });

    /*
      providers: [
        {
          provide: MAT_BOTTOM_SHEET_DATA, 
          useValue: {
            data: params.data, metaData: params.metaData, filename: params.filename, sheetName: params.sheetName
          }
        }
      ]
    
    */
  }

  showModal<Entity>(params: {
    classComponent: any;
    panelClass: string;
    data?: Entity;
  }) {
    this.dialog.open(params.classComponent, {
      panelClass: params.panelClass,
      disableClose: true,
      data: params.data,
    });
  }

  private async fromFileToDataUrl(path: string) {
    const response = await fetch(path);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onerror = reject;
      fr.readAsDataURL(blob);
      fr.onloadend = () => resolve(fr.result);
    });
  }

  exportToExcel<Entity>(
    data: Entity[],
    metaData: Metadata[],
    filename: string,
    sheetName: string
  ) {
    const dataToExport = this.fromDataToExport(data, metaData);
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);
    XLSX.utils.sheet_add_json(ws, dataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, `${filename}.xlsx`);
  }

  async exportToPDF<Entity>(
    data: Entity[],
    metaData: Metadata[],
    filename: string,
    sheetName: string,
    option: OPTIONS_EXPORT_PDF
  ) {
    const imageLogo = await this.fromFileToDataUrl('assets/images/logo.jpg');
    const dataToExport = this.fromDataToExport(data, metaData);

    const infoFormatted = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      pageMargins: [20, 20, 20, 20],
      content: [
        this.generateHeader(imageLogo, sheetName),
        this.generateContent(dataToExport),
      ],
      //header: this.generateHeaderFooter,
      footer: this.generateHeaderFooter,
      styles: this.generateStyles(),
    };

    this.generatePdf(infoFormatted, filename, option);
  }

  private generatePdf(
    infoFormatted: any,
    filename: string,
    option: OPTIONS_EXPORT_PDF
  ) {
    const documentGenerated = pdfMake.createPdf(infoFormatted);
    if (option === 'DOWNLOAD') documentGenerated.download(filename);
    else if (option === 'SHOW') documentGenerated.open();
    else if (option === 'LIST') documentGenerated.print();
  }

  private generateHeader(imageLogo: unknown, title: string) {
    return {
      margin: [0, 0, 0, 15],
      table: {
        widths: [120, 'auto', 100, 'auto'],
        body: [
          [
            {
              image: imageLogo,
              width: 100,
              border: [false, false, true, false],
              borderColor: ['#000', '#000', '#000', '#000'],
              borderWidth: 1,
            },
            {
              border: [false, false, false, false],
              text: [
                this.generateRow('Channel', 'headerLeft'),
                this.generateRow('Av. De la República 516', 'subHeaderLeft'),
                this.generateRow('San Isidro, Lima Perú', 'subHeaderLeft'),
                this.generateRow('Teléfono: (51-1) 611-3333', 'subHeaderLeft'),
                this.generateRow('info@channel.com', 'subHeaderLeft'),
                this.generateRow('www.channel.com', 'subHeaderLeft'),
              ],
            },
            {
              border: [false, false, false, false],
              text: '',
            },
            {
              border: [false, false, false, false],
              text: title,
              style: 'titleReport',
            },
          ],
        ],
      },
    };
  }

  private generateContent(data: any[]) {
    const body = data.map((el) =>
      Object.keys(el).map((prop) => this.generateRowData(prop, el[prop]))
    );

    const rowHeaders = Object.keys(data[0]).map((prop) => [
      {
        border: [false, false, false, false],
        text: prop,
        style: 'header',
      },
    ]);

    const quantityColumns = rowHeaders.length;

    const widths = Array.from(Array(quantityColumns).keys()).map(
      () => Math.floor(100 / quantityColumns) + '%'
    );

    body.unshift(rowHeaders);

    return {
      margin: [0, 0, 0, 15],
      table: {
        widths,
        body,
      },
    };
  }

  private generateRow(text: string, style: string = '') {
    const row: { text: string; style?: string } = { text: `${text}\n` };

    if (style) row.style = style;

    return row;
  }

  private generateRowData(nameProperty: string, value: string) {
    return [
      {
        border: [false, false, false, false],
        text: value,
      },
    ];
  }

  private generateStyles() {
    return {
      headerLeft: {
        fontFamily: 'Verdana',
        fontSize: 13,
        height: 16,
        color: '#3c3b40',
      },
      subHeaderLeft: {
        fontFamily: 'Verdana',
        fontSize: 10,
        height: 16,
        color: '#3c3b40',
      },
      titleReport: {
        fontFamily: 'Verdana',
        fontSize: 15,
        height: 16,
        color: '#3c3b40',
      },
      header: {
        fontFamily: 'Verdana',
        fontSize: 13,
        height: 14,
        color: '#3c3b40',
        bold: true,
      },
    };
  }

  private generateHeaderFooter(currentPage: number, pageCount: number) {
    return [
      {
        text: `Página ${currentPage} de ${pageCount}`,
        alignment: 'center',
      },
    ];
  }
}
