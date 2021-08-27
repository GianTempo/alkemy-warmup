import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { environment } from '../../environments/environment'
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  URL_API = `${environment.BASE_URL_API}/todos`

  constructor (
    private http: HttpClient,
    private userSvc:UserService
  ) {
    this.setLoggedUserTodos()
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.URL_API)
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.URL_API}/${id}`)
  }

  getUserTodos(userId: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.BASE_URL_API}/users/${userId}/todos`)
  }

  setLoggedUserTodos(): void {
    let user = this.userSvc.getUser()
    this.getUserTodos(user.id.toString()).subscribe(res => {
      localStorage.setItem('userTodos', JSON.stringify(res));
    })
  }

  getLoggedUserTodos(): Todo[] {
    let todos = localStorage.userTodos
    todos = JSON.parse(todos)
    return todos
  }

  addTodo(todo: Todo): void {
    let todos: Todo[] = JSON.parse(localStorage.userTodos)
    todos.push(todo)
    localStorage.userTodos = JSON.stringify(todos)
  }

  removeTodo(todoId: string): void {
    let todos: Todo[] = JSON.parse(localStorage.userTodos)
    todos.filter(todo => todo.id !== todoId)
    localStorage.userTodos = JSON.stringify(todos)
  }

  editTodo(todo: Todo): void {
    let todos: Todo[] = JSON.parse(localStorage.userTodos)
    let newtodos = todos.map(td => {
      td.id === todo.id ? td = todo : null
    })
    localStorage.userTodos = JSON.stringify(newtodos)
  }
}
