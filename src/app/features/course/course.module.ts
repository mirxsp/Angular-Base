import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
      CourseComponent
  ]
})
export class CourseModule { }
