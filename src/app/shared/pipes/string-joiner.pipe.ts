import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringJoiner'
})
export class StringJoinerPipe implements PipeTransform {

  transform(value: string[], separator: string): unknown {
    return value.join(separator);
  }

}
