import { Component } from '@angular/core';
import { EditableComponent } from './../editable.component';

@Component({
  selector: 'app-editable-image',
  templateUrl: './editable-image.component.html',
  styleUrls: ['./editable-image.component.scss'],
})
export class EditableImageComponent extends EditableComponent {

  // handle image upload
  handleImageUpload(imageUrl: string) {
    this.entity[this.entityField] = imageUrl;
    this.updateEntity();
  }

  // handle image error
  handleImageError(event: any) {
    this.cancelUpdate();
  }

  // handle image load
  handleImageLoad() {
    this.isActiveInput = true;
  }

}
