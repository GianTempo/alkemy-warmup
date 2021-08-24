import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
  })

  onSaveForm(loginForm: FormGroup) {
    console.log(loginForm)
    this.loginForm.reset()
  }
}
