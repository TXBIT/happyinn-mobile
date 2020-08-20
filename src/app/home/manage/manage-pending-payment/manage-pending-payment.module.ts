import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppCommonModule } from './../../../app-common/app-common.module';

import { ManagePendingPaymentPage } from './manage-pending-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ManagePendingPaymentPage
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
  declarations: [ManagePendingPaymentPage]
})
export class ManagePendingPaymentPageModule {}
