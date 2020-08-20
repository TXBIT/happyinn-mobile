import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  errors: any[] = [];
  notifyMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  // when component is created
  ngOnInit() {
    this.initForm();
    this.activatedRoute.params.subscribe((params) => {
      if (params.registered === 'success') {
        this.notifyMessage = 'You have been successfully registered. You can login now.';
      }
    });
  }

  // form initialization
  initForm() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          // tslint:disable-next-line: max-line-length
          Validators.pattern('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$')
        ]
      ],
      password: ['', Validators.required]
    });
  }

  // check if form is valid
  isInvalidForm(fieldName: any): boolean {
    return  this.loginForm.controls[fieldName].invalid &&
            (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }

  // check if field is required
  isRequired(fieldName: any): boolean {
    return this.loginForm.controls[fieldName].errors.required;
  }

  // check if field's format is valid
  isValidFormat(fieldName: any): boolean {
    return this.loginForm.controls[fieldName].errors.pattern;
  }

  // login function with success and error situations
  login() {
    this.errors = [];
    this.authService.loginAuthService(this.loginForm.value).subscribe(
      (successResponse) => {
        this.router.navigate(['/home/tabs/rentals']);
        this.initForm();
      },
      (errorResponse) => {
        this.errors.push(errorResponse.error.message);
      }
    );
  }

}
