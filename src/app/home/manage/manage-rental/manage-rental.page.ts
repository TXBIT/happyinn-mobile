import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { RentalService } from '../../rental/shared/rental.service';
import { ToastService } from './../../../app-common/service/toast.service';

import { Rental } from '../../rental/shared/rental.model';

@Component({
  selector: 'app-manage-rental',
  templateUrl: './manage-rental.page.html',
  styleUrls: ['./manage-rental.page.scss'],
})
export class ManageRentalPage implements OnInit {

  isLoading = false;
  rentals: Rental[] = [];
  rentalDeleteIndex: number;

  constructor(
    private router: Router,
    private rentalService: RentalService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
  }

  // when the view is about to be entered
  ionViewWillEnter() {
    this.isLoading = true;
    this.rentalService.getUserRentalsService().subscribe(
      (data: any) => {
        this.rentals = data;
        this.isLoading = false;
      },
      () => {}
    );
  }

  // delete rental
  deleteRental(rentalId: string) {
    this.isLoading = true;
    this.rentalService.deleteRentalService(rentalId).subscribe(
      () => {
        this.rentals.splice(this.rentalDeleteIndex, 1);
        this.rentalDeleteIndex = undefined;
        this.isLoading = false;
      },
      (errorResponse: HttpErrorResponse) => {
        this.toastService.presentErrorToast(errorResponse.error.errors[0].message);
        this.isLoading = false;
      }
    );
  }

}
