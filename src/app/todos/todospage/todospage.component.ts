import { Component, OnInit } from '@angular/core';
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
  mode: string = ''

  constructor(private todoSvc:TodosService, private userSvc:UserService) { }

  ngOnInit(): void {
    this.todoSvc.getTodos().subscribe(res => {
      let user = this.userSvc.getUser()
      this.todos = res.filter(todo =>
        Number(todo.userId) !== user.id
      )
    })
  }

}
