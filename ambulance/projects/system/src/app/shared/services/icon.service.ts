import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface Icon {
  name: string;
  path: string;
}

type Icons = Icon[];

@Injectable({ providedIn: 'root' })
export class IconService {
  private listIcons: Icons = [
    {
      name: 'excel',
      path: '../assets/icons/icon-excel.svg',
    },
    {
      name: 'pdf',
      path: '../assets/icons/icon-pdf.svg',
    },
  ];

  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer
  ) {
    for (const icon of this.listIcons) {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    }
  }
}
