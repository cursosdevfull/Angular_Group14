import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut',
  standalone: true,
})
export class CutPipe implements PipeTransform {
  transform(value: string, maxWords: number): string {
    return value.split(' ').slice(0, maxWords).join(' ');
  }
}
