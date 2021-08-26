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
    console.log('Accesing to profile')
    this.activeRoute.paramMap.subscribe(param => {
      console.log('Checking param')
      if (param.has('id')) { //Checks if the route has an id param that indicates that this page is not from the logged user
        console.log('There is param')
        let id = param.get('id') as string
        this.userSvc.getUserById(id).subscribe(user => {
          this.user = user
          console.log(user)
        })
        this.mode = 'foreign'
      }
      else {
        console.log('There is not param')
        this.user = this.userSvc.getUser()
        console.log(this.user)
        this.mode = ''
      }
    })
  }

}
