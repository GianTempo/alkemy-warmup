import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor (private fb: FormBuilder) {
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

  createForm() {
    return new FormGroup({
      name: new FormControl(''),
      username: new FormControl(''),
      mail: new FormControl(''),
      website: new FormControl(''),
      companyName: new FormControl(''),
      companyCatchPhrase: new FormControl('')
    })
  }

  onResetForm() {
    this.signupForm.reset()
  }

  onSaveForm(signupForm: FormGroup) {
    console.log(signupForm)
    this.onResetForm()
  }


}