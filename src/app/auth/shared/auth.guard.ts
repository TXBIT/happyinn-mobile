import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private url: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  // user is authorized
  private handleAuthState(): boolean {
    if (this.isLoginOrRegister()) {
      this.router.navigate(['/home/tabs/rentals']);
      return false;
    }
    return true;
  }

  // user is not authorized
  private handleNotAuthState(): boolean {
    if (this.isLoginOrRegister()) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }

  // check if user is logged in or not
  private isLoginOrRegister(): boolean {
    if (this.url.includes('login') || this.url.includes('register')) {
      return true;
    }
    return false;
  }

  // guard that will intercept a route
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.url = state.url;

    if (this.authService.isAuthenticated()) {
      return this.handleAuthState();
    }

    return this.handleNotAuthState();

    // return this.checkLogin(url);
  }

  // checkLogin(url: string): boolean {
  //   if (this.authService.isLoggedIn) return true;

  //   // store the attempted URL for redirecting
  //   this.authService.redirectUrl = url;

  //   // navigate to the login page with extras
  //   this.router.navigate(['/auth/login']);

  //   return false;
  // }

}
