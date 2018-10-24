import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  forgotForm: FormGroup;
  email: AbstractControl;
  emailForgot: AbstractControl;
  password: AbstractControl;
  loginMode = true;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      email: [
        '',
        [Validators.required, Validators.minLength(4), Validators.email]
      ],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
  }

  ngOnInit() {}

  onSubmit(form): void {
    console.log(form);
  }

  toggleForm(): void {
    this.loginMode = !this.loginMode;
    console.log(this.loginMode);
  }
}
