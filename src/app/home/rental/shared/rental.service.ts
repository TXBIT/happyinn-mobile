import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Rental } from './rental.model';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(
    private http: HttpClient
  ) { }

  // get rentals
  getRentalsService(): Observable<any> {
    return this.http.get(`${environment.API_URL}/api/v1/rentals`);
  }

  // get rental by id
  getRentalByIdService(rentalId: string): Observable<any> {
    return this.http.get(`${environment.API_URL}/api/v1/rentals/${rentalId}`);
  }

  // get rentals by city
  getRentalsByCityService(city: string): Observable<any> {
    return this.http.get(`${environment.API_URL}/api/v1/rentals?city=${city}`);
  }

  // create rental
  createRentalService(rental: Rental): Observable<any> {
    return this.http.post(`${environment.API_URL}/api/v1/rentals`, rental);
  }

  // get user rentals
  getUserRentalsService(): Observable<any> {
    return this.http.get(`${environment.API_URL}/api/v1/rentals/manage`);
  }

  // delete rental
  deleteRentalService(rentalId: string): Observable<any> {
    return this.http.delete(`${environment.API_URL}/api/v1/rentals/${rentalId}`);
  }

  // update rental
  updateRentalService(rentalId: string, rentalData: any): Observable<any> {
    return this.http.patch(`${environment.API_URL}/api/v1/rentals/${rentalId}`, rentalData);
  }

  // verify rental
  verifyRentalUserService(rentalId: string): Observable<any> {
    return this.http.get(`${environment.API_URL}/api/v1/rentals/${rentalId}/verify-user`);
  }

}
