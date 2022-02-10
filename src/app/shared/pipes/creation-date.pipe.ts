import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'creationDate',
})
export class CreationDatePipe implements PipeTransform {
    transform(value: Date): unknown {
        return `${this.zeroFill(value.getDate(), 2)}.${this.zeroFill(
            value.getMonth() + 1,
            2,
        )}.${this.zeroFill(value.getFullYear(), 4)}`;
    }

    zeroFill(value: number, length: number): string {
        let filledValue = value.toString();
        while (filledValue.length < length) {
            filledValue = '0' + filledValue;
        }
        return filledValue;
    }
}
