import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formData: any = {};
  errors = [];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // register with success and error situations
  register() {
    this.errors = [];
    this.authService.registerAuthService(this.formData).subscribe(
      () => {
        this.router.navigate(['/auth/login', {
          registered: 'success'
        }]);
      },
      (errorResponse) => {
        if (errorResponse.error.title === 'password') {
          this.errors.push('Invalid Password');
        } else {
          this.errors.push(errorResponse.error.message);
        }
      }
    );
  }

}
