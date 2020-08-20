import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(public toastController: ToastController) {}

  // show success toast
  async presentSuccessToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      position: 'top',
      duration: 4000,
      color: 'warning',
      cssClass: 'toastAfterHeader'
    });
    toast.present();
  }

  // show error toast
  async presentErrorToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      position: 'top',
      duration: 4000,
      color: 'warning',
      cssClass: 'toastAfterHeader'
    });
    toast.present();
  }
}
