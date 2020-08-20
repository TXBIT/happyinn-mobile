import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImageUploadModule } from './../../../image-upload/image-upload.module';

import { RentalCreatePage } from './rental-create.page';

const routes: Routes = [
  {
    path: '',
    component: RentalCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ImageUploadModule
  ],
  declarations: [RentalCreatePage]
})
export class RentalCreatePageModule {}
