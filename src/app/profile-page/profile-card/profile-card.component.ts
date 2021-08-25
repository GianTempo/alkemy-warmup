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
    },
    avatar:''
  }


  ngOnInit(): void {
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

}
