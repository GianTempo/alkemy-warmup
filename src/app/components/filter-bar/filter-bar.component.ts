import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {

  todoFilter = {
    type: '',
    id: null
  }

  postFilter = {
    title: '',
    userId: null
  }

  @Input() mode:string = ''

  @Output() onTodoFilter: EventEmitter<{type:string, id: number | null}> = new EventEmitter<{type:string, id: number | null}>();
  @Output() onPostFilter: EventEmitter<{title:string, userId: number | null}> = new EventEmitter<{title:string, userId: number | null}>();

  constructor() { }

  ngOnInit(): void {
  }

  //Todo Methods

  setTodoFilter(mode: string): void {
    if (this.todoFilter.type === mode) {
      this.todoFilter.type = ''
      this.onTodoFilter.emit(this.todoFilter)
    }
    else {
      this.todoFilter.type = mode
      this.onTodoFilter.emit(this.todoFilter)
    }
  }

  emitTodo() {
    this.onTodoFilter.emit(this.todoFilter)
  }

  //Posts Methods

  emitPost() {
    this.onPostFilter.emit(this.postFilter)
  }

}
