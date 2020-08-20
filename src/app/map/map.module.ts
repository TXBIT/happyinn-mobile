import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AgmCoreModule } from '@agm/core';

import { MapComponent } from './map.component';
import { environment } from './../../environments/environment';


@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_MAP_API_KEY
    })
  ]
})
export class MapModule { }
