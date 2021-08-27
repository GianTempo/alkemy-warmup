import { Input} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

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

  constructor (
    private router: Router) { }

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

  goToProfile(id:number): void {
    if (this.mode === 'foreign') {
      this.router.navigate(['/profile', id])
    }
  }

}
