import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { Comment } from 'src/app/models/comment.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {

  posts: Post[] = [];
  mode: string = '';
  comments: Comment[] = []
  post: Post = {
    userId: '',
    id: '',
    body: '',
    title: ''
  }

  constructor(private postSvc:PostService, private router:Router, private route: ActivatedRoute, private userSvc:UserService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      if (param.has('id')) {
        console.log('Route has id')
        this.mode = 'comments'
        let id = param.get('id') as string
        this.postSvc.getComments(id).subscribe(res => this.comments = res)
        this.postSvc.getPostById(id).subscribe(res => this.post = res)
      }
      else {
        this.postSvc.getPosts().subscribe(res => {
          let user = this.userSvc.getUser()
          this.posts = res.filter(post => Number(post.userId) !== user.id)
        }
        )
      }
    })
  }

  navigateToUser(e:string): void {
    this.router.navigate(['/profile', e])
  }

  navigateToComments(e: string) {
    this.router.navigate(['/post', e])
  }

}