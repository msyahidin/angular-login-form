import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  forgotForm: FormGroup;
  email: AbstractControl;
  loginMode = true;
  @Output()
  modeChange = new EventEmitter();
  constructor(fb: FormBuilder) {
    this.forgotForm = fb.group({
      email: [
        '',
        [Validators.required, Validators.minLength(4), Validators.email]
      ]
    });
    this.email = this.forgotForm.controls['email'];
  }

  ngOnInit() {}

  onSubmit(): void {}

  backToLogin() {
    this.modeChange.emit('false');
  }
}
