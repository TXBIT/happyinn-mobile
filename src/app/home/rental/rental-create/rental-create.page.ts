import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';

import { Rental } from '../shared/rental.model';
import { RentalService } from '../shared/rental.service';

@Component({
  selector: 'app-rental-create',
  templateUrl: './rental-create.page.html',
  styleUrls: ['./rental-create.page.scss'],
})
export class RentalCreatePage implements OnInit {

  isLoading = false;
  newRental: Rental = new Rental();
  rentalCategories = Rental.CATEGORIES;
  errors: any[] = [];

  constructor(
    private nav: NavController,
    private rentalService: RentalService
  ) { }

  ngOnInit() {
  }

  // when the view is about to be entered
  ionViewWillEnter() {
    this.isLoading = true;
    this.newRental = new Rental();
    this.newRental.shared = false;
    this.isLoading = false;
  }

  // handle image uploade
  handleImageUpload(imageUrl: string) {
    this.newRental.image = imageUrl;
  }

  // handle image error
  handleImageError() {
    this.newRental.image = '';
  }

  // handleImageChange() {
  //   this.newRental.image = 'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/13/image.jpeg';
  // }

  // create new rental with success and error situations
  createRental() {
    this.errors = [];
    this.rentalService.createRentalService(this.newRental).subscribe(
      (data: any) => {
        this.nav.navigateRoot([`home/tabs/rentals/${data._id}`]);
        // this.router.navigate([`home/tabs/rentals/${data._id}`]);
      },
      (errorResponse: HttpErrorResponse) => {
        this.errors = errorResponse.error;
      }
    );
  }

}
