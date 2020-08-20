import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppCommonModule } from './../../../app-common/app-common.module';

import { ManageRentalPage } from './manage-rental.page';

import { ManageRentalBookingComponent } from './manage-rental-booking/manage-rental-booking.component';

const routes: Routes = [
  {
    path: '',
    component: ManageRentalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AppCommonModule
  ],
  declarations: [
    ManageRentalPage,
    ManageRentalBookingComponent
  ]
})
export class ManageRentalPageModule {}
