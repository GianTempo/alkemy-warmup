import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post: Post = {
    userId: '',
    id: '',
    title: '',
    body: ''
  }
  @Input() mode:string = ''

  @Output() navigateToUser: EventEmitter<string> = new EventEmitter()
  @Output() navigateToComments: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  goToUser(id:string): void {
    this.navigateToUser.emit(id)
  }

  goToComments(id: string) {
    this.navigateToComments.emit(id)
  }

}
