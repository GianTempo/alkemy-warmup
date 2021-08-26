import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todocard',
  templateUrl: './todocard.component.html',
  styleUrls: ['./todocard.component.scss']
})
export class TodocardComponent implements OnInit {

  @Input() todo: Todo = {
    userId: '',
    id: '',
    title: '',
    completed: false
  }
  @Input() mode:string = ''

  @Output() submit:EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submit.emit(this.todo)
  }

  changeStatus(): void {
    this.todo.completed = !this.todo.completed
  }
}
