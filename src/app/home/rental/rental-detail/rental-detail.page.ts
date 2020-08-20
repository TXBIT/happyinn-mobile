import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

import { ReviewService } from './../../../review/shared/review.service';
import { RentalService } from '../shared/rental.service';

import { Rental } from '../shared/rental.model';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.page.html',
  styleUrls: ['./rental-detail.page.scss'],
})
export class RentalDetailPage implements OnInit {

  isLoading = false;

  rental: Rental = new Rental();

  reviews: any[];

  rating: any;

  userId: any;

  // reviews = [
  //   {
  //     rating: '5',
  //     text: 'Review 5 stars'
  //   },
  //   {
  //     rating: '5',
  //     text: 'Review 5 stars'
  //   },
  //   {
  //     rating: '5',
  //     text: 'Review 5 stars'
  //   },
  //   {
  //     rating: '4',
  //     text: 'Review 4 stars'
  //   },
  //   {
  //     rating: '4',
  //     text: 'Review 4 stars'
  //   },
  //   {
  //     rating: '4',
  //     text: 'Review 4 stars'
  //   },
  //   {
  //     rating: '3',
  //     text: 'Review 3 stars'
  //   },
  // ];

  constructor(
    private route: ActivatedRoute,
    private rentalService: RentalService,
    private reviewService: ReviewService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  // when the view is about to be entered -> get rental, its reviews, its overall rating
  ionViewWillEnter() {
    this.isLoading = true;
    this.route.params.subscribe(
      (params) => {
        this.rentalService.getRentalByIdService(params.rentalId).subscribe(
          (data: any) => {
            this.rental = data.foundRental;

            this.reviewService.getRentalReviewsService(data.foundRental._id).subscribe(
              (reviewData: any) => {
                this.reviews = reviewData;

                this.reviewService.getOverallRatingService(data.foundRental._id).subscribe(
                  (ratingData: any) => {
                    this.rating = Math.round(ratingData * 10) / 10;
                    this.userId = this.authService.getUserId();
                    this.isLoading = false;
                  },
                  () => { }
                );
              },
              () => { }
            );

          },
          () => { }
        );
      }
    );
  }

  // format date to return time duration from now
  formatDate(date: string): string {
    return `${moment(date).fromNow()}`;
  }

}
