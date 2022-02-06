import { Directive } from '@angular/core';
import {
    AbstractControl,
    NG_VALIDATORS,
    ValidationErrors,
    Validator
} from '@angular/forms';

@Directive({
    selector: '[appEmailValidator]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true },
    ],
})
export class EmailValidatorDirective implements Validator {

    validate(control: AbstractControl): ValidationErrors | null {
        return emailValidator(control);
    }
}
export function emailValidator(control: AbstractControl): ValidationErrors | null{
        const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const forbidden = control.value && !emailRe.test(control.value);
        return forbidden ? { email: { value: control.value } } : null;
}
