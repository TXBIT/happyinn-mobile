import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  // get user by id
  getUserService(userId: string): Observable<any> {
    return this.http.get(`${environment.API_URL}/api/v1/users/${userId}`);
  }
}
