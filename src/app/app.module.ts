import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesModule } from './features/courses/courses.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginModule } from './features/login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationModule } from './features/registration/registration.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CoursesModule,
        FontAwesomeModule,
        LoginModule,
        RegistrationModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
