import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent, HeaderComponent, InfoComponent, ModalWindowComponent, SearchComponent } from './components';
import { DurationPipe } from './pipes/duration.pipe';

const COMPONENTS = [DurationPipe, ButtonComponent, HeaderComponent, InfoComponent, SearchComponent, ModalWindowComponent]
@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
      COMPONENTS,
      CommonModule
  ]
})
export class SharedModule {

}
