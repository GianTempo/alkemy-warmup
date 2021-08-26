import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API = `${environment.BASE_URL_API}/users`
  AVATARS_URL = `${environment.AVATARS_URL}`

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

  generateAvatar():Observable<any> {
    return this.http.get(`${this.AVATARS_URL}${Date.now().toString()}.svg`, {responseType: 'text'} )
  }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.URL_API)
  }

  setLoggedUser(user: User): void {
    this.generateAvatar().subscribe(res => {
      user.avatar = res
      localStorage.setItem('user', JSON.stringify(user));
    })
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
