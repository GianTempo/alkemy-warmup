import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor (
    private fb: FormBuilder,
    private authSvc:AuthService
  ) {
  }

  ngOnInit(): void {
  }

  signupForm = this.fb.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    mail: ['', Validators.compose([Validators.email, Validators.required])],
    website: ['', Validators.required],
    companyName: ['', Validators.required],
    companyCatchPhrase: ['', Validators.required]
  });

  onSaveForm(signupForm: FormGroup) {
    console.log(signupForm)
    this.authSvc.signup(signupForm)
    this.signupForm.reset()
  }


}
