import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
    ButtonComponent,
    HeaderComponent,
    InfoComponent,
    ModalWindowComponent,
    SearchComponent,
} from './components';
import { DurationPipe } from './pipes/duration.pipe';
import { IconsModule } from '../icons/icons.module';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
    DurationPipe,
    ButtonComponent,
    HeaderComponent,
    InfoComponent,
    SearchComponent,
    ModalWindowComponent,
    EmailValidatorDirective
];
@NgModule({
    declarations: COMPONENTS,
    imports: [CommonModule, FontAwesomeModule, FormsModule],
    exports: [COMPONENTS, CommonModule, IconsModule],
})
export class SharedModule {}
