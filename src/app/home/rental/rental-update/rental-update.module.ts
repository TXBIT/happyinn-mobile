import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UcWordsPipe } from 'ngx-pipes';

import { IonicModule } from '@ionic/angular';

import { AppCommonModule } from './../../../app-common/app-common.module';
import { MapModule } from 'src/app/map/map.module';
import { EditableModule } from 'src/app/editable/editable.module';

import { RentalUpdatePage } from './rental-update.page';

const routes: Routes = [
  {
    path: '',
    component: RentalUpdatePage
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
    EditableModule
  ],
  declarations: [
    RentalUpdatePage
  ],
  providers: [
    UcWordsPipe
  ]
})
export class RentalUpdatePageModule {}
