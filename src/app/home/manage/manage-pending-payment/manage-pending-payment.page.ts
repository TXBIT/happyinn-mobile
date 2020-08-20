import { Component, OnInit } from '@angular/core';

import { BookingService } from 'src/app/booking/shared/booking.service';
import { PaymentService } from './../../../payment/shared/payment.service';

import { Booking } from 'src/app/booking/shared/booking.model';

@Component({
  selector: 'app-manage-pending-payment',
  templateUrl: './manage-pending-payment.page.html',
  styleUrls: ['./manage-pending-payment.page.scss'],
})
export class ManagePendingPaymentPage implements OnInit {

  isLoading = false;
  bookings: Booking[] = [];
  payments: any[];

  constructor(
    private bookingService: BookingService,
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
  }

  // when the view is about to be entered
  ionViewWillEnter() {
    this.isLoading = true;
    this.paymentService.getPendingPaymentsService().subscribe(
      (payments: any) => {
        this.payments = payments;
        this.isLoading = false;
      },
      () => {}
    );
  }

  // accept payment
  acceptPayment(payment: any) {
    this.paymentService.acceptPaymentService(payment).subscribe(
      (data: any) => {
        payment.status = 'paid';
      },
      () => {}
    );
  }

  // decline payment
  declinePayment(payment: any) {
    this.paymentService.declinePaymentService(payment).subscribe(
      (data: any) => {
        payment.status = 'declined';
      },
      () => {}
    );
  }

}
