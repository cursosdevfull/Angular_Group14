import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[upload]',
})
export class UploadDirective {
  constructor() {}

  @HostListener('dragover', ['$event'])
  onDragOver(evt: any) {
    evt.preventDefault();
    console.log('Drag Over');
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(evt: any) {
    evt.preventDefault();
    console.log('Drag Leave');
  }

  @HostListener('drop', ['$event'])
  onDrop(evt: any) {
    evt.preventDefault();
    console.log(evt.dataTransfer.files);
    console.log('Drop');
  }
}
