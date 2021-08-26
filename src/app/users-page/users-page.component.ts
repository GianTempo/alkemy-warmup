import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  constructor (private userSvc: UserService) { }

  users: User[] = []

  ngOnInit(): void {
    this.userSvc.getUsers().subscribe(res => {
      let user = this.userSvc.getUser()
      this.users = res.filter( usr => usr.id !== user.id)
      this.users.forEach(user => this.userSvc.generateAvatar().subscribe( res => {
        user.avatar = res
      }))
    })
  }

}
