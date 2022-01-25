import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent, HeaderComponent, InfoComponent, ModalWindowComponent, SearchComponent } from './components';

const COMPONENTS = [ButtonComponent, HeaderComponent, InfoComponent, SearchComponent, ModalWindowComponent]
@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: COMPONENTS
})
export class SharedModule {
}
