import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodosService } from 'src/app/services/todos.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-todospage',
  templateUrl: './todospage.component.html',
  styleUrls: ['./todospage.component.scss']
})
export class TodospageComponent implements OnInit {

  todos: Todo[] = []
  originalTodos: Todo[] = []
  mode: string = ''

  @Input() userId: number | null = null

  constructor (private todoSvc: TodosService, private userSvc: UserService) { }

  ngOnInit(): void {
    if (this.userId === null) {
      this.todoSvc.getTodos().subscribe(res => {
        let user = this.userSvc.getUser()
        this.todos = res.filter(todo =>
          Number(todo.userId) !== user.id
        )
        this.originalTodos = res.filter(todo =>
          Number(todo.userId) !== user.id
        )
      })
    }
    else {
      this.todoSvc.getTodos().subscribe(res => {
        this.todos = res.filter(todo =>
          Number(todo.userId) === this.userId
        )
      })
    }
  }

  filter(e: { type: string, id: number | null }) {
    if (e.type === '' && e.id !== null) { //Filter only by id
      this.todos = this.originalTodos.filter(todo => Number(todo.userId) === e.id)
    }
    else if (e.type !== '' && e.id === null) { //Filter only by type
      e.type === 'completed' ? this.todos = this.originalTodos.filter(todo => todo.completed === true) :
        this.todos = this.originalTodos.filter(todo => todo.completed === false)
    }
    else if (e.type !== '' && e.id !== null) { //Filter by type and id
      e.type === 'completed' ? this.todos = this.originalTodos.filter(todo => todo.completed === true && Number(todo.userId) === e.id) :
      this.todos = this.originalTodos.filter(todo => todo.completed === false && Number(todo.userId) === e.id)
      }
    else { //There is no filter, so return all todos
      this.todos = this.originalTodos
    }
  }
}