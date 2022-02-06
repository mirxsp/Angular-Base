import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
    registrationForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl('')
    });

    constructor() {}

    ngOnInit(): void {}

    get name() { return this.registrationForm.get('name'); }
    get email() { return this.registrationForm.get('email'); }
    get password() { return this.registrationForm.get('password'); }
}
