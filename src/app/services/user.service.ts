import { Injectable } from '@angular/core';
import Axios from 'axios'
import { createAvatar } from '@dicebear/avatars'
import * as style from '@dicebear/avatars-avataaars-sprites'
import { DomSanitizer } from '@angular/platform-browser';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API = 'https://jsonplaceholder.typicode.com/users'
  loggedUser: User = {
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
  constructor (private sanitizer: DomSanitizer) { }

  generateAvatar() {
    let svg = createAvatar(style, { seed: Date.now().toLocaleString() })
    let avatar = this.sanitizer.bypassSecurityTrustHtml(svg)
    return avatar
  }

  getUsers():Observable<User[]> {
    let users = new Observable<User[]>(observer => {
      Axios({
        method: 'get',
        url: this.URL_API,
      })
        .then(res => {
          observer.next(res.data)
          observer.complete();
        })
    })
      return users
  }

  setLoggedUser(user: User): void {
    user.avatar = this.generateAvatar()
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User {
    const loggedUser = localStorage.user;
    const user = JSON.parse(loggedUser)
    return user;
  }

  getUserById(id:string): Observable<User> {
    let user = new Observable<User>(observer => {
      Axios({
        method: 'get',
        url: `${this.URL_API}/${id}`,
      })
        .then(res => {
          observer.next(res.data)
          observer.complete()
        })
    })
      return user
  }
}
