import { Input, SecurityContext } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Input() user: User = {
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

  @Input() mode:string = ''

  constructor (private readonly sanitizer:NgDompurifySanitizer, private userSvc:UserService, private router:Router) { }

  ngOnInit(): void {
    this.user.avatar = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.user.avatar)
  }

  goToPosts(): void {
    console.log('Navigating to posts')
    //TODO: implement event emitter once posts page is made.
  }

  goToAlbums(): void {
    console.log('Navigating to albums')
    //TODO: implement event emitter once albums page is made.
  }

  goToTODOs(): void {
    console.log('Navigating to TODOs')
    //TODO: implement event emitter once TODOs page is made.
  }

  goToProfile(id:number): void {
    if (this.mode === 'foreign') {
      console.log(`Navigating to ${this.user.name}'s profile`)
      this.router.navigate(['/profile', id])
    }
  }

}
