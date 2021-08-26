import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  URL_API: string = `${environment.BASE_URL_API}/posts`

  constructor (private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.URL_API)
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.URL_API}/${id}`)
  }

  getComments(id:string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.URL_API}/${id}/comments`)
  }
}
