import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from './review.model';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(
    private http: HttpClient
  ) { }

  // create review
  createReviewService(review: Review, bookingId: string): Observable<any> {
    return this.http.post(`${environment.API_URL}/api/v1/reviews?bookingId=${bookingId}`, review);
  }

  // get rental reviews
  getRentalReviewsService(rentalId: string): Observable<any> {
    return this.http.get(`${environment.API_URL}/api/v1/reviews?rentalId=${rentalId}`);
  }

  // get overall rating
  getOverallRatingService(rentalId: string): Observable<any> {
    return this.http.get(`${environment.API_URL}/api/v1/reviews/${rentalId}/rating`);
  }

}
