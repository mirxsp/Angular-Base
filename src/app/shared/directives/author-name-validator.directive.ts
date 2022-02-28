import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[appAuthorNameValidator]',
})
export class AuthorNameValidator implements Validator {
    constructor() {}

    validate(control: AbstractControl): ValidationErrors | null {
        return ValidateAuthorName(control);
    }
}

export function ValidateAuthorName(control: AbstractControl) {
    if (control.value.length == 0) return null;
    const pattern = new RegExp('([a-z]|[A-Z]|[0-9])+(\\s([a-z]|[A-Z]|[0-9])+)*');
    const match = control.value.match(pattern);
    const valid = match == null ? false : match[0].length == control.value.length;
    return valid ? null : { authorName: { value: control.value } };
}
