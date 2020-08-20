import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpper'
})
export class UppercasePipe implements PipeTransform {

  // convert to uppercase
  transform(value: string): string {
    const transformedValue = value.toUpperCase();
    return transformedValue;
  }

}
