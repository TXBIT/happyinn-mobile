import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { BookingService } from 'src/app/booking/shared/booking.service';

import { Booking } from 'src/app/booking/shared/booking.model';

import { Review } from './../../../review/shared/review.model';

@Component({
  selector: 'app-manage-booking',
  templateUrl: './manage-booking.page.html',
  styleUrls: ['./manage-booking.page.scss'],
})
export class ManageBookingPage implements OnInit {

  isLoading = false;
  bookings: Booking[] = [];
  payments: any[];

  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit() {
  }

  // when view is about to be entered
  ionViewWillEnter() {
    this.isLoading = true;
    this.bookingService.getUserBookingsService().subscribe(
      (data: any) => {
        this.bookings = data;
        this.isLoading = false;
      },
      () => {}
    );
  }

  // check if booking is expired
  isExpired(endAtText: string) {
    const timeNow = moment();
    const endAt = moment(endAtText);

    return endAt.isBefore(timeNow); // booking is expired
  }

  // submit review
  reviewPublished(bookingIndex: number, review: Review) {
    this.bookings[bookingIndex].review = review;
  }

}
