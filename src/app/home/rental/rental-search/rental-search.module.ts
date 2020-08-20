import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RentalSearchPage } from './rental-search.page';

import { AppCommonModule } from './../../../app-common/app-common.module';

const routes: Routes = [
  {
    path: '',
    component: RentalSearchPage
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
  declarations: [RentalSearchPage]
})
export class RentalSearchPageModule {}
