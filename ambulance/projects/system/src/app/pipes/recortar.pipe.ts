import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortar',
})
export class RecortarPipe implements PipeTransform {
  transform(value: string, quantity: number, text: string) {
    const words = value.split(' ');
    if (words.length > quantity) {
      return words.slice(0, quantity).join(' ') + text;
    }

    return value;
    //return value.substring(0, quantity) + text;
  }
}
