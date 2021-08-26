import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  mode:string = ''

  constructor (
    private authSvc: AuthService,
    private userSvc: UserService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(param => {
      if (param.has('id')) { //Checks if the route has an id param that indicates that this page is not from the logged user
        let id = param.get('id') as string
        this.userSvc.getUserById(id).subscribe(user => {
          this.user = user
          this.user.avatar = this.userSvc.generateAvatar()
        })
        this.mode = 'foreign'
      }
      else {
        this.user = this.userSvc.getUser()
        this.mode = ''
      }
    })
  }

}
