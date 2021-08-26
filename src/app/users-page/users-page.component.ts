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
      this.users = res
      this.users.forEach( user => user.avatar = this.userSvc.generateAvatar())
    })
  }

}
