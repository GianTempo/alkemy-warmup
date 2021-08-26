import { Injectable } from '@angular/core';
import { createAvatar } from '@dicebear/avatars'
import * as style from '@dicebear/avatars-avataaars-sprites'
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  
  constructor (
    private http: HttpClient
  ) { }

  generateAvatar() {
    let svg = createAvatar(style, { seed: Date.now().toLocaleString() })
    return svg
  }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.URL_API)
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
    return this.http.get<User>(`${this.URL_API}/${id}`)
  }
}
