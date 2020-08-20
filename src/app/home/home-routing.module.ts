import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RentalGuard } from './rental/shared/rental.guard';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'rentals',
        children: [
          {
            path: '',
            loadChildren: './rental/rental.module#RentalPageModule'
          },
          {
            path: 'new',
            loadChildren: './rental/rental-create/rental-create.module#RentalCreatePageModule'
          },
          {
            path: ':rentalId/edit',
            loadChildren: './rental/rental-update/rental-update.module#RentalUpdatePageModule',
            canActivate: [ RentalGuard ]
          },
          {
            path: ':rentalId/booking',
            loadChildren: './rental/rental-booking/rental-booking.module#RentalBookingPageModule'
          },
          {
            path: ':rentalId',
            loadChildren: './rental/rental-detail/rental-detail.module#RentalDetailPageModule'
          },
          {
            path: ':city/homes',
            loadChildren: './rental/rental-search/rental-search.module#RentalSearchPageModule'
          }
        ]
      },
      {
        path: 'manage',
        children: [
          {
            path: '',
            loadChildren: './manage/manage.module#ManagePageModule'
          },
          {
            path: 'rentals',
            loadChildren: './manage/manage-rental/manage-rental.module#ManageRentalPageModule'
          },
          {
            path: 'pending-payments',
            loadChildren: './manage/manage-pending-payment/manage-pending-payment.module#ManagePendingPaymentPageModule'
          },
          {
            path: 'bookings',
            loadChildren: './manage/manage-booking/manage-booking.module#ManageBookingPageModule'
          },
          {
            path: 'user-details',
            loadChildren: './manage/manage-user-detail/manage-user-detail.module#ManageUserDetailPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/tabs/rentals',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/tabs/rentals',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}
