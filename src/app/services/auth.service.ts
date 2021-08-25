import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Axios from 'axios'
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor (
    private router: Router,
    private usrSvc: UserService,
  ) { }

  login(user: { username: string, email: string }):Observable<boolean> {
    let users: User[] = []
    this.usrSvc.getUsers().subscribe(res => users = res)
    let success = new Observable<boolean>(observer => {
          users.forEach((u) => {
            if (u.username === user.username && u.email === user.email) {
              this.usrSvc.setLoggedUser(u)
              observer.next(true)
              observer.complete()
            }
            else {
              observer.next(false)
              observer.complete()
            }
          })
          })
    return success
  }

  logout(): void {
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
  }

  signup(user: any): void {
    this.usrSvc.setLoggedUser(user)
    this.router.navigate([''])
  }

}