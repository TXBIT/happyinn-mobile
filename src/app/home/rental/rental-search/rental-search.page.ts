import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Rental } from '../shared/rental.model';
import { RentalService } from '../shared/rental.service';

@Component({
  selector: 'app-rental-search',
  templateUrl: './rental-search.page.html',
  styleUrls: ['./rental-search.page.scss'],
})
export class RentalSearchPage implements OnInit {

  isLoading = false;
  city: string;
  rentals: Rental[] = [];
  errors = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private rentalService: RentalService
  ) { }

  ngOnInit() {
  }

  // when the view is about to be entered
  ionViewWillEnter() {
    this.isLoading = true;
    this.errors = [];
    this.rentals = [];
    this.activatedRoute.params.subscribe((params) => {
      this.city = params.city;
      this.rentalService.getRentalsByCityService(this.city).subscribe(
        (data: any) => {
          this.rentals = data;
          this.isLoading = false;
        },
        (errorResponse: HttpErrorResponse) => {
          this.errors = errorResponse.error.errors;
          this.isLoading = false;
        }
      );
    });
  }

}
