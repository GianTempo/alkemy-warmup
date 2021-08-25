import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { ProfilePageModule } from './profile-page.module'

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user:User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address:{
      street: '',
      city: '',
      suite: '',
      zipcode: '',
      geo: {
        lat: '',
        lng:''
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    },
    avatar:''
  }

  constructor (
    private authSvc: AuthService,
    private userSvc: UserService,
  ) { }

  ngOnInit(): void {
    this.user = this.userSvc.getUser()
  }

}
