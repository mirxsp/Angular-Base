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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreationDatePipe } from './pipes/creation-date.pipe';
import { StringJoinerPipe } from './pipes/string-joiner.pipe';

const COMPONENTS = [
    DurationPipe,
    CreationDatePipe,
    StringJoinerPipe,
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
    exports: [COMPONENTS, CommonModule, IconsModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
