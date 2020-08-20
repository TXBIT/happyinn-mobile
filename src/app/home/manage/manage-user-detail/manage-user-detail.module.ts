import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManageUserDetailPage } from './manage-user-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ManageUserDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManageUserDetailPage]
})
export class ManageUserDetailPageModule {}
