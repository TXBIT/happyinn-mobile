import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppCommonModule } from './../../../app-common/app-common.module';
import { ReviewModule } from './../../../review/review.module';

import { ManageBookingPage } from './manage-booking.page';

const routes: Routes = [
  {
    path: '',
    component: ManageBookingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AppCommonModule,
    ReviewModule
  ],
  declarations: [
    ManageBookingPage
  ]
})
export class ManageBookingPageModule {}
