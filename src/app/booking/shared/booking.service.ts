import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from './booking.model';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) {}

  // create booking
  createBookingService(booking: Booking): Observable<any> {
    return this.http.post(`${environment.API_URL}/api/v1/bookings`, booking);
  }

  // get user booking
  getUserBookingsService(): Observable<any> {
    return this.http.get(`${environment.API_URL}/api/v1/bookings/manage`);
  }

}
