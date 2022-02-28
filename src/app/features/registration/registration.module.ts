import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
      RegistrationComponent
  ]
})
export class RegistrationModule { }
