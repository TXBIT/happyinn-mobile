import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient
  ) { }

  // get pending payments
  getPendingPaymentsService(): Observable<any> {
    return this.http.get(`${environment.API_URL}/api/v1/payments`);
  }

  // accept payment
  acceptPaymentService(payment: any): Observable<any> {
    return this.http.post(`${environment.API_URL}/api/v1/payments/accept`, payment);
  }

  // decline payment
  declinePaymentService(payment: any): Observable<any> {
    return this.http.post(`${environment.API_URL}/api/v1/payments/decline`, payment);
  }

}
