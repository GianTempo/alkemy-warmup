import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor (
    private fb: FormBuilder,
    private authSvc: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  unsuccesfullLogin: boolean = false;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
  })

  onSaveForm(loginForm: FormGroup) {
    let user = {
      username: loginForm.value.username,
      email: loginForm.value.email
    }
    this.authSvc.login(user).subscribe(res => {
      if (res === true) {
        console.log('true')
        this.unsuccesfullLogin = false;
        this.router.navigate(['/profile'])
      }
      else {
        this.unsuccesfullLogin = true;
      }
    });
    this.loginForm.reset()
  }
}
