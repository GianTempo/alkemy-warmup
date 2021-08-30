import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../models/album.model';
import { Post } from '../models/post.model';
import { Todo } from '../models/todo.model';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

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
  isCrud:boolean = false

  constructor (
    private userSvc: UserService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(param => {
      if (param.has('id')) { //Checks if the route has an id param that indicates that this page is not from the logged user
        let id = param.get('id') as string
        this.userSvc.getUserById(id).subscribe(user => {
          this.user = user
          this.userSvc.generateAvatar().subscribe( res => this.user.avatar = res )
        })
        this.isCrud = false
      }
      else {
        this.user = this.userSvc.getUser()
        this.isCrud = true
      }
    })
  }

}
