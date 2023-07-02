import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortar',
})
export class RecortarPipe implements PipeTransform {
  transform(value: any, quantity: number, text: string) {
    return value.substring(0, quantity) + text;
  }
}
