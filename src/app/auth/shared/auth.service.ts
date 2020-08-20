import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';

import { environment } from './../../../environments/environment';

const jwt = new JwtHelperService();

class DecodedToken {
  exp = 0;
  username = '';
  email = '';
  rentals = [];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private decodedToken: any;

  // constructor with decoded token
  constructor(private http: HttpClient) {
    this.decodedToken = JSON.parse(localStorage.getItem('happy_inn_mobile_meta')) || new DecodedToken();
  }

  // save token
  private saveTokenAuthService(data: any): string {
    this.decodedToken = jwt.decodeToken(data.token);
    localStorage.setItem('happy_inn_mobile_auth', data.token);
    localStorage.setItem('happy_inn_mobile_meta', JSON.stringify(this.decodedToken));
    return data;
  }

  // get token expiration
  private getExpiration(timeInMilliseconds: number) {
    return moment.unix(timeInMilliseconds);
  }

  // register user
  registerAuthService(userData: any): Observable<any> {
    return this.http.post(`${environment.API_URL}/api/v1/users/register`, userData);
  }

  // login user
  loginAuthService(userData: any): Observable<any> {
    return this.http.post(`${environment.API_URL}/api/v1/users/auth`, userData).pipe(
      map((data: any) => {
        return this.saveTokenAuthService(data);
      })
    );
  }

  // logout user
  logoutAuthService() {
    localStorage.removeItem('happy_inn_mobile_auth');
    localStorage.removeItem('happy_inn_mobile_meta');

    this.decodedToken = new DecodedToken();
  }

  // check if token is valid
  isAuthenticated(): boolean {
    return moment().isBefore(this.getExpiration(this.decodedToken.exp));
  }

  // get token from local storage by key
  getAuthTokenAuthService(): string {
    return localStorage.getItem('happy_inn_mobile_auth');
  }

  // get user info
  getUserInfoService() {
    return this.decodedToken;
  }

  // get user id
  getUserId(): string {
    return this.decodedToken.userId;
  }

}
