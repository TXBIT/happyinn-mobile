import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { Booking } from 'src/app/booking/shared/booking.model';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  // get range of dates
  private getRangeOfDates(startAt: string, endAt: string, dateFormat: string) {
    const tempDates = [];
    const mEndAt = moment(endAt);
    let mStartAt = moment(startAt);

    while (mStartAt < mEndAt) {
      tempDates.push(mStartAt.format(dateFormat));
      mStartAt = mStartAt.add(1, 'day');
    }

    tempDates.push(moment(startAt).format(dateFormat));
    tempDates.push(mEndAt.format(dateFormat));

    return tempDates;
  }

  // format date according to dateFormat
  private formatDate(date: any, dateFormat: any) {
    return moment(date).format(dateFormat);
  }

  // public function used to format booking date
  formatBookingDate(date: any) {
    return this.formatDate(date, Booking.DATE_FORMAT);
  }

  // public function used to get booking range of dates
  getBookingRangeOfDates(startAt: string, endAt: string) {
    return this.getRangeOfDates(startAt, endAt, Booking.DATE_FORMAT);
  }

}
