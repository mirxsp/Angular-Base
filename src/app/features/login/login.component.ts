import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
    // loginForm = new FormGroup({
    //     email: new FormControl(''),
    //     password: new FormControl('')
    // })
    emailValue = '';
    passwordValue = '';
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    //   console.warn(this.loginForm.get('email')?.errors)
  }
}
