import { ɵSafeUrl } from '@angular/core';
import { Input } from '@angular/core';
import { ɵSafeResourceUrl } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeStyle, SafeUrl } from '@angular/platform-browser';
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
    }
  }
  avatar:ɵSafeResourceUrl = ''
  constructor (private userSvc: UserService,
  private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    let avatar = this.userSvc.generateAvatar()
    this.avatar = this.sanitizer.bypassSecurityTrustHtml(avatar)
    console.log(this.user)
  }

}
