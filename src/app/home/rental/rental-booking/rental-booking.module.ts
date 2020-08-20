import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Daterangepicker } from 'ng2-daterangepicker';

import { PaymentModule } from './../../../payment/payment.module';

import { RentalBookingPage } from './rental-booking.page';

const routes: Routes = [
  {
    path: '',
    component: RentalBookingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    Daterangepicker,
    PaymentModule
  ],
  declarations: [RentalBookingPage]
})
export class RentalBookingPageModule {}
