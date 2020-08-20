import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ImageUploadService } from './image-upload.service';
import { ToastService } from './../app-common/service/toast.service';

class FileSnippet {

  static readonly IMAGE_SIZE = { width: 750, height: 420 };
  pending = false;
  status = 'INIT';

  constructor(
    public src: string,
    public file: File
  ) { }

}

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {

  @Output() imageUploaded = new EventEmitter();

  @Output() imageError = new EventEmitter();

  @Output() imageLoadedToContainer = new EventEmitter();

  @Output() croppingCanceled = new EventEmitter();

  selectedFile: FileSnippet;
  imageChangedEvent: any;

  constructor(
    private imageUploadService: ImageUploadService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
  }

  // successful upload
  private onSuccess(imageUrl: string) {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'OK';
    this.imageChangedEvent = null;
    this.imageUploaded.emit(imageUrl);
  }

  // failed upload
  private onFailure() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'FAIL';
    this.imageChangedEvent = null;
    this.imageError.emit('');
  }

  // crop image
  imageCropped(file: File): FileSnippet | File {
    if (this.selectedFile) {
      return this.selectedFile.file = file;
    }
    return this.selectedFile = new FileSnippet('', file);
  }

  // load image
  imageLoaded() {
    this.imageLoadedToContainer.emit();
  }

  // cancel cropping image
  cancelCropping() {
    this.imageChangedEvent = null;
    this.croppingCanceled.emit();
  }

  // process uploaded file
  processFile(event: any) {
    this.selectedFile = undefined;

    const URL = window.URL;
    // tslint:disable-next-line: one-variable-per-declaration
    let file: any, img: any;

    // tslint:disable-next-line: no-conditional-assignment
    if ((file = event.target.files[0]) && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      img = new Image();
      const self = this;

      // tslint:disable-next-line: only-arrow-functions
      img.onload = function () {
        if (
          this.width > FileSnippet.IMAGE_SIZE.width &&
          this.height > FileSnippet.IMAGE_SIZE.height
        ) {
          self.imageChangedEvent = event;
        } else {
          self.toastService.presentErrorToast(
            `Min width is ${FileSnippet.IMAGE_SIZE.width} and min height is ${FileSnippet.IMAGE_SIZE.height}`
          );
        }
      };

      img.src = URL.createObjectURL(file);

    } else {
      this.toastService.presentErrorToast(
        'Unsupported file type. Only jpeg and png are allowed!'
      );
    }
  }

  // upload image
  uploadImage() {
    if (this.selectedFile) {
      const reader = new FileReader();

      reader.addEventListener('load', (event: any) => {
        this.selectedFile.src = event.target.result;

        this.selectedFile.pending = true;
        this.imageUploadService.uploadImageService(this.selectedFile.file).subscribe(
          (imageUrl: string) => {
            this.onSuccess(imageUrl);
          },
          (errorResponse: HttpErrorResponse) => {
            this.toastService.presentErrorToast(errorResponse.error[0].message);
            this.onFailure();
          }
        );
      });

      reader.readAsDataURL(this.selectedFile.file);
    }
  }

}
