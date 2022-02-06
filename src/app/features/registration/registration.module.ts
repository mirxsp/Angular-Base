import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
      RegistrationComponent
  ]
})
export class RegistrationModule { }
