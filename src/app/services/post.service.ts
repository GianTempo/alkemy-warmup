import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
import { environment } from '../../environments/environment'
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  URL_API: string = `${environment.BASE_URL_API}/posts`

  constructor (
    private http: HttpClient,
    private userSvc:UserService
  ) {
    this.setLoggedUserPosts()
   }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.URL_API)
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.URL_API}/${id}`)
  }

  getComments(id:string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.URL_API}/${id}/comments`)
  }

  setLoggedUserPosts(): void {
    let user = this.userSvc.getUser()
    let posts: Post[]
    this.getPosts().subscribe(res => {
      posts = res.filter(post => Number(post.userId) === user.id)
      localStorage.userPosts = JSON.stringify(posts)
    })
  }

  getLoggedUserPosts(): Post[] {
    let posts:Post[] = JSON.parse(localStorage.userPosts)
    return posts
  }

  addPost(newPost: Post): void {
    let posts:Post[] = JSON.parse(localStorage.userPosts)
    posts.push(newPost)
    localStorage.userPosts = JSON.stringify(posts)
  }

  removePost(postId: string): void {
    let posts:Post[] = JSON.parse(localStorage.userPosts)
    let newPosts = posts.filter(post => post.id !== postId)
    localStorage.userPosts = JSON.stringify(newPosts)
  }

  editPost(newPost: Post): void {
    let posts:Post[] = JSON.parse(localStorage.userPosts)
    let newPosts = posts.map(pst => {
      pst.id === newPost.id ? pst = newPost : null
    })
    localStorage.userPosts = JSON.stringify(newPosts)
  }
}
