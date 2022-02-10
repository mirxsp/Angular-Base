import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
      if(value<0) return "00:00 hour";
      const hours = Math.floor(value/60);
      const minutes = (value%60);
      const postfix = value >= 120 ? 'hours' : 'hour';
      return `${this.zeroFill(hours)}:${this.zeroFill(minutes)} ${postfix}`;
    }

    zeroFill(value: number): string{
        return value < 10 ? '0' + value : value.toString();
    }
}
