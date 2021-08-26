import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todospage',
  templateUrl: './todospage.component.html',
  styleUrls: ['./todospage.component.scss']
})
export class TodospageComponent implements OnInit {

  todos: Todo[] = []

  constructor(private todoSvc:TodosService) { }

  ngOnInit(): void {
    this.todoSvc.getTodos().subscribe(res => this.todos = res)
  }

}
