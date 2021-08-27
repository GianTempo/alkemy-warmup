import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodospageComponent } from './todospage/todospage.component';
import { MaterialModule } from '../material.module';
import { TodocardComponent } from './todocard/todocard.component';
import { FilterBarComponent } from '../components/filter-bar/filter-bar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodospageComponent,
    TodocardComponent,
    FilterBarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    FilterBarComponent,
    TodospageComponent
  ]
})
export class TodosModule { }
