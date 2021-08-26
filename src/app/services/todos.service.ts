import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  URL_API = `${environment.BASE_URL_API}/todos`

  constructor (private http:HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.URL_API)
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.URL_API}/${id}`)
  }

  getUserTodos(userId: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.BASE_URL_API}/users/${userId}/todos`)
  }
}
