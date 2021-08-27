import { Component, Input, OnInit } from '@angular/core';
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
  originalPosts: Post[] = [];
  comments: Comment[] = []
  post: Post = {
    userId: '',
    id: '',
    body: '',
    title: ''
  }
  
  @Input() userId: number | null = null
  @Input()mode: string = ''

  constructor (
    private postSvc: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private userSvc: UserService) { }

  ngOnInit(): void {
    if (this.userId === null) {
      this.route.paramMap.subscribe(param => {
        if (param.has('id')) {
          this.mode = 'comments'
          let id = param.get('id') as string
          this.postSvc.getComments(id).subscribe(res => this.comments = res)
          this.postSvc.getPostById(id).subscribe(res => this.post = res)
        }
        else {
          this.postSvc.getPosts().subscribe(res => {
            let user = this.userSvc.getUser()
            this.posts = res.filter(post => Number(post.userId) !== user.id)
            this.originalPosts = res.filter(post => Number(post.userId) !== user.id)
          }
          )
        }
      })
    }
    else {
      this.postSvc.getPosts().subscribe(res => {
        this.posts = res.filter(post => Number(post.userId) === this.userId)
        this.originalPosts = res
      })
    }
  }
  navigateToUser(e:string): void {
    this.router.navigate(['/profile', e])
  }

  navigateToComments(e: string) {
    this.router.navigate(['/post', e])
  }

  filterPosts(e: { title: string, userId: number | null }) {
    console.log(e)
    if (e.title === '' && e.userId !== null) { //Filter only by user id
      this.posts = this.originalPosts.filter(post => Number(post.userId) === e.userId)
    }
    else if (e.title !== '' && e.userId === null) { //Filter only by title
      this.posts = this.originalPosts.filter(post => post.title.includes(e.title))
    }
    else if (e.title !== '' && e.userId !== null) { //Filter by title and id
      this.posts = this.originalPosts.filter(post => post.title.includes(e.title) && Number(post.userId) === e.userId)
      }
    else { //There is no filter, so return all posts
      this.posts = this.originalPosts
    }
  }

}