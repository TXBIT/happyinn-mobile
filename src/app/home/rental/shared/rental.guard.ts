import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { RentalService } from './rental.service';

@Injectable({
  providedIn: 'root'
})
export class RentalGuard implements CanActivate {

  private url: string;

  constructor(
    private rentalService: RentalService,
    private router: Router
  ) { }

  // guard that will intercept a route
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const rentalId: string = route.params.rentalId;
    return this.rentalService.verifyRentalUserService(rentalId).pipe(
      map(() => {
        return true;
      }),
      catchError((err) => {
        this.router.navigate(['/home/tabs/rentals']);
        return of(err);
      })
    );
  }

}
