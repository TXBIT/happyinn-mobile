import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { RentalService } from './shared/rental.service';
import { Rental } from './shared/rental.model';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.page.html',
  styleUrls: ['./rental.page.scss']
})
export class RentalPage implements OnInit {

  isLoading = false;
  rentals: Rental[];
  @ViewChild('citySearch') searchBox: ElementRef;

  constructor(private router: Router, private rentalService: RentalService) {}

  ngOnInit() {
  }

  // when view is about to be entered
  ionViewWillEnter() {
    this.isLoading = true;
    this.searchBox.nativeElement.value = '';
    this.rentalService.getRentalsService().subscribe(
      (data: any) => {
        this.rentals = data;
        this.isLoading = false;
      },
      () => {}
    );
  }

  // search rental by city
  search(city: string) {
    city
      ? this.router.navigate([`/home/tabs/rentals/${city}/homes`])
      : this.router.navigate(['/home/tabs/rentals']);
  }
}
