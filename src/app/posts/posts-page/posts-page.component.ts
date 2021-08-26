import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postSvc:PostService, private router:Router) { }

  ngOnInit(): void {
    this.postSvc.getPosts().subscribe(res => {
      this.posts = res
    })
  }

  navigateToUser(e:string): void {
    this.router.navigate(['/profile', e])
  }

  navigateToComments(e: string) {
    console.log(e)
  }

}
