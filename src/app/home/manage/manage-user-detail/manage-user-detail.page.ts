import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Component({
  selector: 'app-manage-user-detail',
  templateUrl: './manage-user-detail.page.html',
  styleUrls: ['./manage-user-detail.page.scss'],
})
export class ManageUserDetailPage implements OnInit {

  isLoading = false;
  user: any;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  // when the view is about to be entered
  ionViewWillEnter() {
    this.isLoading = true;
    const userId = this.authService.getUserId();
    this.userService.getUserService(userId).subscribe(
      (data: any) => {
        this.user = data;
        this.isLoading = false;
      },
      () => {}
    );
  }

}
