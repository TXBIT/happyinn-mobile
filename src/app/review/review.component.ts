import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ReviewService } from './shared/review.service';

import { Review } from './shared/review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {

  @Input() bookingId: string;

  @Output() reviewSubmitted = new EventEmitter();

  modalRef: any;

  review: Review = {
    text: '',
    rating: 3
  };

  errors: any[];

  constructor(
    private modalService: NgbModal,
    private reviewService: ReviewService
  ) { }

  ngOnInit() {
  }

  // handle rating change
  handleRatingChange(event: any) {
    this.review.rating = event;
  }

  // open review modal
  openReviewModal(content: any) {
    this.modalRef = this.modalService.open(content);
  }

  // confirm review
  confirmReview() {
    this.errors = [];
    this.reviewService.createReviewService(this.review, this.bookingId).subscribe(
      (data: any) => {
        this.reviewSubmitted.emit(data);
        this.modalRef.close();
      },
      (errorResponse: HttpErrorResponse) => {
        this.errors = errorResponse.error.errors[0];
      }
    );
  }

}
