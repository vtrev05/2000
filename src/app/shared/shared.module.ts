import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title-component/title.component';
import { ImageComponent } from './components/image-component/image.component';
import { ButtonComponent } from './components/button-component/button.component';
import { CollapseComponent } from './components/collapse-component/collapse.component';
import { ModalComponent } from './components/modal-component/modal.component';




@NgModule({
  declarations: [
    TitleComponent,
    ImageComponent,
    ButtonComponent,
    CollapseComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
