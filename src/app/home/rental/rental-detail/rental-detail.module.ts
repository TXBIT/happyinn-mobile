import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { IonicRatingModule } from 'ionic4-rating';

import { AppCommonModule } from './../../../app-common/app-common.module';
import { MapModule } from 'src/app/map/map.module';
import { ReviewModule } from './../../../review/review.module';

import { RentalDetailPage } from './rental-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RentalDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AppCommonModule,
    MapModule,
    ReviewModule,
    IonicRatingModule
  ],
  declarations: [RentalDetailPage]
})
export class RentalDetailPageModule {}
