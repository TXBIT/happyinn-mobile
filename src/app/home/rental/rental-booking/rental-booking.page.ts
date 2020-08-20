import { Booking } from './../../../booking/shared/booking.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DaterangePickerComponent } from 'ng2-daterangepicker';

import { Rental } from '../shared/rental.model';

import { RentalService } from '../shared/rental.service';
import { HelperService } from 'src/app/app-common/service/helper.service';
import { BookingService } from './../../../booking/shared/booking.service';
import { ToastService } from './../../../app-common/service/toast.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-rental-booking',
  templateUrl: './rental-booking.page.html',
  styleUrls: ['./rental-booking.page.scss'],
})
export class RentalBookingPage implements OnInit {

  isLoading = false;
  rental: Rental = new Rental();
  bookings: Booking[] = [];

  @ViewChild(DaterangePickerComponent)
  private picker: DaterangePickerComponent;

  newBooking: Booking = new Booking();
  modalRef: any;
  errors: any[] = [];

  daterange: any = {};
  bookedOutDates: any[] = [];

  options: any = {
    locale: {
      format: Booking.DATE_FORMAT
    },
    alwaysShowCalendars: false,
    opens: 'left',
    autoUpdateInput: false,
    isInvalidDate: this.checkForInvalidDates.bind(this)
  };

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router,
    private nav: NavController,
    private rentalService: RentalService,
    private helperService: HelperService,
    private bookingService: BookingService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
  }

  // when the view is about to be entered
  ionViewWillEnter() {
    this.getBookedOutDates();
  }

  // check if dates are valid
  private checkForInvalidDates(date: any) {
    return this.bookedOutDates.includes(this.helperService.formatBookingDate(date)) || date.diff(moment(), 'days') < 0;
  }

  // get unavailable dates
  private getBookedOutDates() {
    this.isLoading = true;
    // this.newBooking = new Booking();
    this.route.params.subscribe(
      (params) => {
        this.rentalService.getRentalByIdService(params.rentalId).subscribe(
          (data: any) => {
            this.rental = data.foundRental;
            this.bookings = this.rental.bookings;

            this.bookings.forEach((booking: Booking) => {
              const rangeOfDates = this.helperService.getBookingRangeOfDates(booking.startAt, booking.endAt);
              this.bookedOutDates.push(...rangeOfDates);
            });
            this.isLoading = false;
          }
        );
      }
    );
  }

  // add new unavailable dates
  private addNewBookedDates(bookingData: any) {
    const rangeOfDates = this.helperService.getBookingRangeOfDates(bookingData.startAt, bookingData.endAt);
    this.bookedOutDates.push(...rangeOfDates);
  }

  // reset date picker form
  private resetDatePicker() {
    this.picker.datePicker.setStartDate(moment());
    this.picker.datePicker.setEndDate(moment());
    this.picker.datePicker.element.val('');
  }

  // show the dates user selected
  selectedDate(value: any, datepicker?: any) {
    // // this is the date the user selected
    // console.log(value);

    // // any object can be passed to the selected event and it will be passed back here
    // datepicker.start = value.start;
    // datepicker.end = value.end;

    // // or manipulate your own internal property
    // this.daterange.start = value.start;
    // this.daterange.end = value.end;
    // this.daterange.label = value.label;

    this.options.autoUpdateInput = true;
    this.newBooking.startAt = this.helperService.formatBookingDate(value.start);
    this.newBooking.endAt = this.helperService.formatBookingDate(value.end);
    this.newBooking.days = -(value.start.diff(value.end, 'days'));
    this.newBooking.totalPrice = this.newBooking.days * this.rental.dailyRate;
  }

  // open confirm modal
  openConfirmModal(content: any) {
    this.errors = [];
    this.modalRef = this.modalService.open(content);
  }

  // payment confirm handler
  onPaymentConfirmed(paymentToken: any) {
    this.newBooking.paymentToken = paymentToken;
  }

  // create new booking with success and error situations
  createBooking() {
    this.errors = [];
    this.newBooking.rental = this.rental;
    this.bookingService.createBookingService(this.newBooking).subscribe(
      (bookingData: any) => {
        this.addNewBookedDates(bookingData);
        this.newBooking = new Booking();
        this.modalRef.close();
        this.resetDatePicker();
        this.nav.navigateRoot(['/home/tabs/rentals']);
        this.toastService.presentSuccessToast('Booking successfully created. You can check your booking details in the manage section.');
      },
      (errorResponse: any) => {
        this.errors.push(errorResponse.error);
      }
    );
  }

}
