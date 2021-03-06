import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor (
    private router: Router,
    private usrSvc: UserService
  ) { }

  login(user: { username: string, email: string }):Observable<boolean> {
    let users: User[] = []
    let success = new Observable<boolean>(observer => {
      this.usrSvc.getUsers().subscribe(res => {
        users = res
        users.forEach((u) => {
          if (u.username === user.username && u.email === user.email) {
            this.usrSvc.setLoggedUser(u)
            this.router.navigate(['/'])
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
    this.router.navigate(['/login'])
  }

  signup(user: any): void {
    const { name, username, mail, website, company: {
      name: companyName,
      catchPhrase: companyCatchPhrase
    } } = user
    let newUser = {
      id: 11,
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: ''
        }
      },
      phone: '',
      avatar: '',
      name: name,
      username: username,
      email: mail,
      website: website,
      company: {
        name: companyName,
        catchPhrase: companyCatchPhrase,
        bs: ''
      }
    }
    this.usrSvc.setLoggedUser(newUser)
    this.router.navigate([''])
  }

}