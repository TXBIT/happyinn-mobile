import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ImageCropperModule } from 'ngx-image-cropper';

import { ImageUploadComponent } from './image-upload.component';

@NgModule({
  declarations: [
    ImageUploadComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule,
    ImageCropperModule
  ],
  exports: [
    ImageUploadComponent
  ]
})
export class ImageUploadModule { }
