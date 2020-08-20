import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NgPipesModule } from 'ngx-pipes';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { FormatDatePipe } from './pipes/format-date.pipe';

@NgModule({
  declarations: [
    UppercasePipe,
    FormatDatePipe
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgPipesModule
  ],
  exports: [
    NgPipesModule,
    UppercasePipe,
    FormatDatePipe
  ]
})
export class AppCommonModule { }
