import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { IonicRatingModule } from 'ionic4-rating';

import { ReviewComponent } from './review.component';

@NgModule({
  declarations: [
    ReviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    IonicRatingModule
  ],
  exports: [
    ReviewComponent
  ]
})
export class ReviewModule { }
