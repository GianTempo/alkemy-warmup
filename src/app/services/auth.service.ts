import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Axios from 'axios'
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL_API = 'https://jsonplaceholder.typicode.com/users'

  constructor (private router: Router) { }

  loggedUser:any

  login(user: { username: string, email: string }):Observable<boolean> {
    let users: any[] = []
    let success = new Observable<boolean>(observer => {
      Axios({
        method: 'get',
        url: this.URL_API,
      })
        .then(res => {
          users = res.data
          users.forEach((u) => {
            if (u.username === user.username && u.email === user.email) {
              this.loggedUser = u
              this.setLoggedUser(u)
            }
            if (this.loggedUser !== undefined) {
              observer.next(true)
              observer.complete()
            }
            else {
              observer.next(false)
              observer.complete()
            }
          })
          })
        })
    return success
  }

  logout(): void {
    localStorage.removeItem('user')
    this.loggedUser = undefined
    this.router.navigate(['/login'])
  }

  signup(user: User) {
    
  }

  setLoggedUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}