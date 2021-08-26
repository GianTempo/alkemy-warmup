import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodospageComponent } from './todospage/todospage.component';
import { MaterialModule } from '../material.module';
import { TodocardComponent } from './todocard/todocard.component';



@NgModule({
  declarations: [
    TodospageComponent,
    TodocardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TodospageComponent
  ]
})
export class TodosModule { }
