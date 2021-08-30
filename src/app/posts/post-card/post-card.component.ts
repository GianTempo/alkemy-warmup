import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post: Post = {
    userId: 0,
    id: '',
    title: '',
    body: ''
  }
  @Input() mode: string = ''
  @Input() comments:Comment[] = []

  @Output() navigateToUser: EventEmitter<number> = new EventEmitter()
  @Output() navigateToComments: EventEmitter<string> = new EventEmitter()
  @Output() deletePost: EventEmitter<string> = new EventEmitter()
  @Output() editPost: EventEmitter<string> = new EventEmitter()
  @Output() selectPost: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  goToUser(id:number): void {
    this.navigateToUser.emit(id)
  }

  goToComments(id: string):void {
    this.navigateToComments.emit(id)
  }

  onDelete(title: string):void {
    this.deletePost.emit(title)
  }

  onSelect(title: string): void {
    this.selectPost.emit(title)
  }
}
