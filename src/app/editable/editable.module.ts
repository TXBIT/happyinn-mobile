import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { EditableInputComponent } from './editable-input/editable-input.component';
import { EditableTextareaComponent } from './editable-textarea/editable-textarea.component';
import { EditableSelectComponent } from './editable-select/editable-select.component';
import { EditableImageComponent } from './editable-image/editable-image.component';

// modules
import { ImageUploadModule } from './../image-upload/image-upload.module';

@NgModule({
  declarations: [
    EditableInputComponent,
    EditableTextareaComponent,
    EditableSelectComponent,
    EditableImageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ImageUploadModule
  ],
  exports: [
    EditableInputComponent,
    EditableTextareaComponent,
    EditableSelectComponent,
    EditableImageComponent
  ]
})
export class EditableModule { }
