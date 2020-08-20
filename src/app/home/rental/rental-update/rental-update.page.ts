import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UcWordsPipe } from 'ngx-pipes';

import { ToastService } from './../../../app-common/service/toast.service';
import { RentalService } from '../shared/rental.service';

import { Rental } from '../shared/rental.model';

@Component({
  selector: 'app-rental-update',
  templateUrl: './rental-update.page.html',
  styleUrls: ['./rental-update.page.scss'],
})
export class RentalUpdatePage implements OnInit {

  rental: Rental = new Rental();

  rentalCategories: string[] = Rental.CATEGORIES;

  locationSubject: Subject<any> = new Subject();

  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rentalService: RentalService,
    private toastService: ToastService,
    private upperPipe: UcWordsPipe
  ) {
    this.transformLocation = this.transformLocation.bind(this);
  }

  ngOnInit() {
  }

  // when the view is about to be entered
  ionViewWillEnter() {
    this.isLoading = true;
    this.route.params.subscribe(
      (params) => {
        this.rentalService.getRentalByIdService(params.rentalId).subscribe(
          (data: any) => {
            this.rental = data.foundRental;
            this.isLoading = false;
          },
          () => {}
        );
      }
    );
  }

  // capitalize location
  transformLocation(location: string): string {
    return this.upperPipe.transform(location);
  }

  // update rental
  updateRental(rentalId: string, rentalData: any) {
    if (rentalData.city || rentalData.street) {
      // window.location.reload();
      // this.router.navigate(['/home/tabs/rentals/', this.rental._id, 'edit']);
      this.router.navigate(['/home/tabs/manage/rentals']);
    }
    this.rentalService.updateRentalService(rentalId, rentalData).subscribe(
      (data: any) => {
        this.rental = data;
        if (data.city || data.street) {
          this.locationSubject.next(this.rental.city + ', ' + this.rental.street);
        }
      },
      (errorResponse: HttpErrorResponse) => {
        this.toastService.presentErrorToast(errorResponse.error[0].message);
        this.isLoading = true;
        this.route.params.subscribe(
          (params) => {
            this.rentalService.getRentalByIdService(params.rentalId).subscribe(
              (data: any) => {
                this.rental = data.foundRental;
                this.isLoading = false;
              },
              () => {}
            );
          }
        );
      }
    );
  }

  // calculate number of guests and beds
  countBedroomsAssets(assetsNum: number) {
    return parseInt(this.rental.bedrooms as any || 0, 10) + assetsNum;
  }

}
