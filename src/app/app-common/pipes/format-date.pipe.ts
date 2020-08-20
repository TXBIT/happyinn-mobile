import { Pipe, PipeTransform } from '@angular/core';
import * as momentTimezone from 'moment-timezone';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  // user Asia/Bangkok timezone
  transform(value: string): string {
    return momentTimezone(value).tz('Asia/Bangkok').format('Y/MM/DD');
  }

}
